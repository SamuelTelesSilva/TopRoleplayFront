import styled from 'styled-components';
import { SettingsOutline } from '@styled-icons/evaicons-outline/SettingsOutline';

export const Container = styled.div`
    display: flex;
    align-items: center;
    

    .img-perfil{
        display: ${props => props.autenticado ? 'flex' : 'none'};
        margin-right: 15px;
    }

    .perfil{
        border-radius: 50%;
        img{
            border-radius: 50%;
            width: 50px;
            height: 50px;
        }
        
    }
    .nome-perfil{
        display: ${props => props.autenticado ? 'flex' : 'none'};
        margin-right: 15px;
        color: white;
        font-size: 16px;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .botao-sair{
        width: 80px;
        
    }

    .icon-conf-perfil{
        display: flex;
        justify-content: center;
        width: 50px;
    }
`;


export const SettingsOutlineIcon = styled(SettingsOutline)`
    color: white;
    width: 25px;

    :hover{
        cursor: pointer;
    }
`;