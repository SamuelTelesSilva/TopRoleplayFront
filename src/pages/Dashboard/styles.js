import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-rows: 70px auto;
    grid-template-columns: 180px auto;
    grid-template-areas: 
        'ML H'
        'ML M'
    ;
    height: 100%;
`;


export const Header = styled.div`
    grid-area: H;
    background-color: red;
`;

export const Main = styled.div`
    grid-area: M;
    background-color: var(--corFundoPrincipal);
    color: white;
    font-size: 16px;
`;