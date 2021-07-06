import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import {useAuth} from './providers/auth';

import Cadastro from './pages/Cadastro';
import Login from './pages/Login/index';
import DashboardUsuario from './pages/DashboardUsuario/index';
import Dashboard from './pages/Dashboard';




function CustomRoute({ isPrivate, ...rest}){

    const { loading, authenticated } = useAuth();

    if(loading){
        return <h1>Loading...</h1>;
    }

    if(isPrivate && !authenticated){
        return <Redirect to="/login" />
    }

    return <Route {...rest} />
}


const Routes = () => ( 

    <Switch>
        <CustomRoute exact path="/login" component={Login} />
        <CustomRoute path="/register" component={Cadastro} />
        <CustomRoute isPrivate path="/dashboard/usuario" component={ DashboardUsuario } />
        <CustomRoute path="/dashboard" component={ Dashboard } />
    </Switch>
 
);
export default Routes;