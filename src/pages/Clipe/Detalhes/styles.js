import styled from 'styled-components';



export const Container = styled.div`
    border: 1px solid red;
    margin: 8px 0px 8px 0px;
    color: white;
    width: 1080px;
    height: auto;



    .bar-clipe-title{

    }


    @media screen and (max-width: 640px){ 
        
        max-width: 260px;

        .area-content{
            
        }
    }

    @media screen and (min-width: 1023px) and (max-width: 1026px){ 
        max-width: 1000px;
    }
`;