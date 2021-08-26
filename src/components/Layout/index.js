import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Grid } from './styles';

const Layout = (props) => {
    return(
        <Grid>
            <Header/>
            {props.children}
            <Footer/>
        </Grid>
    );
}
export default Layout;