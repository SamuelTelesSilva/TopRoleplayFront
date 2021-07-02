import React from 'react';
import {Container} from './styles';
import {useAuth} from '../../../providers/auth';
import Button from '../../Button/index';
import history from '../../../history';

const PerfilLogado = () => {
    
    const { authenticated } = useAuth();


    //Pegando os dados do localStorage
    const nomePerfil = localStorage.getItem('nome');
    const urlAvatar = localStorage.getItem('urlAvatar');

    const sairDoPerfil = () =>{
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        localStorage.removeItem('nome');
        localStorage.removeItem('urlAvatar');
        localStorage.removeItem('senhaUser');
        window.location.reload(); //fazendo um reload
        history.push('/login');
    }

    return(
        <Container autenticado={authenticated}>
            <div className="img-perfil">
                <div className="perfil">
                    <img src={urlAvatar} alt={urlAvatar}/>
                </div>
            </div>
            <div className="nome-perfil">
                {nomePerfil}
            </div>
            <div className="botao-sair">
                <Button title="Sair" onclick={sairDoPerfil}/>
            </div>
        </Container>
    );
}
export default PerfilLogado;
