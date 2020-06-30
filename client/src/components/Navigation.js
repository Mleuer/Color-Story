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
});


function Navigation(props) {
  const { user, logoutUser } = props;
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <IconButton component={Link} to="/home">
            <HomeIcon color="black" />
          </IconButton>
          <IconButton component={Link} to="/profile">
            <FaceIcon color="black" />
          </IconButton>
          <IconButton component={Link} to="/dashboard">
            <PaletteIcon color="black" />
          </IconButton>
          <IconButton component={Link} to="/login">
            <FavoriteIcon style={{ color: "red" }} />
          </IconButton>
          <IconButton component={Link} to="/login">
            <AddCircleOutlineIcon color="black" />
          </IconButton>

          {user.email ? (
            <>
              <Button component={Link} to="/dashboard" color="inherit">
                Dashboard
              </Button>

              <Button component={Link} to="/home" onClick={logoutUser} color="inherit">
                Logout
              </Button>
            </>
          ) : (
            <>
              <IconButton component={Link} to="/login">
                <VpnKeyIcon color="black" />
              </IconButton>
              <IconButton component={Link} to="/signup">
                <CreateIcon color="black" />
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
