import styled from 'styled-components';

export const Container = styled.div`
   
    display: flex;
    align-items: center;
    width: 200px;
    height: 50px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .barra-menu-page{
        width: 16px;
        height: 49px;
        margin-right: 10px;
        background-color: var(--corSecundaria);
        box-shadow: inset 0 0 1em var(--corSecundaria), 0 0 1em var(--corSecundaria);
    }
    
`;