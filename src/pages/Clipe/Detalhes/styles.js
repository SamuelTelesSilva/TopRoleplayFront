import styled from 'styled-components';



export const Container = styled.div`
    border: 1px solid red;
    margin: 8px 0px 8px 0px;
    color: white;
    width: 1080px;
    height: auto;


    .cont-iframe{
        display: flex;
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

    


    @media screen and (max-width: 640px){ 
        width: 100%;

        .iframe{
            width: 100%;
        }

        .cont-iframe{
            justify-content: start;
        }
    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }
`;