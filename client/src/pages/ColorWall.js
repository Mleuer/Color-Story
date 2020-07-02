import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  IconButton,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ButtonRow from "../components/ButtonRow";

const useStyles = makeStyles({
  navRoot: {
    minWidth: 275,
    textAlign: "center",
    backgroundColor: "lightgray",
    border: "2px solid black",
    paddingTop: "8px",
  },
  gridList: {
    width: "100%",
    transform: "translateZ(0)",
  },
  root: {
    width: "100%",
  },
  photos: {
    lineHeight: 0,
    WebkitColumnCount: 3,
    WebkitColumnGap: "0px",
    MozColumnCount: 3,
    MozColumnGap: "0px",
    columnCount: 3,
    columnGap: "0px",
  },
  photoImg: {
    width: "100%",
    height: "auto",
  }
});

const tileData = [
  {
    img:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    id: "1"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2012/08/27/14/19/evening-55067__340.png",
    id: "2"
  },
  {
    img:
      "https://lh3.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",
    id: "3"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2017/03/26/12/13/countryside-2175353_960_720.jpg",
    id: "4"
  },
  {
    img:
      "https://www.politicalmetaphors.com/wp-content/uploads/2015/04/blog-shapes-square-windows.jpg",
    id: "5"
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/f/f5/Poster-sized_portrait_of_Barack_Obama.jpg",
    id: "6"
  },
  {
    img:
      "https://i.pinimg.com/736x/5f/b4/8f/5fb48fabe3a4c1c8ac1c91783e6e421b.jpg",
    id: "7"
  },
  {
    img:
      "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg",
    id: "8"
  },
  {
    img:
      "https://4.bp.blogspot.com/-1b-2wntvYw8/XYUg5u8n_VI/AAAAAAAAN4I/_2UaXoHLxc8JgVBYAJ6PwaJczs55Q3ChwCLcBGAsYHQ/w914-h514-p-k-no-nu/sunset-stars-landscape-scenery-uhdpaper.com-4K-4.753-wp.thumbnail.jpg",
    id: "9"
  },
  {
    img:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple123/v4/b6/e6/58/b6e65814-08ba-d444-989e-ce13e60637f1/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png",
    id: "10"
  },
  {
    img:
      "https://bidunart.com/wp-content/uploads/2019/12/Portrait197a-1280x640.jpg",
    id: "11"
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIkaxjjTj1f9Rd53kWYADRiul0PjbhqRuyag&usqp=CAU",
    id: "12"
  },
  {
    img:
      "https://vanishingportrait.com/wp-content/uploads/2019/05/tiffanytrenda-vanishingportrait-identity.jpg",
    id: "13"
  },
];

function ColorWall() {
  const classes = useStyles();

  return (
    <>
    <ButtonRow />
      <br></br>
      <div className={classes.root}>
        <section className={classes.photos}>
            {tileData.map((tile) => (
                <img className={classes.photoImg} src={tile.img} alt={tile.id}></img>
            ))}
        </section>
      </div>
    </>
  );
}

export default ColorWall;
