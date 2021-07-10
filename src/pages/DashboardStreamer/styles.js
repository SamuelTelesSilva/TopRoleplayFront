import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100%;

    .aux-cont{
        display: block;
        width: 50%;
        border: 1px solid red;
        height: 100%;
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
    border: 1px solid red;

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

export const AreaContent = styled.div`
    display: flex;
    margin-top: 120px;

    
    .search-content{
        display: flex;
        width: 100%;
    }

    .input-search{
        width: 80%;
        height: 35px;
        border-radius: 15px 0px 0px 15px;
        padding: 0px 8px 0px 13px;
        background-color: var(--corFundoPrincipal);
        border: 2px solid var(--corTerciaria);
        color: white;
    }

    .button-search{
        width: 20%;
    }

    .button-input-search{
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--corTerciaria);
        border-radius: 0px 5px 5px 0px;
        color: white;
        width: 100%;
        height: 35px;
        font-size: 16px;

        :hover{
            cursor: pointer;
        }
    }
    
`;