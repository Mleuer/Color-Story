import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import PaletteIcon from "@material-ui/icons/Palette";
import FaceIcon from "@material-ui/icons/Face";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import CreateIcon from "@material-ui/icons/Create";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
  font: {
    fontSize: "50px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  drawer: {
    "& .MuiPaper-root": {
      backgroundColor: "#222222",
      borderRight: "#ffffff solid 10px",
      color: "#ffffff",
    },
  },
  iconColor: {
    color: "#ffffff",
  },
  listItem: {
    "&:hover": {
      backgroundColor: "gray",
    },
  },
}));

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
        <ListItem
          className={classes.listItem}
          button
          component={Link}
          to="/home"
        >
          <ListItemIcon className={classes.iconColor}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem
          className={classes.listItem}
          button
          component={Link}
          to="/about"
        >
          <ListItemIcon className={classes.iconColor}>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
        {user.email ? (
          <>
            <ListItem
              className={classes.listItem}
              button
              component={Link}
              to="/profile"
            >
              <ListItemIcon className={classes.iconColor}>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem
              className={classes.listItem}
              button
              component={Link}
              to="/userpost"
            >
              <ListItemIcon className={classes.iconColor}>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Create Post" />
            </ListItem>
            <ListItem
              className={classes.listItem}
              button
              component={Link}
              to="/home"
              onClick={logoutUser}
            >
              <ListItemIcon className={classes.iconColor}>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem
              className={classes.listItem}
              button
              component={Link}
              to="/login"
            >
              <ListItemIcon className={classes.iconColor}>
                <VpnKeyIcon />
              </ListItemIcon>
              <ListItemText primary="Log In" />
            </ListItem>
            <ListItem
              className={classes.listItem}
              button
              component={Link}
              to="/signup"
            >
              <ListItemIcon className={classes.iconColor}>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </>
        )}
        <ListItem
          className={classes.listItem}
          button
          component={Link}
          to="/colorwall"
        >
          <ListItemIcon className={classes.iconColor}>
            <PaletteIcon />
          </ListItemIcon>
          <ListItemText primary="Color Wall" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon className={classes.font} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            className={classes.drawer}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
