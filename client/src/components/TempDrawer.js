import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import FaceIcon from "@material-ui/icons/Face";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const { user, logoutUser } = props;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button component={Link} to="/home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {user.email ? (
          <>
            <ListItem button component={Link} to="/profile">
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button component={Link} to="/userpost">
              <ListItemIcon>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Create Post" />
            </ListItem>
            <ListItem button component={Link} to="/home" onClick={logoutUser}>
              <ListItemIcon>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button component={Link} to="/login">
              <ListItemIcon>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText primary="Log In" />
            </ListItem>
            <ListItem button component={Link} to="/signup">
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </>
        )}
        <ListItem button component={Link} to="/colorwall">
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="Color Wall" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["☆"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
