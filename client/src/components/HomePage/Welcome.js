import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  welcome: {
    marginTop: "40px",
    marginBottom: "20px",
    marginLeft: "8px",
    fontSize: "80px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "60px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "70px",
    },
  },
  textBlock: {
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "18px",
  },
  clickHere: {
    font: "30px",
    fontWeight: "500",
  },
  link: {
    color: "red",
  }
}));

function Welcome() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography
            alignitems="center"
            className={classes.welcome}
            variant="h1"
          >
            Welcome
          </Typography>
        </Grid>
        <Grid item>
          <Typography
          alignItems="center"
          className={classes.clickHere}
          >
           Check out the Color Wall <a href="./Colorwall" className={classes.link}>here</a>, or see what we're <a href="./About">about</a>!
          </Typography>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
}

export default Welcome;
