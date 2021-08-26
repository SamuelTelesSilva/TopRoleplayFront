import React from 'react';
import { Grid, Header, Main} from './styles';
import { Switch } from 'react-router-dom';
import { useAuth } from '../../../providers/auth';
import BarDashboard from '../../../components/BarDashboard/index';
import DashboardCidade from '../DashboardCidade'
import DashboardStreamer from '../DashboardStreamer';
import DashboardGrupo from '../DashboardGrupo';
import DashboardEvento from '../DashboardEvento';
import DashboardClipe from '../DashboardClipe';
import DashboardNoticia from '../DashboardNoticia';


export default function Dashboard(){

    const { CustomRoute } = useAuth();
    localStorage.setItem('idPagina','0');

    return(
        <Grid>
            <Header />
            <Main>
                <Switch>
                    <CustomRoute isPrivate path='/dashboard/cidades' component={DashboardCidade}/>
                    <CustomRoute isPrivate path='/dashboard/streamers' component={DashboardStreamer}/>
                    <CustomRoute isPrivate path='/dashboard/clipes' component={DashboardClipe}/>
                    <CustomRoute isPrivate path='/dashboard/grupos' component={DashboardGrupo}/>
                    <CustomRoute isPrivate path='/dashboard/eventos' component={DashboardEvento}/>
                    <CustomRoute isPrivate path='/dashboard/noticias' component={DashboardNoticia}/>
                </Switch>
            </Main>
            <BarDashboard />
        </Grid>
    );
}