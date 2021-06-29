import styled from 'styled-components';

export const Container = styled.div`
    grid-area: H;
    display: flex;
    background: linear-gradient(to right, var(--corFundoPrincipal), var(--corSecundaria));
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    

    .area-icon-button{
        width: 50px;
        height: 50px;
        margin: 0px 0px 0px 1px;
        
    }

    .area-logoMarca{
        display: none;
        justify-content: center;
        align-items: center;
        margin-left: 5%;
    }

    .area-menu-perfil{
        display: none;
        align-items: center;
    }

    @media screen and (min-width: 640px){ 
        

        .area-icon-button{
            display: none;
            
        }

        .area-logoMarca{
            display: flex;
        }
        .area-menu-perfil{
            display: flex;
        }
    }
    
`;