import styled from 'styled-components';
import { Play } from '@styled-icons/bootstrap/Play';


export const Container = styled.div`
    color: white;
    margin-right: 5px;

    .cont-aux{
        display: flex;
        z-index: 1;
        justify-content: center;
        align-items: center;
    }
    
    img{
        width: 100%;
        height: 300px;
        z-index: 1;
        border-radius: 10px; 
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .area-button{
        display: none;    
    }

    :hover{
        cursor: pointer;


        .area-button{
            display: flex;
            width: 100px;
            z-index: 2;
            position: absolute;
        }
    }
    

    @media screen and (max-width: 640px){ 
        :hover{
            .area-button{
                display: none;
            }
        }
        
    }

`;

export const IconPlay = styled(Play)`
    color: white;
    width: 200px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
`;