import React from "react";
import { Container, Paper, Typography, Grid, Button, ButtonGroup } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ColorButtons from "../components/ColorButtons";


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
    },
    colorButton: {
        marginTop: "10px"
    },
    // buttonBox: {
    //     // padding: "20px",
    //     border: "black solid",
    //     paddingTop: "40px",
    //     paddingBottom: "40px"
    // }
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container  maxWidth="xs" >
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
                        <ColorButtons color="lavender" />
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
              
            </Container>
            


            {/* </Grid> */ }






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

        </div >
    )
};

export default Home;