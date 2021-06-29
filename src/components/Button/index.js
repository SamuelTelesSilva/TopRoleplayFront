import React from 'react';
import {Container} from './styles';

const Button = (props) => {
    return(
        <Container>
            <button onClick={props.onclick}>
                {props.title}
            </button>
        </Container>
    );
}
export default Button;