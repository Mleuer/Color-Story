import React from "react";
import { Button, AppBar, Toolbar } from '@material-ui/core';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles ({
  bar: {
    backgroundColor: "pink",
    borderRadius: "24px",
  },
})



function Navigation(props) {
  const { user, logoutUser } = props;
  const classes = useStyles();
  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Button component={Link} to="/home" color="inherit">Home</Button>
          <Button component={Link} to="/dashboard" color="inherit">Dashboard</Button>

          {user.email ?
            <>
              <Button component={Link} to="/home" onClick={logoutUser} color="inherit">Logout</Button>
            </>
            :
            <>
              <Button component={Link} to="/login" color="inherit">Login</Button>
              <Button component={Link} to="/signup" color="inherit">Signup</Button>
            </>
          }
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navigation;