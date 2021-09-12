import styled from 'styled-components';

export const Container = styled.div`
    color: white;
    width: 100%;
    max-width: 1080px;
    min-height: 970px;
    border: 1px solid red;

    .cont-slide-principal{
        margin: 16px 0px 16px 0px;
        border: 1px solid white;
        width: 100%;
        min-height: 350px;
    }


    .cont-slide-clipes{
        margin: 8px 0px 16px 0px;
        border: 1px solid white;
        width: 100%;
        min-height: 250px;
    }

    .cont-slide-streamer{
        margin: 8px 0px 16px 0px;
        border: 1px solid white;
        width: 100%;
        min-height: 250px;
    }

    .cont-slide-cidade{
        margin: 8px 0px 16px 0px;
        border: 1px solid white;
        width: 100%;
        min-height: 250px;
    }

    .cont-publicity{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8px 0px 16px 0px;
        border: 1px solid white;
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
        margin: 8px 0px 16px 0px;
        border: 1px solid white;
        width: 100%;
        min-height: 250px;
    }


    @media screen and (max-width: 640px){

    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }

`;