import React, {useState} from 'react';
import {Grid, Main, Footer, Header} from './styles';
import { useAuth } from '../../providers/auth';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/index';
import { efetuarLogin } from '../../service/usuarioService';
import api from '../../service/api';
import history from '../../history';

const Login = () =>{
    const { setAuthenticated } = useAuth();
    const [msgError, setMsgError] = useState('');
    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    });
    
    //Pegando os valores do input
    const changeValue = event => {
        const {name, value} = event.target;
        setLoginInput({...loginInput, [name]: value});
    }
    //--------------------------------------------------------


    const handleLogin = async() =>{
        
        const data = {
            username: loginInput.username,
            password: loginInput.password
        }

        if(loginInput.username === ''){
            setMsgError('Precisa preencher o campo username');
        }else if(loginInput.password === ''){
            setMsgError('Precisa preencher o campo password');
        }else{
            await efetuarLogin(data)
            .then(response =>{

                //Setando os valores no localStorage
                localStorage.setItem('token', JSON.stringify(response.data.token));
                localStorage.setItem('id', response.data.id);
                localStorage.setItem('nome', response.data.nome);
                localStorage.setItem('urlAvatar', response.data.urlAvatar);
                localStorage.setItem('senhaUser', response.data.senha);
                localStorage.setItem('role', response.data.roles[0]);
            

                api.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
                setAuthenticated(true);

                history.push('/');
            }).catch(error => {
                if(error.request.status === 401){
                    setMsgError('Login e senha invalidos');
                }else{
                    setMsgError('Ocorreu um erro inesperado, por favor tente novamente. Se o erro persistir entre em contato.');
                }
            });
        }
    }

    return(
        <Grid>
            <Header/>
            <Main>
                <div className="aux-cont">
                    <div className="area-form"> 
                        <form>
                            <div>
                                <label>E-mail</label> 
                            </div> 
                            <input 
                                id="input-email"
                                type="email" 
                                placeholder="E-mail"
                                name="username"
                                value={loginInput.username}
                                onChange={changeValue}    
                                />
                            <div>
                                <label>Senha</label> 
                            </div>
                            <input 
                                id="input-password"
                                type="password" 
                                placeholder="Senha"
                                name="password"
                                value={loginInput.password}
                                onChange={changeValue} 
                                />
                        </form> 
                    </div>
                    
                    <div className="area-button">
                        <div className="button-entrar">
                            <input 
                                className="input-button"
                                type="submit" 
                                value="Entrar"
                                onClick={handleLogin}    
                            />
                        </div>
                        <div className="button-cadastrar">
                            <Link
                                to={`/register`}
                                style={{textDecoration: 'none'}}>
                                    <Button title="Criar conta"/>
                            </Link>
                        </div>
                    </div>

                    <div className="area-info">
                        <div id="msgError" className="msgError">
                            {msgError}
                        </div>
                        Esqueceu a sua senha?
                    </div>
                </div>     
            </Main>
            <Footer/>
        </Grid>
    );
}
export default Login;