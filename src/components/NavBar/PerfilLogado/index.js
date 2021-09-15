import React from 'react';
import {Container, SettingsOutlineIcon} from './styles';
import {useAuth} from '../../../providers/auth';
import Button from '../../Button/index';
import history from '../../../history';
import { Link } from 'react-router-dom';

const PerfilLogado = () => {
    
    const { authenticated } = useAuth();

    //Pegando os dados do localStorage
    const nomePerfil = localStorage.getItem('nome');
    const urlAvatar = localStorage.getItem('urlAvatar');

    const efetuarLogin = () => {
        history.push('/login');
    }
    const sairDoPerfil = () =>{
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        localStorage.removeItem('nome');
        localStorage.removeItem('urlAvatar');
        localStorage.removeItem('senhaUser');
        window.location.reload(); //fazendo um reload
        history.push('/');
    }

    return(
        <Container autenticado={authenticated}>

            <div className="img-perfil">
                <div className="perfil">
                    <img src={urlAvatar} alt={urlAvatar}/>
                </div>
            </div>
            <div className="nome-perfil">
                { nomePerfil }
            </div>
            {
                authenticated ? (
                    <div className="icon-conf-perfil">
                        <Link to='/dashboard/usuario'>
                            <SettingsOutlineIcon />
                        </Link>
                    </div>
                ) : ''
            }
            <div className="botao-sair">
                <Button 
                    title={ authenticated ? 'Sair' : 'Entrar'} 
                    onclick={ authenticated ? sairDoPerfil : efetuarLogin } 
                />
            </div>
            
        </Container>
    );
}
export default PerfilLogado;
