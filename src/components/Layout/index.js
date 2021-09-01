import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Grid } from './styles';

const Layout = (props) => {
    return(
        <Grid enableJustify={props.enableJustify}>
            <Header/>
            <div className="aux-grid-content">
                {props.children}
            </div>
            <Footer/>
        </Grid>
    );
}
export default Layout;