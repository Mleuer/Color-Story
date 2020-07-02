import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import CreateIcon from '@material-ui/icons/Create';
import "./style.css"


const useStyles = makeStyles({
  bar: {
    backgroundColor: "#FFCCCC",
    borderRadius: "24px",
    paddingTop: "15px",
    border: "black solid 4px"
  },
  bar_labels: {
    fontSize: "15px",
    paddingLeft: "2px",
  },
  font: {
    fontFamily: "Petit Formal Script, cursive"
  }
});

function Navigation(props) {
  const { user, logoutUser } = props;
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton  component={Link} to="/home">
            <HomeIcon style={{ color: "black" }} /><span className={classes.bar_labels}>home</span>
          </IconButton>
          {user.email ? (
            <>
              <IconButton component={Link} to="/profile">
                <FaceIcon style={{ color: "black" }} /><span className={classes.bar_labels}>profile</span>
              </IconButton>
              <IconButton component={Link} to="/home" onClick={logoutUser}>
                <VpnKeyIcon style={{ color: "black" }} /><span className={classes.bar_labels}>logout</span>
              </IconButton>
            </>
          ) : (
              <>
                <IconButton component={Link} to="/login">
                  <VpnKeyIcon style={{ color: "black" }} /><span className={classes.bar_labels}>login</span>
                </IconButton>
                <IconButton component={Link} to="/signup">
                  <CreateIcon style={{ color: "black" }} /><span className={classes.bar_labels}>signup</span>
                </IconButton>
              </>
            )} 
          <Typography variant="h2" align="center" gutterBottom className={classes.font}>
            Color Story
                            </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
