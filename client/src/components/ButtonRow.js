import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, IconButton } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles({
  navRoot: {
    minWidth: 275,
    textAlign: "center",
    backgroundColor: "lightgray",
    border: "2px solid black",
    paddingTop: "8px",
  },
});

function ButtonRow(props) {
  const classes = useStyles();
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "black",
    "white",
    "gray"
  ];

  return (
    <>
      <Card className={classes.navRoot} variant="outlined">
        <CardContent>
          {colors.map((color) => (
            <IconButton key={`${color}-btn`} onClick={() => props.handleClick(color)}>
              <FiberManualRecordIcon
                style={{ color: color }}
              />
            </IconButton>
          ))}
        </CardContent>
      </Card>
    </>
  );
}

export default ButtonRow;
