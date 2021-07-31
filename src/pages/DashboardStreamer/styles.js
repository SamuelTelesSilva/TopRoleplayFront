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

export const AreaAssociation = styled.div`
    display: block;
    margin-top: 100px;
    width: 100%;
    border: 1px dashed white;
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

    .area-select-streamer, .area-select-city{
        display: block;
        width: 250px;
    }

    .area-select-streamer select, .area-select-city select{
        width: 250px;
        height: 30px;
        border-radius: 5px;
    }


`;

export const AreaContent = styled.div`
    display: block;
    margin-top: 120px;

    
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
        margin-top: 16px;
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