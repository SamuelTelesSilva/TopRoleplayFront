import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    height: 100%;

    .aux-cont{
        display: block;
        width: 50%;
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

export const AreaButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 24px 0px 16px 0px;

    .button-register, .button-register-association{
        width: 150px;
        margin-right: 10px;
    }
    
    .button-update{
        width: 150px;
    }
    
    .button-return{
        width: 150px;
        margin-left: 10px;
    }
`;

export const AreaContent = styled.div`
    display: block;

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

    .area-content-cards{
        display: flex;
        width: 100%;
        height: 830px; 
        justify-content: center;
    }

    .content-cards{
        display: block;
        width: 100%;
        max-width: 600px;
    }

    .cards{
        margin-bottom: 16px;
    }

    .area-pagination{
        margin-bottom: 16px;
    }
    
`;



export const AreaSearch = styled.div`
    margin: 100px 0px 16px 0px;

    .search-content{
        display: flex;
        width: 100%;
    }

    .input-search{
        width: 100%;
        height: 35px;
        border-radius: 15px;
        padding: 0px 8px 0px 13px;
        background-color: var(--corFundoPrincipal);
        border: 2px solid var(--corTerciaria);
        color: white;
    }
`;