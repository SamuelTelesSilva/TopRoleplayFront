import React from 'react';
import {Container} from './styles';

const NavMenu = () => {

    return(
       <Container>
            <nav className="nav">
                <ul>
                    <li>
                        <a href="/login">Login</a>
                    </li>
                </ul>
            </nav>
       </Container>
    );
}
export default NavMenu;
