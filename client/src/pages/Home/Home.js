import React from "react";
import { Container, Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Welcome from "../../components/Welcome/Welcome";
import LoginButton from "../../components/LoginButton";
import SignupButton from "../../components/SignupButton";
import "./style.css";
import ColorGrid from "../../components/ColorGrid";

const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    outline: {
        border: "black solid",
        borderRadius: "24px",
        padding: "20px",
    },
    space: {
        marginTop: "4px",
        marginBottom: "4px",
    },
}));

function Home(props) {
    const user = props.user;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="xs" >
                <ColorGrid />
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