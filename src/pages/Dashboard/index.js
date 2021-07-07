import React from 'react';
import { Grid, Header, Main} from './styles';
import { Switch } from 'react-router-dom';
import { useAuth } from '../../providers/auth';
import BarDashboard from '../../components/BarDashboard/index';
import DashboardCidade from '../DashboardCidade'
import DashboardStreamer from '../DashboardStreamer';
import DashboardGrupo from '../DashboardGrupo';
import DashboardEvento from '../DashboardEvento';
import DashboardClipe from '../DashboardClipe';
import DashboardNoticia from '../DashboardNoticia';




export default function Dashboard(){

    const { CustomRoute } = useAuth();

    return(
        <Grid>
            <Header />
            <Main>
                <Switch>
                    <CustomRoute exact path='/dashboard/cidades' component={DashboardCidade}/>
                    <CustomRoute path='/dashboard/streamers' component={DashboardStreamer}/>
                    <CustomRoute path='/dashboard/clipes' component={DashboardClipe}/>
                    <CustomRoute path='/dashboard/grupos' component={DashboardGrupo}/>
                    <CustomRoute path='/dashboard/eventos' component={DashboardEvento}/>
                    <CustomRoute path='/dashboard/noticias' component={DashboardNoticia}/>
                </Switch>
            </Main>
            <BarDashboard />
        </Grid>
    );
}