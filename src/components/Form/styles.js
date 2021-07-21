import styled from 'styled-components';

export const Container = styled.div`
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
    }
`;