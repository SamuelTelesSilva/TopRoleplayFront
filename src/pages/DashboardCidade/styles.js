import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100%;
    border: 1px solid red;

    .aux-cont{
        display: block;
        width: 50%;
        height: 100%;
        border: 1px solid red;
    }

    @media screen and (max-width: 640px){ 
        justify-content: start;

        .aux-cont{
            width: 100%;
        }
    }

`;

export const AreaForm = styled.div`
    display: block;
    width: 100%;
    height: auto;
`;

export const Form = styled.div`
    display: block;
    width: 100%;
    height: 100%;

    .title-input, .redeSociais{
        display: flex;
        justify-content: center;
        margin: 16px 0px 16px 0px;
    }

    .input-form{
        width: 100%;
        height: 35px;
        border-radius: 15px;
        padding-left: 13px;
        padding-right: 8px;
        background-color: var(--corFundoPrincipal);
        border: 2px solid white;
        color: white;
    }

    .redeSociais{
        color: var(--corTerciaria);
        font-size: 18px;
    }
`;