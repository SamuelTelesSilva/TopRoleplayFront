import React, {useState} from 'react';
import {Grid, Main, Footer} from './styles';
import {Link} from 'react-router-dom';

import NavBar from '../../components/NavBar/Toolbar/index';
import Button from '../../components/Button/index';
import { criarUsuario } from '../../service/toproleplayService';
import history from '../../history';


const Cadastro = () =>{

    const [cadastroInput, setCadastroInput] = useState({
        nome: '',
        idade: '',
        email: '',
        senha: '',
        confirmaSenha:''
    });
    const [aviso, setAviso] = useState('');

    //gerando uma hash para a senha do usuario
    var bcrypt = require('bcryptjs');
    var salt = bcrypt.genSaltSync(10);
    var hash= '';

    //Pegando os valores digitados no input
    const changeValue = (event) => {
        const { name, value } = event.target;
        setCadastroInput({...cadastroInput, [name]: value});
    }

    //
    const validarDadosInput = () => {

        if(cadastroInput.nome === '' || cadastroInput.nome.length < 2){
            document.getElementById('input-nome').focus();
            //document.getElementById('msgError').innerHTML = 'É obrigatório informar um nome que tenha mais de 2 caracteres';
            setAviso('É obrigatório informar um nome que tenha mais de 2 caracteres');
            document.getElementById('input-nome').style.border = '2px solid var(--corTerciaria)';

        }else if(cadastroInput.idade === '' || cadastroInput.idade < 4 || cadastroInput.idade > 100){
            document.getElementById('input-idade').focus();
            //document.getElementById('msgError').innerHTML = 'É obrigatório informar uma idade que seja MAIOR que 4 anos e MENOR que 100 anos';
            setAviso('É obrigatório informar uma idade que seja MAIOR que 4 anos e MENOR que 100 anos');
            document.getElementById('input-idade').style.border = '2px solid var(--corTerciaria)';

        }else if(cadastroInput.email === '' || cadastroInput.email.length < 4){
            //Tenho que validar um email real
            document.getElementById('input-email').focus();
            //document.getElementById('msgError').innerHTML = 'É obrigatório informar o seu email';
            setAviso('É obrigatório informar o seu email');
            document.getElementById('input-email').style.border = '2px solid var(--corTerciaria)';

        }else if(cadastroInput.senha === '' || cadastroInput.senha.length < 4){
            document.getElementById('input-senha').focus();
            //document.getElementById('msgError').innerHTML = 'É obrigatório informar uma senha que tenha mais de 4 caracteres';
            setAviso('É obrigatório informar uma senha que tenha mais de 4 caracteres');
            document.getElementById('input-senha').style.border = '2px solid var(--corTerciaria)';
        }else if(cadastroInput.confirmaSenha === ''){
            document.getElementById('input-senha2').focus();
            document.getElementById('input-senha2').style.border = '2px solid var(--corTerciaria)';
            setAviso('É obrigatório repetir a SENHA');
            //document.getElementById('msgError').innerHTML = 'É obrigatório repetir a SENHA';
        }  
    }

    //Verificando e gerando uma hash para a senha do usuario
    if(cadastroInput.confirmaSenha !== ''){
        if(cadastroInput.confirmaSenha !== cadastroInput.senha){
            document.getElementById('msgError').innerHTML = 'É obrigatório repetir a SENHA';
        }else{
            hash = bcrypt.hashSync(cadastroInput.confirmaSenha, salt);
            document.getElementById('msgError').innerHTML = '';
        }
    }

    //Função que envia os dados para api
    async function handleSubmit(){
        const data = {
            'nome': cadastroInput.nome,
            'email': cadastroInput.email,
            'senha': hash
        }

        //Verificando se existe campos vazios
        if(cadastroInput.nome !== '' && cadastroInput.idade !== '' && cadastroInput.email !== ''  && hash !== ''){
            await criarUsuario(data)
            .then(response => {
                if(response.status === 201){
                    alert("Cadastro efetuado com sucesso");
                    history.push('/login');      
                }
            })
            .catch(e => {
                console.log(e);
            });
        }else{
            validarDadosInput();
        }
    }


    return(
        <Grid>
            <NavBar/>
            <Main>
                <div className="aux-cont">
                    <div className="area-form"> 
                        <form>
                            <div>
                                <label>Nome</label> 
                            </div> 
                            <input 
                                id="input-nome"
                                type="text"
                                placeholder="Nome"
                                name="nome"
                                value={cadastroInput.nome}
                                onChange={changeValue} 
                                />
                            <div>
                                <label>Idade</label> 
                            </div>
                            <input 
                                id="input-idade"
                                type="number" 
                                placeholder="Idade"
                                name="idade"
                                value={cadastroInput.idade}
                                onChange={changeValue}      
                                />
                            <div>
                                <label>E-mail</label> 
                            </div> 
                            <input 
                                id="input-email"
                                type="email" 
                                placeholder="E-mail"
                                name="email"
                                value={cadastroInput.email}
                                onChange={changeValue}      
                                />
                            <div>
                                <label>Senha</label> 
                            </div>
                            <input
                                id="input-senha" 
                                type="password" 
                                placeholder="Senha"
                                name="senha"
                                value={cadastroInput.senha}
                                onChange={changeValue}      
                                />
                            <div>
                                <label>Digite a Senha novamente</label> 
                            </div>
                            <input 
                                id="input-senha2"
                                type="password" 
                                placeholder="Confirme a sua senha"
                                name="confirmaSenha"
                                value={cadastroInput.confirmaSenha}
                                onChange={changeValue}      
                                />
                        </form> 
                    </div>
                    <div id="msgError" className="msgError">
                        {aviso}
                    </div>
                    <div className="area-button">
                        <div className="button-cadastrar">
                            <input 
                                className="input-button"
                                type="submit" 
                                value="Criar conta"
                                onClick={handleSubmit}    
                                />
                        </div>
                        <div className="button-entrar">
                            <Link 
                                to={`/login`}
                                style={{textDecoration: 'none'}}>
                                    <Button title="Entrar"/>
                            </Link>
                            
                        </div>
                    </div>
                </div>     
            </Main>
            <Footer/>
        </Grid>
    );
}
export default Cadastro;