import React from "react";
import { Container, Paper, Typography, Grid, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Buttons from "../components/Buttons";


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    button: {
        paddingLeft: "4px",
        paddingRight: "4px"
    },
    row: {
        marginTop: ".5px"
    }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Grid justify="center" container>
                <Grid item direction="row">
                    <Buttons color="red">
                    </Buttons>
                </Grid>
                <Grid item direction="row">
                    <Buttons color="orange">
                    </Buttons>
                </Grid>
                <Grid item direction="row">
                    <Buttons color="yellow">
                    </Buttons>
                </Grid>
            </Grid>
            <Grid justify="center" container>
                <Grid item direction="row">
                    <Buttons color="green">
                    </Buttons>
                </Grid>
                <Grid item direction="row">
                    <Buttons color="blue">
                    </Buttons>
                </Grid>
                <Grid item direction="row">
                    <Buttons color="purple">
                    </Buttons>
                </Grid>
            </Grid>
            <Grid justify="center" container>
                <Grid item direction="row">
                    <Buttons color="black">
                    </Buttons>
                </Grid>
                <Grid item direction="row">
                    <Buttons color="white">
                    </Buttons>
                </Grid>
                <Grid item direction="row">
                    <Buttons>
                    </Buttons>
                </Grid>
            </Grid>

        </div>
    )
};

export default Home;