import styled from 'styled-components';

export const Container = styled.div`
    max-width: 260px;
    height: auto;


    border-radius: 5px;
    background-color: var(--corSecundaria);
    color: white;


    .area-img-card{
        max-width: 260px;
        max-height: 220px;

        img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
    }

    .area-content-card{
        margin: 3px;
        height: 45px;

        .card-title{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;    
            font-size: 16px;
            text-align: center;   
        }

        .card-name-streamer{
            display: flex;
            justify-content: center;
            margin-top: 3px;
            color: var(--corTerciaria);
        }
        
    }

    @media screen and (max-width: 640px){ 

    }
`;