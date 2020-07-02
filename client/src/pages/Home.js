import React from "react";
import { Container, Paper, Typography, Grid, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ColorButtons from "../components/ColorButtons";
import Welcome from "../components/Welcome/Welcome";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    colorButton: {
        marginTop: "10px"
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="xs" >
                <Grid container direction="row" alignItems="center" justify="center" spacing={1}>

                    <Grid item xs={3}>
                        <ColorButtons color="#ff3300" />
                    </Grid>
                    <Grid item xs={3}>
                        <ColorButtons color="#ff5e1a" />
                    </Grid>
                    <Grid item xs={3}>
                        <ColorButtons color="yellow" />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                    <Grid item xs={3}>
                        <ColorButtons color="green" />
                    </Grid>
                    <Grid item xs={3}>
                        <ColorButtons color="turquoise" />
                    </Grid>
                    <Grid item xs={3}>
                        <ColorButtons color="#B57FD2" />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" justify="center" spacing={1}>
                    <Grid item xs={3}>
                        <ColorButtons color="black" />
                    </Grid>
                    <Grid item xs={3}>
                        <ColorButtons border="black solid" color="white" />
                    </Grid>
                    <Grid item xs={3}>
                        <ColorButtons color="red" />
                    </Grid>
                </Grid>
                <Welcome>

                </Welcome>
            </Container>

        </div>
    )
};

export default Home;