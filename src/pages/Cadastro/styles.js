import styled from 'styled-components';

/*

    Tamanhos de telas:
    Pequena (menor que 640 px)
    Média (641 px a 1.007 px)
    Grande (1.008 px e maior)

*/

export const Grid = styled.div`
    display: grid;
    grid-template-rows: 70px auto 87px;
    grid-template-areas: 
        'H'
        'M'
        'F'
    ;
    height: 100%;

    /* Mobile de 0 até 640px*/
    @media screen and (max-width: 640px){ 
        grid-template-rows: 70px auto 87px;
    }

`;


export const Main = styled.div`
    grid-area: M;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 32px 0px 32px 0px;

    .aux-cont{
        width: 650px;
        height: 100%;
    }

    .area-form{
        display: flex;
        width: 100%;
        
        form{
            width: 100%;
        }

        div label{
            display: flex;
            justify-content: center;
            color: white;
            margin-bottom: 5px;
        }

        input{
            width: 100%;
            height: 35px;
            border-radius: 15px;
            padding-left: 13px;
            background-color: var(--corFundoPrincipal);
            margin-bottom: 25px;
            border: 2px solid white;
            color: white;
        }

    }

    .area-button{
        display: flex; 
        width: 100%;
        justify-content: center;
        margin-top: 20px;
    }

    .button-entrar, .button-cadastrar{
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .button-entrar{
        a{
            width: 100%;
        }
    }

    .button-cadastrar{
        margin-left: 5px;
    }

    .input-button{
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--corTerciaria);
        border-radius: 5px;
        color: white;
        width: 100%;
        max-width: 250px;
        height: 50px;
        font-size: 16px;
        :hover{
            cursor: pointer;
        }
    }

    .msgError{
        color: var(--corTerciaria);
        font-size: 14px;
        word-break: break-all;
    }
    
    @media screen and (max-width: 640px){
        

        .aux-cont{
            display: block;
            width: 100%;
            margin: 0px 1% 0px 1%;
        }

        .area-button{
            display: block; 
            margin-top: 10px;
        }

        .button-cadastrar{
            margin-bottom: 8px;
            margin-left: 0px;
        }

        .area-form{
            input{
                margin-bottom: 15px;
            }
        }

        .input-button{
            max-width: 100%;
        }
    }
`;

export const Header = styled.div`
    grid-area: H;
    background: linear-gradient(to right, var(--corFundoPrincipal), var(--corSecundaria));
`;

export const Footer = styled.div`
    grid-area: F;
    background: linear-gradient(to right, var(--corFundoPrincipal), var(--corSecundaria));
`;