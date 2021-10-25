import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    .cont-slider{
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .carousel{
        width: 100%;
    }

    @media screen and (max-width: 1100px){ 
        width: 100%;
        
        .carousel{
            width: ${props => props.width-50}px;

            .slick-prev {
                left: 0px;
                z-index:999;
            }

            .slick-next {
                right: 20px;
            }
        }

        .cont-slider{
            display: flex;
            width: 100%;
            justify-content: center;
        }
    }

`;