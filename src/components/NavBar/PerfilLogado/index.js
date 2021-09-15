import React, {useState, useEffect} from 'react';
import {Container, SettingsOutlineIcon, CreateIcon} from './styles';
import {useAuth} from '../../../providers/auth';
import Button from '../../Button/index';
import history from '../../../history';
import { Link } from 'react-router-dom';

const PerfilLogado = () => {
    
    const { authenticated } = useAuth();
    const [role, setRole] = useState(localStorage.getItem('role'));

    useEffect(()=>{
        setRole(localStorage.getItem('role'));
    }, []);

    //Pegando os dados do localStorage
    const nomePerfil = localStorage.getItem('nome');
    const urlAvatar = localStorage.getItem('urlAvatar');
    let element;

    const efetuarLogin = () => {
        history.push('/login');
    }
    const sairDoPerfil = () =>{
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        localStorage.removeItem('nome');
        localStorage.removeItem('urlAvatar');
        localStorage.removeItem('senhaUser');
        localStorage.removeItem('role');
        window.location.reload(); //fazendo um reload
        history.push('/');
    }

    if(role !== null){
        if(authenticated && role === 'ROLE_USER'){
            element = (
                <div className="icon-conf-perfil">
                    <Link to='/dashboard/usuario'>
                        <SettingsOutlineIcon />
                    </Link>
                </div>
            );
        }if(authenticated && role === 'ROLE_ADMIN'){
            element = (
                <div className="icon-conf-perfil">
                    <Link to='/dashboard'>
                        <CreateIcon />
                    </Link>
                </div>
            );
        }
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
            {element}
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
