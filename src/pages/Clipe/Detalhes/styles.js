import styled from 'styled-components';



export const Container = styled.div`
    display: block;
    border: 1px solid red;
    margin: 8px 0px 8px 0px;
    color: white;
    width: 1080px;
    height: auto;


    .cont-iframe{
        display: flex;
        margin-top: 16px;
        justify-content: center;
        width: 100%;
        height: auto;
        border: 1px solid blue;
    }

    .iframe{
        display: flex;
        width: 640px;
        height: 360px;
    }

    .area-button-streamer{
        display: flex;
        margin: 16px 0px 16px 0px;
        justify-content: center;
        border: 1px solid white;
    }
    


    @media screen and (max-width: 640px){ 
        width: 100%;

        .iframe{
            width: 100%;
        }

        .cont-iframe{
            justify-content: start;
        }

        .area-button-streamer{
            justify-content: start;
        }
    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }
`;