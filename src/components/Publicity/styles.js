import styled from 'styled-components';

export const Container = styled.div`

    .cont-publicity{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-height: 400px;
    }

    .publicity{
        width: ${(props) => props.width}px;
        height: ${(props) => props.height}px;
    }

    .cont-adsense{
        display: flex;
    }


    @media screen and (max-width: 640px){

        .cont-publicity{
            max-height: 550px;
        }

        .cont-adsense{
            display: block;
        }
    }

`;