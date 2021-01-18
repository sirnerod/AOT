import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Container, Grid, Link, Typography} from '@material-ui/core';

import {
    makeStyles,
  } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        backgroundColor: '#222',
        paddingTop: 10,
        paddingBottom: 10 
    },
    link: {
        color: '#6c6c6c',
    }
});

export default function header(){
    const classes = useStyles()

    return (
        <Container maxWidth="lg" direction="row" className={classes.root}>
            <Grid container >
                <Grid item xs={10} >
                    <Link className={classes.link}> AOT Technologies</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link className={classes.link}>Profile</Link>
                </Grid>
                <Grid item xs={1}>
                    <Link className={classes.link}>Log Out</Link>
                </Grid>
            </Grid>
        </Container>
    )
}