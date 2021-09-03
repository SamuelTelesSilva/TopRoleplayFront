import styled from 'styled-components';

export const Container = styled.div`
    
    width: 100%;
    


    .player-react{
        display: flex;
        border: 1px solid white;
        height: 425px;
        
    }

    .cont-slider{
        display: flex;
        justify-content: center;
        width: 100%;
        border: 1px solid yellow;
    }

    .carousel{
        width: 900px;
        border: 1px solid black;
    }


    @media screen and (max-width: 640px){ 
        width: 100%;

        .player-react{
            width: 100%;
        }

        .carousel{
            width: ${props => props.width-50}px;
        }

        .cont-slider{
            display: flex;
            width: 100%;
            justify-content: center;
        }
    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        
    }
`;