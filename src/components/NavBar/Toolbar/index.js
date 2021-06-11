import React from 'react';
import IconeBotao from '../IconeBotao/index';
import { Container } from './styles';
import { useAuth } from '../../../providers/auth';
import SideDrawer from '../SideDrawer/index';
import NavMenu from '../NavMenu';

const Toolbar = () => {

    const {openMenu, setOpenMenu} = useAuth();
    
    const menu = () => openMenu ? setOpenMenu(false) : setOpenMenu(true);

    return(
        <Container>
            <div className="area-icon-button" onClick={menu}>
                <IconeBotao open="open"/>
            </div>
            <div className="area-logoMarca">
                <div className="logoMarca">
                    <h1>TopRoleplay</h1>
                </div>
            </div>
            <div className="area-menu">
                <NavMenu/>
            </div>
            {openMenu ? <SideDrawer/> : null} 
        </Container>
    );
}
export default Toolbar;
