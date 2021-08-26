import styled from 'styled-components';

export const Container = styled.div`
    grid-area: H;
    display: flex;
    width: 100%;
    background: linear-gradient(to right, var(--corFundoPrincipal), var(--corSecundaria));


    /* Mobile de 0 até 640px*/
    @media screen and (max-width: 640px){ 
        justify-content: center;
        align-items: center;
    }
`;