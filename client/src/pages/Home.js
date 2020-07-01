import React from "react";
import { Container, Paper, Typography, Grid, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ColorButtons from "../components/ColorButtons";


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
                <ButtonGroup>
                    <ColorButtons color="red">
                    </ColorButtons>
                    <ColorButtons color="orange">
                    </ColorButtons>
                    <ColorButtons color="yellow">
                    </ColorButtons>
                </ButtonGroup>
                <ButtonGroup>
                    <ColorButtons color="green">
                    </ColorButtons>
                    <ColorButtons color="blue">
                    </ColorButtons>
                    <ColorButtons color="purple">
                    </ColorButtons>
                </ButtonGroup>
                <ButtonGroup>
                    <ColorButtons color="black">
                    </ColorButtons>
                    <ColorButtons color="white">
                    </ColorButtons>
                    <ColorButtons color="yellow">
                    </ColorButtons>
                </ButtonGroup>
            </Grid>





            {/* <Grid justify="center" container>
                <Grid item direction="row">
                    <ColorButtons color="red">
                    </ColorButtons>
                </Grid>
                <Grid item direction="row">
                    <ColorButtons color="orange">
                    </ColorButtons>
                </Grid>
                <Grid item direction="row">
                    <ColorButtons color="yellow">
                    </ColorButtons>
                </Grid>
            </Grid>
            <Grid justify="center" container>
                <Grid item direction="row">
                    <ColorButtons color="green">
                    </ColorButtons>
                </Grid>
                <Grid item direction="row">
                    <ColorButtons color="blue">
                    </ColorButtons>
                </Grid>
                <Grid item direction="row">
                    <ColorButtons color="purple">
                    </ColorButtons>
                </Grid>
            </Grid>
            <Grid justify="center" container>
                <Grid item direction="row">
                    <ColorButtons color="black">
                    </ColorButtons>
                </Grid>
                <Grid item direction="row">
                    <ColorButtons color="white">
                    </ColorButtons>
                </Grid>
                <Grid item direction="row">
                    <ColorButtons>
                    </ColorButtons>
                </Grid>
            </Grid> */}

        </div>
    )
};

export default Home;