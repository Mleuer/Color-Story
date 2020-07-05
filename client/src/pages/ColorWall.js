import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonRow from "../components/ButtonRow";
import API from "../utils/API";

// ====================================================================
// FOR THE MODAL/DIALOG BOX:
// ====================================================================
import Dialog from "@material-ui/core/Dialog";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
// ====================================================================

const useStyles = makeStyles({
  // =================================
  // FOR THE MODAL/DIALOG BOX:
  // =================================
  root: {
    width: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: "black",
  },
  userPageLink: {
    textDecoration: "none",
    color: "white",
  },
  // =================================
  imageSection: {
    width: "100%",
  },
  imgColumns: {
    lineHeight: 0,
    WebkitColumnCount: 3,
    WebkitColumnGap: "0px",
    MozColumnCount: 3,
    MozColumnGap: "0px",
    columnCount: 3,
    columnGap: "0px",
  },
  imgStyle: {
    width: "100%",
    height: "auto",
    "&:hover": {
      opacity: "0.5",
    },
  },
});

function ColorWall() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);
  const [color, setColor] = useState("");

  useEffect(() => {
    API.Post.getAll().then((result) => {
      console.log(result.data);
      setPosts(result.data);
    });
  }, []);

  const handleClick = (color) => {
    setColor(color);
  };

  const filteredPosts = posts.filter((post) => post.colorCategory === color);
  let displayedPosts = color ? filteredPosts : posts;

  // ===========================================
  // FOR THE MODAL/DIALOG BOX:
  // ===========================================
  const [selectedValue, setSelectedValue] = useState(displayedPosts);
  const [open, setOpen] = useState(false);
  const [openedPost, setOpenedPost] = useState({});

  const handleClickOpen = (value) => {
    setOpen(true);
    setSelectedValue(value.target.src);
    setOpenedPost(posts.find((post) => post.imageUrl === value.target.src));
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    setOpenedPost({});
  };

  const addLike = (post) => {
    post.userLikes += 1;
  };
  // ===========================================

  return (
    <>
      <ButtonRow handleClick={handleClick} />
      <br></br>
      <div className={classes.imageSection}>
        <section className={classes.imgColumns}>
          {displayedPosts.map((tile) => (
            <div key={`${tile.id}-imgWithModal`}>
              <img
                onClick={handleClickOpen}
                className={classes.imgStyle}
                src={tile.imageUrl}
                alt={tile.title}
                value={tile.id}
              ></img>
            </div>
          ))}
          {!openedPost ? (
            <></>
          ) : (
            <Dialog
              onClose={handleClose}
              aria-labelledby="simple-dialog-title"
              open={open}
              selectedValue={selectedValue}
            >
              <Card className={classes.root}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="user" className={classes.avatar}>
                      <a
                        className={classes.userPageLink}
                        href={openedPost.postLink}
                        ></a>
                    </Avatar>
                  }
                  title={openedPost.title}
                />
                <CardMedia
                  className={classes.media}
                  image={openedPost.imageUrl}
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {openedPost.description}
                  </Typography>
                  <hr></hr>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <a target="__blank" href={openedPost.postLink}>
                      {openedPost.postLink}
                    </a>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton
                    onClick={() => addLike(openedPost)}
                    aria-label="Add like"
                  >
                    <FavoriteIcon />
                    <>{openedPost.userLikes}</>
                  </IconButton>
                </CardActions>
              </Card>
            </Dialog>
          )}
        </section>
      </div>
    </>
  );
}

export default ColorWall;
