import styled from 'styled-components';

export const Buttonn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--corTerciaria);
    border-radius: 5px;
    color: white;
    width: 100%;
    max-width: 250px;
    height: 50px;
    font-size: 16px;

    :hover{
        cursor: pointer;
    }

    @media screen and (max-width: 640px){ 
        max-width: 100%;   
    }
`;
//background: linear-gradient(to right, var(--corFundoPrincipal),  var(--corTerciaria), var(--corTerciaria));
