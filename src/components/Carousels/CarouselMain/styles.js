import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    .cont-slider{
        display: flex;
        width: 100%;
    
        img{
            width: 100%;
            height: 300px;
            padding: 5px;
        }
    }

    .carousel{
        width: 100%;
    }


    @media screen and (max-width: 640px){ 
        width: 100%;
        
        .carousel{
            width: ${props => props.width-50}px;
        }

        .cont-slider{
            display: flex;
            width: 100%;
            justify-content: center;

            img{
                width: 100%;
                max-width: 250px;
                height: 150px;
                border-radius: 25px;
            }
        }
    }

`;