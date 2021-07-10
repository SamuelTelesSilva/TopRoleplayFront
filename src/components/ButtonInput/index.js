import React from 'react';
import { Input } from './styles';

const ButtonInput = (props) => {
    return(
        <Input 
            type={props.type}
            value={props.value}
            onClick={props.onclick}
        />
    );
}
export default ButtonInput;