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
  iconColor: {
    borderRadius: "20px"
  }
});

function ButtonRow(props) {
  const classes = useStyles();
  const colors = [
    {colorCat: "red", styleBack: "red", styleColor: "red"},
    {colorCat: "orange", styleBack: "orange", styleColor: "orange"},
    {colorCat: "yellow", styleBack: "yellow", styleColor: "yellow"},
    {colorCat: "green", styleBack: "green", styleColor: "green"},
    {colorCat: "blue", styleBack: "blue", styleColor: "blue"},
    {colorCat: "purple", styleBack: "purple", styleColor: "purple"},
    {colorCat: "black", styleBack: "black", styleColor: "black"},
    {colorCat: "white", styleBack: "white", styleColor: "white"},
    {colorCat: "multicolor", styleBack: "linear-gradient(45deg, red, green, blue)", styleColor: "gray"}
  ];

  return (
    <>
      <Card className={classes.navRoot} variant="outlined">
        <CardContent>
          {colors.map((color) => (
            <IconButton key={`${color.colorCat}-btn`} onClick={() => props.handleClick(color.colorCat)}>
              <FiberManualRecordIcon className={classes.iconColor}
                style={{ background: color.styleBack, color: color.styleColor }}
              />
            </IconButton>
          ))}
        </CardContent>
      </Card>
    </>
  );
}

export default ButtonRow;
