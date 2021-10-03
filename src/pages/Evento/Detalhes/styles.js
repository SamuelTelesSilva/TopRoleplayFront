import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    color: white;
    width: 100%;
    max-width: 1080px;
    min-height: 970px;
    margin: 16px 0px 16px 0px;
    
    .cont-player-react{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 16px;
    }

    .player-react{
        width: 60%;
        height: auto;
        margin-right: 5px;
    }

    .area-title-bar{
        margin-top: 16px;
    }

    .cont-versus{
        display: flex;
        width: 100%;
        height: auto;
        justify-content: center;
        margin: 8px 0px 8px 0px;
        
        h1{
            color: white;
            font-size: 45px;
        }
    }


    .cont-chat-twitch{
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 16px;
    }

    .chat-twitch{
        width: 100%;
    }

    .cont-button-telas{
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 24px;
    }

    .button-telas{
        width: 250px;
    }

    .cont-slide-ladoA{
        width: 100%;
        min-height: 200px;
        margin-bottom: 8px;
    }

    .aux-cont-card{
        padding: 5px;
    }

    @media screen and (max-width: 1026px){ 
        width: 100%;
        height: auto;
        margin: 0%;

        .cont-player-react{
            display: block;
            margin-top: 16px;
        }

        .player-react{
            width: 100%;
            height: auto;
            border: 1px solid red;
            margin-top: 16px;
            margin-right: 0px;
        }

        .cont-versus{
            margin: 0px;
        }

        .cont-chat-twitch{
            display: flex;
            width: 100%;
            margin: 16px 0px 16px 0px;
        }

        .chat-twitch{
            width: 100%;
        }
    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }
`;