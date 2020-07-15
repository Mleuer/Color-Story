import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TemporaryDrawer from "./TempDrawer";

const useStyles = makeStyles((theme) => ({
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
    
    [theme.breakpoints.up("sm")]: {
      fontSize: "60px",
      
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "32px",
      
    },
  },
}));

function Navigation(props) {
  const { user, logoutUser } = props;
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Grid container justify="space-between">
            <Grid xs={1} item>
              <TemporaryDrawer
                user={user}
                logoutUser={logoutUser}
              ></TemporaryDrawer>
            </Grid>
            <Grid item>
              <Grid item>
                <Typography
                  variant="h2"
                  gutterBottom
                  className={classes.font}
                >
                  Color Story
              </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1}>

            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
