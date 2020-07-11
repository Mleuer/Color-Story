import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, IconButton } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles({
  navRoot: {
    minWidth: 275,
    textAlign: "center",
    backgroundColor: "gray",
    border: "2px solid black",
    paddingTop: "8px",
    borderRadius: "24px",
    marginTop: "15px",
    marginBottom: "10px",
  },
  iconColor: {
    borderRadius: "20px"
  }
});

function ButtonRow(props) {
  const classes = useStyles();
  const colors = [
    {colorCat: "#f22c4a", styleBack: "#f22c4a", styleColor: "#f22c4a"},
    {colorCat: "#f97116", styleBack: "#f97116", styleColor: "#f97116"},
    {colorCat: "#f9d916", styleBack: "#f9d916", styleColor: "#f9d916"},
    {colorCat: "#0fd43a", styleBack: "#0fd43a", styleColor: "#0fd43a"},
    {colorCat: "#37c6e5", styleBack: "#37c6e5", styleColor: "#37c6e5"},
    {colorCat: "#4c24f9", styleBack: "#4c24f9", styleColor: "#4c24f9"},
    {colorCat: "#b876f0", styleBack: "#b876f0", styleColor: "#b876f0"},
    {colorCat: "#2d2a2f", styleBack: "#2d2a2f", styleColor: "#2d2a2f"},
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
