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

function Home(props) {
    const user = props.user;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="xs" >
                <Grid container direction="row" alignItems="center" justify="space-evenly" spacing={1}>

                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#f22c4a" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#f97116" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#f9d916" />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" justify="space-evenly" spacing={1}>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#0fd43a" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#37c6e5" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#4c24f9" />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" justify="space-evenly" spacing={1}>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#b876f0" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons color="#2d2a2f" />
                    </Grid>
                    <Grid item xs={3} component={Link} to="/colorwall">
                        <ColorButtons border="black solid" color="#fcfcfc" />
                    </Grid>
                </Grid>
                <Welcome>

                </Welcome>
                {user.email ? (<> </>) : (
                <Grid container direction="row" justify="space-evenly">
                    <LoginButton />
                    <SignupButton />
                </Grid>
                )}
            </Container>

        </div>
    )
};

export default Home;