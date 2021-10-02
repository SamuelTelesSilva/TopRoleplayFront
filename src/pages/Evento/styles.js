import styled from 'styled-components';
import { Play } from '@styled-icons/bootstrap/Play';


export const Container = styled.div`
    display: block;
    color: white;
    width: 100%;
    max-width: 1080px;
    min-height: 970px;
    margin: 16px 0px 16px 0px;
    z-index: 1;

    .cont-card-evento{
        display: flex; 
        border: 2px solid white;
        border-radius: 5px;
        margin-top: 16px;

        a{
            width: 100%;
        }
    }

    .cont-card-button{
        display: none;
    }

    .card-button-img{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        z-index: 1;
        
        
        img{
            width: 100%;
            height: 400px;
        }

        :hover{
            cursor: pointer;
            
            .cont-card-button{
                display: flex;
                width: 100px;
                position: absolute;
                z-index: 2;   
            }
        }
    }


    @media screen and (max-width: 640px){ 
        width: 96%;
        height: auto;
        margin: 2% 2%;


        .card-button-img{
            
            img{
                width: 100%;
                height: 250px;
            }
        }
    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }
`;

export const IconPlay = styled(Play)`
    color: white;
    width: 200px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;