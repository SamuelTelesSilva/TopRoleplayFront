import styled from 'styled-components';

export const Container = styled.div`
    max-width: 230px;
    height: auto;
    border-radius: 5px;
    color: white;


    a{
        color: white;
    }

    .cont-aux{
        
        display: flex;
        z-index: 1;
        justify-content: center;
        align-items: center;   
    }


    .area-img-card{
        max-width: 230px;
        height: 220px;
        z-index: 1;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        opacity: 1;

        img{
            width: 100%;
            height: 100%;
            border-radius: 5px;
        }
    }

    .area-info{
        display: none;
    }

    :hover{
        cursor: pointer;

        .area-info{
            display: flex;
            position: absolute;
            z-index: 2;
            font-size: 20px;
        }
        .area-img-card{
            transition: 0.3s;
            opacity: 0.5;
        }
    }
    

    @media screen and (max-width: 640px){ 

    }
`;

