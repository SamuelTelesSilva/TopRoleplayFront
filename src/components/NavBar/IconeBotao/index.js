import React from 'react';
import {OpenMenu, CloseMenu } from './styles';

const IconeBotao = (props) => {

    return(
        props.open === 'open' ? <OpenMenu/>: <CloseMenu/>
    );
}
export default IconeBotao;
