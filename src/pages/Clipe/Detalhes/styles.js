import styled from 'styled-components';



export const Container = styled.div`
    display: block;
    margin: 8px 0px 18px 0px;
    color: white;
    width: 1080px;
    height: auto;


    .cont-iframe-player{
        display: flex;
        margin-top: 16px;
        justify-content: center;
        width: 100%;
        height: auto;
    }

    .iframe{
        display: flex;
        width: 640px;
        height: auto;
    }

    .area-button-streamer{
        display: flex;
        margin: 32px 0px 16px 0px;
        justify-content: center;
        width: 100%;

        a{
            width: 200px;
            text-decoration: none;
        }
        
    }

    .player-react{
        display: flex;
        width: 640px;
        height: auto;
    }

    .area-carousel-clip{
        width: 100%;
    }
    


    @media screen and (max-width: 640px){ 
        width: 100%;

        .iframe, .player-react{
            width: 100%;
        }

        .cont-iframe-player{
            justify-content: start;
        }

    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }
`;