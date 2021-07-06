import React from 'react';
import { Grid, Header, Main} from './styles';
import BarDashboard from '../../components/BarDashboard/index';

export default function Dashboard(){
    return(
        <Grid>
            <Header />
            <Main />
            <BarDashboard />
        </Grid>
    );
}