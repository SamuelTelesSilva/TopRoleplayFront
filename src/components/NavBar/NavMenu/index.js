import React from 'react';
import {Container} from './styles';

const NavMenu = () => {

    return(
       <Container>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/">Menu 1</a>
                    </li>
                    <li>
                        <a href="/">Menu 2</a>
                    </li>
                    <li>
                        <a href="/">Menu 3</a>
                    </li>
                </ul>
            </nav>
       </Container>
    );
}
export default NavMenu;
