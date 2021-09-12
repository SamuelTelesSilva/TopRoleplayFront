import styled from 'styled-components';

export const Container = styled.div`
    color: white;
    width: 100%;
    max-width: 1080px;
    min-height: 970px;
    border: 1px solid red;

    .cont-title{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }

    .cont-ver-todos{
        a{
            text-decoration: none;
            color: white;
        }
    }

    .cont-slide-principal{
        border: 1px solid white;
        width: 100%;
        min-height: 350px;
    }


    .cont-slide-clipes{
        border: 1px solid white;
        width: 100%;
        min-height: 200px;
    }

    .cont-slide-streamer{

        border: 1px solid white;
        width: 100%;
        min-height: 200px;
    }

    .cont-slide-cidade{

        border: 1px solid white;
        width: 100%;
        min-height: 200px;
    }

    .cont-publicity{
        display: flex;
        justify-content: center;
        align-items: center;
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

        border: 1px solid white;
        width: 100%;
        min-height: 200px;
    }


    @media screen and (max-width: 640px){

        .cont-slide-principal{
            min-height: 210px;
        }

    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }

`;