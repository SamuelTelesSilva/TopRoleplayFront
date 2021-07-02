import React from 'react';
import IconeBotao from '../IconeBotao/index';
import { Container } from './styles';
import { useAuth } from '../../../providers/auth';
import SideDrawer from '../SideDrawer/index';
import LogoMarca from '../LogoMarca';
import PerfilLogado from '../PerfilLogado';



const Toolbar = () => {

    const {openMenu, setOpenMenu} = useAuth();
    
    const menu = () => openMenu ? setOpenMenu(false) : setOpenMenu(true);

    return(
        <Container>
            <div className="area-icon-button" onClick={menu}>
                <IconeBotao open="open"/>
            </div>
            <div className="area-logoMarca">
                <LogoMarca/>
            </div>
            <div className="area-menu-perfil">
                <PerfilLogado />
            </div>
            {openMenu ? <SideDrawer/> : null} 
        </Container>
    );
}
export default Toolbar;
//<NavMenu/>