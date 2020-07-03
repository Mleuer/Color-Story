import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import ColorButtons from "../../components/ColorButtons";
import Welcome from "../../components/Welcome/Welcome";
import LoginButton from "../../components/LoginButton";
import SignupButton from "../../components/SignupButton";
import "./style.css";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="xs" >
                <Grid container direction="row" alignItems="center" justify="space-evenly" spacing={1}>

                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#ff3300" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#ff5e1a" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="yellow" />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" justify="space-evenly" spacing={1}>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="green" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="turquoise" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#B57FD2" />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" justify="space-evenly" spacing={1}>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="black" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons border="black solid" color="white" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="red" />
                    </Grid>
                </Grid>
                <Welcome>

                </Welcome>
                <Grid container direction="row" justify="space-evenly">
                    <LoginButton />
                    <SignupButton />
                </Grid>

            </Container>

        </div>
    )
};

export default Home;