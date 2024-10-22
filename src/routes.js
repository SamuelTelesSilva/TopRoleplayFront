import React, {useState, useEffect} from 'react';
import { Switch } from 'react-router-dom';
import { useAuth } from './providers/auth';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login/index';
import DashboardUsuario from './pages/DashboardPages/DashboardUsuario/index';
import Dashboard from './pages/DashboardPages/Dashboard';
import Clipe from './pages/Clipe';
import Detalhes from './pages/Clipe/Detalhes';
import Streamer from './pages/Streamer';
import StreamerDetail from './pages/Streamer/Detalhes/index'
import Cidade from './pages/Cidade';
import CityDetail from './pages/Cidade/Detalhes/index'
import Grupo from './pages/Grupo';
import GrupoDetail from './pages/Grupo/Detalhes/index';
import Home from './pages/Home';
import Evento from './pages/Evento';
import EventoDetail from './pages/Evento/Detalhes/index';



const Routes = () => {
    const { CustomRoute } = useAuth();
    const [role, setRole] = useState(localStorage.getItem('role'));

    useEffect(()=>{
        setRole(localStorage.getItem('role'));

        //colocar aqui o role que esta  abaixo
    },[]);

    return(
        <>
            <Switch>
                <CustomRoute exact path="/" component={ Home }/>

                <CustomRoute path="/clipes" component={ Clipe }/>
                <CustomRoute path="/clipe/:id/:title"  component={ Detalhes }/>

                <CustomRoute path="/streamers"  component={ Streamer }/>
                <CustomRoute path="/streamer/:id/:nome" component={ StreamerDetail }/>

                <CustomRoute path="/cidades"  component={ Cidade }/>
                <CustomRoute path="/cidade/:id/:nome"  component={ CityDetail }/>

                <CustomRoute path="/grupos"  component={ Grupo }/>
                <CustomRoute path="/grupo/:id/:nome"  component={ GrupoDetail }/>
                
                <CustomRoute path="/eventos" component={ Evento } />
                <CustomRoute path="/evento/:id/:title" component={ EventoDetail } />
                
                <CustomRoute path="/login" component={ Login } />
                <CustomRoute path="/register" component={ Cadastro } />

                <CustomRoute isPrivate path="/dashboard/usuario" component={ DashboardUsuario } /> 


                {
                    role === 'ROLE_ADMIN' ?
                        <CustomRoute isPrivate path="/dashboard" component={ Dashboard } /> :
                    ''  
                }
                

            </Switch>
        </>
    );
};
export default Routes;
//Tenho que deixar o dashboard para ADM