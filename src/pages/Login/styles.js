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

`;

export const Footer = styled.div`
    grid-area: F;

    background: blue;
`;