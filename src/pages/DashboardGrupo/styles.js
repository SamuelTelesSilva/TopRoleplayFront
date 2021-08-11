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

    .area-select-genero{
        display: flex;
        width: 100%;
    }

    .area-select-genero select{
        width: 100%;
        height: 35px;
        border-radius: 15px;
        padding-left: 5px;
        background-color: var(--corFundoPrincipal);
        border: 2px solid white;
        padding-left: 13px;
        padding-right: 8px;
        color: white;
    }    
`;

export const AreaButton = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 24px 0px 16px 0px;

    .button-register, .button-register-association, .button-delete-association{
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

export const AreaAssociation = styled.div`
    display: block;
    margin: 16px 0px 16px 0px;
    width: 100%;
    border: 1px dashed var(--corTerciaria);
    padding: 10px 10px 0px 10px;

    .title-association{
        display: flex;
        justify-content: center;
        width: 100%;
        color: var(--corTerciaria);
        font-size: 18px;
        margin-bottom: 15px;
    }

    .content-association{
        display: flex;
        justify-content: space-between;
    }

    .area-select-streamer, .area-select-city, .area-select-group{
        display: block;
        width: 250px;
    }

    .area-select-streamer select, .area-select-city select, .area-select-group select{
        width: 100%;
        height: 30px;
        border-radius: 5px;
        padding-left: 5px;
    }

    .title-update{
        margin-top: 10px;
    }


    @media screen and (max-width: 1200px){ 
        .content-association{
            display: block;
        }

        .area-select-streamer, .area-select-city, .area-select-group{
            width: 100%;
        }
    }
    
`;