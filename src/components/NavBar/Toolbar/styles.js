import styled from 'styled-components';

export const Container = styled.div`
    grid-area: H;
    display: flex;
    background: var(--corSecundaria);
    width: 100%;
    height: 100%;
    justify-content: space-between;

    .area-icon-button{
        width: 50px;
        height: 50px;
        margin: 5px 0px 5px 1px;
    }

    .area-logoMarca{
        display: none;
        justify-content: center;
        align-items: center;
        border: 1px solid white;
        margin-left: 20px;
        border-radius: 5px;
    }

    .logoMarca{
        color: white;
    }

    .area-menu{
        display: none;
        border: 1px solid red;
        align-items: center;
    }

    @media screen and (min-width: 640px){ 
        .area-icon-button{
            display: none;
        }

        .area-logoMarca{
            display: flex;
        }
        .area-menu{
            display: flex;
        }

    }
    
`;