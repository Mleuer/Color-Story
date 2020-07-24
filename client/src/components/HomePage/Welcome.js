import React from "react";
import { Link } from "react-router-dom";
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
}));

function Welcome() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography className={classes.welcome} variant="h1">
            Welcome
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.clickHere}>
            <span>Check out the Color Wall </span>
            <span>
              <Typography
                style={{ color: "red" }}
                component={Link}
                to={"/colorwall"}
              >
                here
              </Typography>
            </span>
            <span>, or see what we're </span>
            <span>
              <Typography
                style={{ color: "blue" }}
                component={Link}
                to={"/about"}
              >
                about
              </Typography>
            </span>
            <span>!</span>
          </Typography>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
}

export default Welcome;
