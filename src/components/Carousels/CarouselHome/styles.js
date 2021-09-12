import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;


    .cont-slider{
        display: flex;
        width: 100%;
        justify-content: center;

        img{
            width: 300px;
            height: 200px;
            padding: 10px;
            border-radius: 25px;
            
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
               width: 300px;
                height: 200px;
                padding: 2px;
                border-radius: 25px;
            }
        }
    }

`;