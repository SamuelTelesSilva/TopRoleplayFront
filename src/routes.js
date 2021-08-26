import React from 'react';
import { Switch } from 'react-router-dom';
import {useAuth} from './providers/auth';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login/index';
import DashboardUsuario from './pages/DashboardPages/DashboardUsuario/index';
import Dashboard from './pages/DashboardPages/Dashboard';
import CardItemDashboard from './components/CardItemDashboard';
import Heart from './components/Heart';


const Routes = () => {
    const { CustomRoute } = useAuth();

    return(
        <>
            <Switch>
                <CustomRoute exact path="/"  />
                <CustomRoute path="/login" component={Login} />
                <CustomRoute path="/register" component={Cadastro} />
                <CustomRoute isPrivate path="/dashboard/usuario" component={ DashboardUsuario } />
                <CustomRoute path="/dashboard" component={ Dashboard } />
                <CustomRoute path="/card" component={ CardItemDashboard } />
                <CustomRoute path="/hearts" component={ Heart } />
            </Switch>
        </>
    );
};
export default Routes;
