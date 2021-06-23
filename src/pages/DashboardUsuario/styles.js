import styled from 'styled-components';

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

    .aux-cont{
        width: 650px;
        height: 300px;

        border: 1px solid red;
    }


    @media screen and (max-width: 640px){
        .aux-cont{
            display: block;
            width: 100%;
            margin: 0px 1% 0px 1%;
        }
    }
`;

export const Footer = styled.div`
    grid-area: F;
    background: linear-gradient(to right, var(--corFundoPrincipal), var(--corSecundaria));

`;



