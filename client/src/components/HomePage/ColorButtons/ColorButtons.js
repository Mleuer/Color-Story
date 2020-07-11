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
      marginTop: "4px",
      marginBottom: "4px",
      "&:hover": {
        backgroundColor: props.color,
      },
      [theme.breakpoints.down("sm")]: {
        width: "70px",
        height: "70px",
        marginTop: "0px",
        marginBottom: "0px",
      },
      [theme.breakpoints.up("sm")]: {
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
