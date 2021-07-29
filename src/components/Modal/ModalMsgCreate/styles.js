import styled from 'styled-components';

export const Container = styled.div`
    display: ${props => props.active === true ? "flex" : "none"};;
    background-color: var(--corTerciaria);
    width: 400px;
    height: 55px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    color: white;
    position: fixed;
    z-index: 99999;
    left: 70%;
    top: 10%;

    :hover{
        cursor: pointer;
    }
`;

export const Button = styled.button`
    
`;