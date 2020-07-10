import React from "react";
import { Typography } from "@material-ui/core";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  welcome: {
    marginTop: "40px",
    marginBottom: "20px",
    marginLeft: "8px",
    fontSize: "80px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "70px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "80px",
    }
  },
  textBlock: {
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "18px",
  },
}));

function Welcome() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography alignitems="center" className={classes.welcome} variant="h1">Welcome</Typography>
        </Grid>
        <Grid item justify="center" align="justify" className={classes.textBlock}>
          <Typography  variant="subtitle1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release
            of Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
      </Typography>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
}

export default Welcome;
