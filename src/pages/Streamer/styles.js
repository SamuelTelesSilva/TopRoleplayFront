import styled from 'styled-components';

export const Container = styled.div`
    display: block;
    color: white;
    width: 1080px;
    min-height: 970px;
    

    .bar-streamer-title-search{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 16px 0px 16px 0px;

        .input-search{
            width: 50%;
            height: 35px;
            border-radius: 15px;
            padding: 0px 8px 0px 13px;
            background-color: var(--corFundoPrincipal);
            border: 2px solid var(--corSecundaria);
            color: white;
        }
    }

    .area-title-bar{
        margin-top: 16px;
    }

    .area-content{
        display: flex;
        width: 100%;
        height: auto;
        flex-wrap: wrap;
        justify-content: center;
        min-height: 460px;

        .area-cards{
            max-width: 260px;
            margin: 8px 9px 0px 0px;
        }
    }

    .area-pagination{
        width: 100%;
        margin: 16px 0px 16px 0px;
    }

    @media screen and (max-width: 640px){ 

        width: 96%;
        height: auto;
        margin: 2% 2%;

        .bar-streamer-title-search{
            display: block;

            .input-search{
               width: 100%;
               margin-top: 10px;
            }
        }

        .area-content{
            display: flex;
            width: 100%;
            height: auto;
            flex-wrap: wrap;
        
            .area-cards{
                width: 100%;
                margin: 8px 0px 0px 0px;
            }
        }
    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }
`;