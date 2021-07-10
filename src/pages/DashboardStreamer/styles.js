import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height:auto;
    border: 1px solid red;
    justify-content: center;
`;

export const AreaForm = styled.div`
    display: block;
    width: 50%;
    height: 100%;
    border: 1px solid white;
`;

export const Form = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid red;

    .title-input, .redeSociais{
        display: flex;
        justify-content: center;
        margin: 16px 0px 16px 0px;
    }

    input{
        width: 100%;
        height: 35px;
        border-radius: 15px;
        padding-left: 13px;
        background-color: var(--corFundoPrincipal);
        border: 2px solid white;
        color: white;
    }

    .redeSociais{
        color: var(--corTerciaria);
    }
`;

export const AreaButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    border: 1px solid blue;
    margin: 24px 0px 16px 0px;

    .button-register{
        width: 150px;
        margin-right: 10px;
    }

    .button-update{
        width: 150px;
    }
`;