import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import ColorButtons from "../ColorButtons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

    outline: {
        border: "black solid",
        borderRadius: "24px",
        padding: "20px",
    },
    button: {
        marginTop: "4px",
        marginBottom: "4px",
    }

}));
function ColorGrid() {
    const classes = useStyles();
    return (
        <Grid container justify="space-evenly" xs={12} className={classes.outline}>


            <Grid item className={classes.button} component={Link} to="/colorwall">
                <ColorButtons color="#f22c4a" />
            </Grid>
            <Grid item className={classes.button}component={Link} to="/colorwall">
                <ColorButtons color="#f97116" />
            </Grid>
            <Grid item className={classes.button} component={Link} to="/colorwall">
                <ColorButtons color="#f9d916" />
            </Grid>


            <Grid item className={classes.button} component={Link} to="/colorwall">
                <ColorButtons color="#0fd43a" />
            </Grid>
            <Grid item className={classes.button} component={Link} to="/colorwall">
                <ColorButtons color="#37c6e5" />
            </Grid>
            <Grid item className={classes.button} component={Link} to="/colorwall">
                <ColorButtons color="#4c24f9" />
            </Grid>


            <Grid item className={classes.button} component={Link} to="/colorwall">
                <ColorButtons color="#b876f0" />
            </Grid>
            <Grid item className={classes.button} component={Link} to="/colorwall">
                <ColorButtons color="#2d2a2f" />
            </Grid>
            <Grid item className={classes.button} component={Link} to="/colorwall">
                <ColorButtons border="black solid" color="#fcfcfc" />
            </Grid>

        </Grid>



    )
}

export default ColorGrid;