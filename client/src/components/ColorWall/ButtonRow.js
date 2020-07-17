import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, IconButton } from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const useStyles = makeStyles({
  navRoot: {
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
    {colorCat: "red", styleBack: "#f22c4a", styleColor: "#f22c4a"},
    {colorCat: "orange", styleBack: "#f97116", styleColor: "#f97116"},
    {colorCat: "yellow", styleBack: "#f9d916", styleColor: "#f9d916"},
    {colorCat: "green", styleBack: "#0fd43a", styleColor: "#0fd43a"},
    {colorCat: "blue", styleBack: "#197cbe", styleColor: "#197cbe"},
    {colorCat: "purple", styleBack: "#b876f0", styleColor: "#b876f0"},
    {colorCat: "black", styleBack: "#2d2a2f", styleColor: "#2d2a2f"},
    {colorCat: "white", styleBack: "#f5fafd", styleColor: "#f5fafd"},
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
