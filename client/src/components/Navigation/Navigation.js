import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./style.css";
import Grid from '@material-ui/core/Grid';
import TemporaryDrawer from "../TempDrawer";

const useStyles = makeStyles({
  bar: {
    backgroundColor: "#FFCCCC",
    borderRadius: "24px",
    paddingTop: "15px",
    border: "black solid 4px",
  },
  bar_labels: {
    fontSize: "15px",
    paddingLeft: "2px",
  },
  font: {
    fontFamily: "Petit Formal Script, cursive",
    marginLeft: "15px",
  },
});

function Navigation(props) {
  const { user, logoutUser } = props;
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Grid item direction="row" xs={2}>
            <TemporaryDrawer
              user={user}
              logoutUser={logoutUser}
            ></TemporaryDrawer>
          </Grid>
          <Grid item direction="row" xs={9}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              className={classes.font}
            >
              Color Story
          </Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
