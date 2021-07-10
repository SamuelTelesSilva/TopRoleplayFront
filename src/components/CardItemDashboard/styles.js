import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 400px;
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
            height: auto;
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