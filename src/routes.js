import React from 'react';
import { Switch } from 'react-router-dom';
import {useAuth} from './providers/auth';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login/index';
import DashboardUsuario from './pages/DashboardUsuario/index';
import Dashboard from './pages/Dashboard';
import CardItemDashboard from './components/CardItemDashboard';

const Routes = () => {
    const { CustomRoute } = useAuth();

    return(
        <>
            <Switch>
                <CustomRoute exact path="/login" component={Login} />
                <CustomRoute path="/register" component={Cadastro} />
                <CustomRoute isPrivate path="/dashboard/usuario" component={ DashboardUsuario } />
                <CustomRoute path="/dashboard" component={ Dashboard } />
                <CustomRoute path="/card" component={ CardItemDashboard } />
            </Switch>
        </>
    );
};
export default Routes;
