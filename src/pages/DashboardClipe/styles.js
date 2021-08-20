import styled from 'styled-components';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { PageDelete } from '@styled-icons/foundation/PageDelete';


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

    .area-select-streamer{
        display: flex;
        width: 100%;
    }

    .area-select-streamer select{
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
    
    .streamer-edit-select{
        display: flex;
        justify-content: center;
        margin-bottom: 5px;
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

    .area-pagination{
        margin: 16px 0px 16px 0px;
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


export const Table = styled.div`
    width: 100%;

    table{
        width: 100%;
    }

    th{
        border: 1px solid var(--corTerciaria);
        height: 50px;
        border-radius: 5px;
    }

    td{
        font-size: 16px;
        text-align: center; 
        
    }
`;

export const IconEdit = styled(Edit)`
    color: white;
    width: 25px;

    :hover{
        cursor: pointer;
        color: var(--corTerciaria);
    }
`;

export const IconDelete = styled(PageDelete)`
    color: white;
    width: 25px;

    :hover{
        cursor: pointer;
        color: var(--corTerciaria);
    }
`;
