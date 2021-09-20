import React from 'react';
import { Container } from './styles';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
    link: {
      display: 'flex',
      color: 'white'
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
}));

const NavegacaoEstrutural = (props) => {
    const classes = useStyles();

    let element;

    // eslint-disable-next-line default-case
    switch(props.opcao){

        case '1':
            element = (
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" className={classes.link}>
                        <HomeIcon className={classes.icon} />
                        Home
                    </Link>
                    <Typography color="textPrimary" className={classes.link}>
                        <GrainIcon className={classes.icon} />
                        {props.nameLink1}
                    </Typography>   
                </Breadcrumbs> 
            );
            break;
        case '2':
            element = (
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/" className={classes.link}>
                        <HomeIcon className={classes.icon} />
                        Home
                    </Link>
                    <Link
                        color="inherit"
                        href={props.href}
                        className={classes.link}
                    >
                        <WhatshotIcon className={classes.icon} />
                        {props.nameLink1}
                    </Link>
                    <Typography color="textPrimary" className={classes.link}>
                        <GrainIcon className={classes.icon} />
                        {props.nameLink2}
                    </Typography>   
                </Breadcrumbs>
            );
            break;
        default:     
        element = (
            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" href="/" className={classes.link}>
                    <HomeIcon className={classes.icon} />
                    Home
                </Link>
            </Breadcrumbs> 
        );

    }
    

    return (
        <Container>
            {element}
        </Container>
        
    );
}
export default NavegacaoEstrutural;



/**
 * 
 * 
 */