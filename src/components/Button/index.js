import React from 'react';
import {Buttonn} from './styles';

const Button = (props) => {
    return(
        <Buttonn onClick={props.onclick}>
            {props.title}  
        </Buttonn>
    );
}
export default Button;