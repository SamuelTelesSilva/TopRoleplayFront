import styled from 'styled-components';

export const Container = styled.div`
    .menu{
        display: flex;
        min-width: 100%;
        height: 100%;
        position: fixed;
        z-index: 200;
        transform: translateX(-110%);
        transition: transform 0.3s ease-out;
        top: 0;
        left: 0;
    }

    .menu.open{
        transform: translateX(0);
    }

    .area-conteudo{
        display: block;
        width: 80%;
        background: linear-gradient(to right, var(--corFundoPrincipal), var(--corSecundaria));

        .area-icon{
            width: 60px;
            height: 50px;
            margin: 5px 0px 5px 1px;
        }

    }

    /*Essa div é só para deixar ela transparente para ser clicada e fechar o menu */
    .fantasma{
        width: 20%;
        background-color: black;
        opacity: 0.1;
    }



`;