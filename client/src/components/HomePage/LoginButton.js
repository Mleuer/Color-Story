import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
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

function LoginButton(props) {
    const classes = useStyles();

    return (
        <Button disableFocusRipple={true} disableRipple={true} className={classes.Button} component={Link} to="/login">Log In
        </Button>
    )
}

export default LoginButton;