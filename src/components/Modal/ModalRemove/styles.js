import styled from 'styled-components';

export const Container = styled.div`
    display: ${props => props.active === true ? "block" : "none"};
    border: 1px solid red;
    max-width: 450px;
    width: 100%;
    height: auto;
    background-color: var(--corTerciaria);
    border-radius: 5px;
    position: fixed;
    z-index: 99999;
    left: 40%;
    top: 50%;


    .area-msg{
        width: 100%;
        margin-top: 8px;
        color: white;
        margin-left: 8px;
    }
    .area-button{
        display: flex;
        justify-content: center;
        margin-top: 8px;
        margin-bottom: 8px;
    }

`;

export const Button = styled.button`
    display: flex;
    border: 1px solid red;
    margin-right: 8px;
    width: 50px;
    height: 25px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: white;
    color: var(--corSecundaria);
    :hover{
        cursor: pointer;
    }
`;