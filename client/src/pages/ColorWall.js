import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonRow from "../components/ButtonRow";
import API from "../utils/API";
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

const useStyles = makeStyles({
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

function ColorWall(props) {
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

  const [open, setOpen] = useState(false);
  const [openedPost, setOpenedPost] = useState({});

  const handleClickOpen = (value) => {
    setOpenedPost(posts.find((post) => post.imageUrl === value.target.src));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenedPost({});
  };

  const addLike = () => {
    API.Like.create({postId: openedPost.id}).then(result => {
        console.log(result);
    })
  };

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
          <Dialog
            onClose={handleClose}
            aria-labelledby="simple-dialog-title"
            open={open}
          >
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="user" className={classes.avatar}>
                    <a
                      className={classes.userPageLink}
                      href={
                        openedPost.User !== undefined
                          ? `/users/${openedPost.User.id}`
                          : ""
                      }
                    >
                      {openedPost.User !== undefined
                        ? `${openedPost.User.firstName.charAt(
                            0
                          )}${openedPost.User.lastName.charAt(0)}`
                        : ""}
                    </a>
                  </Avatar>
                }
                title={openedPost.title}
              />
              <CardMedia
                className={classes.media}
                image={openedPost.imageUrl}
                title={openedPost.title}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="h4"
                >
                  <span>
                    posted by{" "}
                    <a
                      href={
                        openedPost.User !== undefined
                          ? `/users/${openedPost.User.id}`
                          : ""
                      }
                    >
                      {openedPost.User !== undefined
                        ? openedPost.User.username
                        : ""}
                    </a>{" "}
                    on{" "}
                    {openedPost.createdAt !== undefined
                      ? openedPost.createdAt.slice(0, 10)
                      : ""}
                  </span>
                </Typography>
                <hr></hr>
                <Typography variant="body2" color="textSecondary" component="p">
                  {openedPost.description}
                </Typography>
                <hr></hr>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span>website: </span>
                  <a target="__blank" href={openedPost.postLink}>
                    {openedPost.postLink}
                  </a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span>
                    price:{" "}
                    <span style={{ fontWeight: "bold" }}>
                      ${openedPost.price}
                    </span>
                  </span>
                </Typography>
              </CardContent>
              {props.user.email ? (<CardActions disableSpacing>
                <IconButton
                  onClick={() => addLike()}
                  aria-label="Add like"
                >
                  <FavoriteIcon style={{ color: "red" }} />
                </IconButton>
              </CardActions>) : (
                <p>Sign in to Like This Post</p>
              )}
            </Card>
          </Dialog>
        </section>
      </div>
    </>
  );
}

export default ColorWall;
