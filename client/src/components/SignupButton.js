import React from "react";
import { Button, Grid, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Button: {
        backgroundColor: "white",
        border: "black solid",
        borderRadius: "10%",
        height: 125,
        width: 125,
        
    }
});

function SignupButton(props) {
    const classes = useStyles();

    return (
        <Button disableFocusRipple={true} disableRipple={true} className={classes.Button}>Sign In
        </Button>
    )
}

export default SignupButton;