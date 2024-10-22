import styled from 'styled-components';
import { Play } from '@styled-icons/bootstrap/Play';
import {HeartFill} from '@styled-icons/bootstrap';

export const Container = styled.div`
    max-width: 300px;
    height: auto;
    border-radius: 5px;
    color: white;
    
    a{
        color: white;
    }

    .cont-aux{   
        display: flex;
        z-index: 1;
        justify-content: center;
        align-items: center;   
    }


    .area-icon{

    }


    .area-img-card{
        width: 100%;
        max-width: 300px;
        height: 180px;
        z-index: 1;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        opacity: 1;

        img{
            width: 100%;
            height: 100%;
            border-radius: 5px;

        }
    }

    .area-info{
        display: none;
    }

    :hover{
        cursor: pointer;

        .area-info{
            display: flex;
            position: absolute;
            z-index: 2;
            font-size: 20px;
        }
        .area-img-card{
            transition: 0.3s;
            opacity: 0.5;
        }
    }

    .cont-title-coracao{
        display: block;
    }

    .cont-coracao{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 8px;
    }
    

    @media screen and (max-width: 640px){ 

    }
`;

export const IconPlay = styled(Play)`
    color: white;
    width: 50px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const HeartFull = styled(HeartFill)`
    width: 20px;
    height: 20px;
    margin-left: 10px;
`;
