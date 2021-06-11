import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/index';


const Routes = () => ( 
    <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
        </Switch>
    </BrowserRouter>  
);
export default Routes;