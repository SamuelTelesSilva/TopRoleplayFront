import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 8px;
    color: white;
    height: auto;
    min-height: 100%;
    width: 1080px;
    

    .bar-clipe-title-search{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .input-search{
            width: 50%;
            height: 35px;
            border-radius: 15px;
            padding: 0px 8px 0px 13px;
            background-color: var(--corFundoPrincipal);
            border: 2px solid var(--corSecundaria);
            color: white;
            margin-right: 12px;
        }
    }

    .area-content{
        display: flex;
        width: 100%;
        height: auto;
        flex-wrap: wrap;
        min-height: 600px; 

        .area-cards{
            max-width: 260px;
            margin: 8px 9px 0px 0px;
            
        }
    }

    .area-pagination{
        max-width: 1068px;
        margin: 16px 0px 16px 0px;
    }


    @media screen and (max-width: 640px){ 
        
        max-width: 260px;

        .bar-clipe-title-search{
            display: block;

            .input-search{
               width: 100%;
               margin-top: 10px;
            }
        }
        .area-content{
            display: block;
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