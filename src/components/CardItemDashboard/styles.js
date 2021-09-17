import styled from 'styled-components';
import { Edit } from '@styled-icons/boxicons-regular/Edit';
import { PageDelete } from '@styled-icons/foundation/PageDelete';

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 600px;
    height: 150px;
    background: var(--corSecundaria);
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const AreaImgCard = styled.div`
    display: flex;
    width: 100%;
    max-width: 180px;
    justify-content: center;
    align-items: center;


    .area-img{
        img{
            max-width: 130px;
            height: 130px;
            border-radius: 50%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            
        }
    }
`;

export const AreaContentCard = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

    .content-card{
        display: block;
        color: white;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        
        span{
            color: var(--corTerciaria);
        }
    }
`;

export const AreaButton = styled.div`
    display: block;
    margin: 40px 5px 0px 0px;
    height: 70px;
`;

export const IconEdit = styled(Edit)`
    color: white;
    width: 25px;

    :hover{
        cursor: pointer;
    }
`;

export const IconDelete = styled(PageDelete)`
    color: white;
    margin-top: 12px;
    width: 25px;

    :hover{
        cursor: pointer;
    }
`;
