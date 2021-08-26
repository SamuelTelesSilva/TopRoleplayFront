import React from 'react';
import { Container } from './styles';

const TitleBar = (props) => {
    return(
        <Container>
            <div className="barra-menu-page"></div>
            <div className="title-page">{props.title}</div>       
        </Container>
    );
}
export default TitleBar;