import styled from 'styled-components';
/**
 *  Só é permitido aumentar a largura do botão na div principal,
 *  o botão esta com width 100% então vai acompanhar a div mae
*/

export const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--corTerciaria);
    border-radius: 5px;
    color: white;
    width: 100%;
    height: 50px;
    font-size: 16px;
    
    :hover{
        cursor: pointer;
    }
    
`;