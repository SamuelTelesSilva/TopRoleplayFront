import React from 'react';
import {Buttonn} from './styles';

const Button = (props) => {
    return(
        <Buttonn onClick={props.onclick}>
            <div>
                <span>{props.title}</span>
            </div>
        </Buttonn>
    );
}
export default Button;