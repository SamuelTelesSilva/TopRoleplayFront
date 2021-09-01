import React from 'react';
import { Switch } from 'react-router-dom';
import {useAuth} from './providers/auth';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login/index';
import DashboardUsuario from './pages/DashboardPages/DashboardUsuario/index';
import Dashboard from './pages/DashboardPages/Dashboard';
import Heart from './components/Heart';
import Clipe from './pages/Clipe';
import CardMain from './components/CardMain';
import Detalhes from './pages/Clipe/Detalhes';


const Routes = () => {
    const { CustomRoute } = useAuth();

    return(
        <>
            <Switch>
                <CustomRoute exact path="/clipe"  component={ Clipe }/>
                <CustomRoute path="/clipe/:id/:title"  component={ Detalhes }/>  {/* 1 - Criar o link com o parametro */}
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
