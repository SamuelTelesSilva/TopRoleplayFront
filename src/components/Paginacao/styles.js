import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: ${props => props.active ? '' : 'var(--corSecundaria)'};
    box-shadow: ${props => props.active ? '' : '0px 4px 4px rgba(0, 0, 0, 0.25)'};
    justify-content: center;
    align-items: center;
`;