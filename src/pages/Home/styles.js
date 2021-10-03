import styled from 'styled-components';
import {HeartFill} from '@styled-icons/bootstrap';


export const Container = styled.div`
    color: white;
    width: 100%;
    max-width: 1080px;
    min-height: 970px;
    margin-top: 16px;


    .cont-title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .cont-title-ranking{
        display: flex;
        align-items: center;

        img{
            width: 25px;
            height: 25px;
            margin-left: 10px;
        }
    }

    .cont-ver-todos{
        a{
            text-decoration: none;
            color: white;
        }
    }

    .cont-slide-principal{
        width: 100%;
        min-height: 350px;
        margin-bottom: 16px;
    }

    .cont-slide-streamer, .cont-slide-cidade, .cont-slide-clipes{
        
        width: 100%;
        min-height: 200px;
        margin-bottom: 8px;
    }

    .cont-publicity{
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 100%;
        min-height: 200px;
    }

    .publicity{
        width: 100%;
        max-width: 600px;
        height: 120px;
        border: 1px solid red;
    }

    .cont-slide-grupo{
        width: 100%;
        min-height: 200px;
    }

    .aux-cont-card{
        padding: 5px;
    }


    @media screen and (max-width: 640px){

        .cont-slide-principal{
            min-height: 210px;
        }

    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }

`;

export const HeartFull = styled(HeartFill)`
    width: 20px;
    height: 20px;
    margin-left: 10px;
`;