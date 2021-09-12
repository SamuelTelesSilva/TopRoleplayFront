import React from 'react';
import { Switch } from 'react-router-dom';
import { useAuth } from './providers/auth';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login/index';
import DashboardUsuario from './pages/DashboardPages/DashboardUsuario/index';
import Dashboard from './pages/DashboardPages/Dashboard';
import Heart from './components/Heart';
import Clipe from './pages/Clipe';
import CardMain from './components/CardMain';
import Detalhes from './pages/Clipe/Detalhes';
import Streamer from './pages/Streamer';
import CardCarousel from './components/Carousels/CardCarousel';
import CarouselVideoPlayer from './components/Carousels/CarouselVideoPlayer/index'
import StreamerDetail from './pages/Streamer/Detalhes/index'
import Cidade from './pages/Cidade';
import CityDetail from './pages/Cidade/Detalhes/index'
import Grupo from './pages/Grupo';
import GrupoDetail from './pages/Grupo/Detalhes/index';
import Home from './pages/Home';


const Routes = () => {
    const { CustomRoute } = useAuth();

    return(
        <>
            <Switch>
                <CustomRoute exact path="/" component={ Home }/>
                <CustomRoute path="/clipe" component={ Clipe }/>
                <CustomRoute path="/clipe-detalhes/:id/:title"  component={ Detalhes }/>
                <CustomRoute path="/carousel"  component={ CardCarousel }/>
                <CustomRoute path="/c"  component={ CarouselVideoPlayer }/>
                <CustomRoute path="/streamer"  component={ Streamer }/>
                <CustomRoute path="/cidade"  component={ Cidade }/>
                <CustomRoute path="/grupo"  component={ Grupo }/>
                <CustomRoute path="/grupo-detail/:id"  component={ GrupoDetail }/>
                <CustomRoute path="/cidade-detail/:id"  component={ CityDetail }/>
                <CustomRoute path="/streamer-detail/:id" component={ StreamerDetail }/>
                <CustomRoute path="/login" component={ Login } />
                <CustomRoute path="/register" component={ Cadastro } />
                <CustomRoute isPrivate path="/dashboard/usuario" component={ DashboardUsuario } />
                <CustomRoute isPrivate path="/dashboard" component={ Dashboard } />
                <CustomRoute path="/card" component={ CardMain } />
                <CustomRoute path="/hearts" component={ Heart } />
            </Switch>
        </>
    );
};
export default Routes;
