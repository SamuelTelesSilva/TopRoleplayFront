import React, { useState } from 'react';
import { Container, PerfilUsuario, MenuLateral, MenuConf, Button, ButtonToggle } from './styles';
import { NavLink } from 'react-router-dom';

export default function BarDashboard(){

    //Pegando o id da pagina atual, para poder deixar o menu sempre na ultima pagina selecionada
    const [active, setActive] = useState( parseInt(localStorage.getItem('idPagina')) );
    
    const btnList = [
        {
            id: 1,
            titulo: 'Cidades',
            endpoint: 'cidades'
        },
        {
            id: 2,
            titulo: 'Streamers',
            endpoint: 'streamers'
        },
        {
            id: 3,
            titulo: 'Clipes',
            endpoint: 'clipes'
        },
        {
            id: 4,
            titulo: 'Grupos',
            endpoint: 'grupos'
        },
        {
            id: 5,
            titulo: 'Eventos',
            endpoint: 'eventos'
        },
        {
            id: 6,
            titulo: 'Noticias',
            endpoint: 'noticias'
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
                        <NavLink 
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
                        </NavLink>
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