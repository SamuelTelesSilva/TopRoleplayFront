import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login/index';


const Routes = () => ( 
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Cadastro} />
        </Switch>
    </BrowserRouter>  
);
export default Routes;