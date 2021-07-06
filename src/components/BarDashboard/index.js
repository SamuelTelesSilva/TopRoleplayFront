import React, { useState } from 'react';
import { Container, PerfilUsuario, MenuLateral, MenuConf, Button, ButtonToggle} from './styles';
import {Link} from 'react-router-dom';

export default function BarDashboard(){
    const [active, setActive] = useState(1);
    
    const btnList = [
        {
            id: 1,
            titulo: 'Cidades',
            endpoint: 'cidades',
            isDefault: false,
        },
        {
            id: 2,
            titulo: 'Streamers',
            endpoint: 'streamers',
            isDefault: false,
        },
        {
            id: 3,
            titulo: 'Clipes',
            endpoint: 'clipes',
            isDefault: false,
        },
        {
            id: 4,
            titulo: 'Grupos',
            endpoint: 'grupos',
            isDefault: false,
        },
        {
            id: 5,
            titulo: 'Eventos',
            endpoint: 'eventos',
            isDefault: false,
        },
        {
            id: 6,
            titulo: 'Noticias',
            endpoint: 'noticias',
            isDefault: false,
        }
    ]
    
    

    return(
        <Container>
            <PerfilUsuario>
               <div className="cont-avatar-user">
                    <img src="https://www.rockstargames.com/br/img/global/downloads/buddyiconsconavatars/v_afterhours_taleofus2_256x256.jpg" alt="imagequalquer" />
               </div>
               <div className="cont-user-name">
                    Admin
               </div>
            </PerfilUsuario>
            
            <MenuLateral>
                <div className="cont-button">
                    {btnList.map(btn => (
                        <Link 
                            to={`/dashboard/${btn.endpoint}`}
                            style={{textDecoration: 'none'}}
                            key={btn.id}
                        >
                            <ButtonToggle 
                                key={btn.id}
                                active={active === btn.id}
                                onClick={() => setActive(btn.id)}
                            >
                                {btn.titulo}
                            </ButtonToggle>
                        </Link>
                    ))}
                </div>
            </MenuLateral>
            <hr style={{
                backgroundColor: 'gray',
                height: 0.5
            }}/>
            <MenuConf>
                <div className="cont-button">
                    <Button >
                        Sair
                    </Button>
                </div>
            </MenuConf>
            
            
        </Container>
    );
}