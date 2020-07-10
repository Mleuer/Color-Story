import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";





function ColorButtons(props) {
  const useStyles = makeStyles(theme => ({
    Button: {
      backgroundColor: props.color,
      border: props.border,
      borderRadius: "50%",
      height: 100,
      width: 100,
      "&:hover": {
        backgroundColor: props.color,
      },
      [theme.breakpoints.down("sm")]: {
        width: "80px",
        height: "80px",
      },
      [theme.breakpoints.down("md")]: {
        width: "90px",
        height: "90px",
      },
    }
  }));

  const classes = useStyles();

  return (
    <Button
      disableFocusRipple={true}
      disableRipple={true}
      className={classes.Button}

    ></Button>
  );
}

export default ColorButtons;
