import React from 'react';
import ReactDOM from 'react-dom';
import {Button, Container, Grid, Link, Typography, TextField, TextareaAutosize} from '@material-ui/core';
import axios from 'axios'

import {
    makeStyles,
  } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        paddingTop: 10,
        paddingBottom: 10 
    },
    link: {
        color: '#6c6c6c',
    },
    input: {
        width: '100%',
        marginBottom: 20
    },
    button: {
        textAlign: 'right'
    }
});

export default function body(){
    const classes = useStyles()

    function handleClick(e) {
        e.preventDefault();

        axios.post('https://localhost:5001/aot', {
            query: 'de',
            message: 'redivider test deified'
          })
          .then(response =>{
            
            console.log(response.data.message);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

    return (
        <form>
            <Container maxWidth="lg" direction="row" className={classes.root}>
                <Grid container >
                    <Grid item xs={12} >
                        <Typography variant="caption">
                            Query
                        </Typography>
                        <br />
                        <TextField id="outlined-basic" variant="outlined" className={classes.input} />
                        <br />
                        <Typography variant="caption" >
                            Message
                        </Typography>
                        <br />
                        <TextareaAutosize aria-label="minimum height" rowsMin={3} placeholder="Minimum 3 rows" className={classes.input}/>
                        
                    </Grid>
                    <Grid container xs={12} justify="flex-end">
                        <Button variant="contained" color="primary" onClick={handleClick} className={classes.button}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </form>
    )
}