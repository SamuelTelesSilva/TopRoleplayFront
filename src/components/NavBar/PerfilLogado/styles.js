import styled from 'styled-components';

export const Container = styled.div`
    display: ${props => props.autenticado ? 'flex' : 'none'};
    align-items: center;
    

    .img-perfil{
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
        margin-right: 15px;
        color: white;
        font-size: 16px;
    }

    .botao-sair{
        width: 80px;
    }
`;