import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-rows: 70px auto 87px;
    grid-template-areas: 
        'H'
        'M'
        'F'
    ;
    height: 100%;

    .aux-grid-content{
        display: flex;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    /* Mobile de 0 até 640px*/
    @media screen and (max-width: 640px){ 
        grid-template-rows: 70px auto 87px;

        .aux-grid-content{
            display: flex;
            justify-content: ${props => props.enableJustify ? 'start' : 'center'};
        }
    }
`;