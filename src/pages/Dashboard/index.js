import React from 'react';
import { Grid, Header, Main} from './styles';
import { Switch, Route} from 'react-router-dom';
import BarDashboard from '../../components/BarDashboard/index';
import DashboardCidade from '../DashboardCidade'
import DashboardStreamer from '../DashboardStreamer';

export default function Dashboard(){

    return(
        <Grid>
            <Header />
            <Main>
                <Switch>
                    <Route exact path='/dashboard/cidades' component={DashboardCidade}/>
                    <Route path='/dashboard/streamers' component={DashboardStreamer}/>
                </Switch>
            </Main>
            <BarDashboard />
        </Grid>
    );
}