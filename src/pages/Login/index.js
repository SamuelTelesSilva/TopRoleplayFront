import React from 'react';
import {Grid, Main, Footer, Header} from './styles';
import { useAuth } from '../../providers/auth';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/index';

const Login = () =>{
    const { handleLogin, loginInput, setLoginInput, msgError} = useAuth();

    //Pegando os valores do input e enviando para o loginInput do auth
    const changeValue = event => {
        const {name, value} = event.target;
        setLoginInput({...loginInput, [name]: value});
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