import React from "react";
import { Button, AppBar, Toolbar, Typography, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from "@material-ui/core/IconButton";
import FaceIcon from "@material-ui/icons/Face";
import PaletteIcon from "@material-ui/icons/Palette";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CreateIcon from "@material-ui/icons/Create";
import "./style.css";
import Select from "@material-ui/core/Select";
import Menu from "@material-ui/core/Menu";
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
    marginLeft: "15px"
  }
});

function Navigation(props) {
  const { user, logoutUser } = props;
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <TemporaryDrawer>
          </TemporaryDrawer>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            className={classes.font}
          >
            Color Story
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navigation;
