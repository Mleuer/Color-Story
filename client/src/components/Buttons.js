import React from "react";
import { Button, Grid, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';



function Buttons(props) {
    const useStyles = makeStyles({
        Button: {
            backgroundColor: props.color,
            border: "solid",
            borderRadius: "50%",
            height: 100,
            width: 100,
        }
    });

    const classes = useStyles();
    return (
        <Container maxWidth="sm">
            <Grid container>
                <Grid item xs={12}>
                    <Button className={classes.Button}>
                    </Button>
                </Grid>
            </Grid>
        </Container>

    )
}

export default Buttons;