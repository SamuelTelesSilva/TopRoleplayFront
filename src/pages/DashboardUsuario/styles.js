import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export const Grid = styled.div`
    display: grid;
    grid-template-rows: 70px auto 87px;
    grid-template-areas: 
        'H'
        'M'
        'F'
    ;
    height: 100%;

    /* Mobile de 0 até 640px*/
    @media screen and (max-width: 640px){ 
        grid-template-rows: 70px auto 87px;
    }
`;

export const Main = styled.div`
    grid-area: M;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .container{
        width: 650px;
        height: 100%;
        border: 1px solid red;
    }

    .cont-slider{
        img{
            width: 100%;
            height: auto;
            padding: 10px;
        }
    }


    
    @media screen and (max-width: 700px){
        .container{
            width: 100%;
            margin: 0px 1% 0px 1%;
        }
        .carousel{
            width: ${props => props.width-50}px;
            border: 1px solid white;
        }

        .cont-slider{
            display: flex;
            width: 100%;
            border: 1px solid white;
            justify-content: center;

            img{
                width: 100%;
                height: auto;
                padding: 10px;
            }
        }
    }
`;



