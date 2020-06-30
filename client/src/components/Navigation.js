import React from "react";
import { Button, AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import PaletteIcon from '@material-ui/icons/Palette';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CreateIcon from '@material-ui/icons/Create';


const useStyles = makeStyles({
  bar: {
    backgroundColor: "pink",
    borderRadius: "24px",
  },
  bar_labels: {
    fontSize: "15px",
    paddingLeft: "2px",
  },
});


function Navigation(props) {
  const { user, logoutUser } = props;
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
            <IconButton component={Link} to="/home">
              <HomeIcon style={{color: "black"}} /><span className={classes.bar_labels}>home</span>
            </IconButton>
          {user.email ? (
            <>
              <IconButton component={Link} to="/profile">
                <FaceIcon style={{color: "black"}} /><span className={classes.bar_labels}>profile</span>
              </IconButton>
              <IconButton component={Link} to="/dashboard">
                <PaletteIcon style={{color: "black"}} /><span className={classes.bar_labels}>dashboard</span>
              </IconButton>
              <IconButton component={Link} to="/favorites">
                <FavoriteIcon style={{color: "red"}} /><span className={classes.bar_labels}>favorites</span>
              </IconButton>
              <IconButton component={Link} to="/home" onClick={logoutUser}>
                <VpnKeyIcon style={{color: "black"}} /><span className={classes.bar_labels}>logout</span>
              </IconButton>
            </>
          ) : (
            <>
              <IconButton component={Link} to="/login">
                <VpnKeyIcon style={{color: "black"}} /><span className={classes.bar_labels}>login</span>
              </IconButton>
              <IconButton component={Link} to="/signup">
                <CreateIcon style={{color: "black"}} /><span className={classes.bar_labels}>signup</span>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
