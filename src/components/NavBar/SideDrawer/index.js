import React from 'react';
import { Container } from './styles';
import { useAuth } from '../../../providers/auth';

import IconeBotao from '../IconeBotao/index';
import NavMenu from '../NavMenu/index';
const SideDrawer = () => { 
    const { openMenu, setOpenMenu } = useAuth();

    let menuClasses = ["menu"];

    if(openMenu){
        menuClasses = ["menu", "open"];
    }

    return(
        <Container>
            <div className={menuClasses.join(' ')}>
                <div className="area-conteudo">
                    <div className="area-icon" onClick={() => setOpenMenu(false)}>
                        <IconeBotao/>
                    </div>

                    <NavMenu/> 
                </div>
                <div className="fantasma" onClick={() => setOpenMenu(false)}/>
            </div>        
        </Container>
    );
}
export default SideDrawer;

