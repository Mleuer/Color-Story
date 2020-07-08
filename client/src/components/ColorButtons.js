import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function ColorButtons(props) {
  const useStyles = makeStyles({
    Button: {
      backgroundColor: props.color,
      border: props.border,
      borderRadius: "50%",
      height: 100,
      width: 100,
      "&:hover": {
        backgroundColor: props.color,
      },
    },
  });

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
