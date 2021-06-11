import React from 'react';
import {Container} from './styles';

const Button = (props) => {
    return(
        <Container>
            {props.title}
        </Container>
    );
}
export default Button;