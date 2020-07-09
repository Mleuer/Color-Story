import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
    paddingBottom: "15px",
    overflow: "auto"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    backgroundColor: "black",
  },
  modalInitialsLogo: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "lightblue",
    },
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
  cardDescription: {
    padding: "2% 10% 2% 2%",
  },
  modalUsernameLink: {
    backgroundColor: "black",
    color: "white",
    padding: "3px",
    borderRadius: "5px",
    textDecoration: "none",
    "&:hover": {
      color: "lightblue",
    },
  },
  modalPostLink: {
    backgroundColor: "black",
    color: "white",
    padding: "3px",
    borderRadius: "5px",
    textDecoration: "none",
    "&:hover": {
      color: "lightblue",
    },
  },
  noPostsNote: {
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "15px",
  },
  noPostsLink: {
    backgroundColor: "#4d3b58",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "18px",
    "&:hover": {
      color: "black",
      backgroundColor: "#c9c4cc",
    },
  },
  modalSignupBtn: {
    backgroundColor: "#4d3b58",
    color: "white",
    margin: "0px 5px 10px 10px",
    padding: "5px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "10px",
    "&:hover": {
      color: "black",
      backgroundColor: "#c9c4cc",
    },
  },
});

function ColorWall(props) {
  const user = props.user;

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
    API.Like.create({ postId: openedPost.id }).then((result) => {
      console.log(result);
    });
  };

  return (
    <>
      <ButtonRow handleClick={handleClick} />
      <br></br>
      {displayedPosts.length < 1 ? (
        <div className={classes.noPostsNote}>
          <Typography
            className={classes.noPostsNote}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            no posts found for this category...
          </Typography>
          <Typography
            className={classes.noPostsNote}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            want to add an image to the Color Wall?
          </Typography>
          <br></br>
          <Typography
            className={classes.noPostsLink}
            variant="body2"
            color="textSecondary"
            component={Link}
            to={user.email ? "/userpost" : "/signup"}
          >
            create post →
          </Typography>
        </div>
      ) : (
        <></>
      )}
      <div className={classes.imageSection}>
        <section className={classes.imgColumns}>
          {displayedPosts.length > 0 ? (
            displayedPosts.map((tile) => (
              <div key={`${tile.id}-imgWithModal`}>
                <img
                  onClick={handleClickOpen}
                  className={classes.imgStyle}
                  src={tile.imageUrl}
                  alt={tile.title}
                  value={tile.id}
                ></img>
              </div>
            ))
          ) : (
            <></>
          )}
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
                      className={classes.modalInitialsLogo}
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
                      className={classes.modalUsernameLink}
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
                <br></br>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.cardDescription}>
                  {openedPost.description}
                </Typography>
                <br></br>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span>website: </span>
                  <a
                    className={classes.modalPostLink}
                    target="__blank"
                    href={openedPost.postLink}
                  >
                    {openedPost.postLink
                      ? openedPost.postLink.split("//").pop().split("/")[0]
                      : "website"}
                  </a>
                </Typography>
                <br></br>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span>
                    price:{" "}
                    <span style={{ fontWeight: "bold" }}>
                      ${openedPost.price}
                    </span>
                  </span>
                </Typography>
              </CardContent>
              <br></br>
              {user.email ? (
                <CardActions disableSpacing>
                  <IconButton onClick={() => addLike()} aria-label="Add like">
                    <FavoriteIcon style={{ color: "red" }} />
                  </IconButton>
                </CardActions>
              ) : (
                <>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component={Link}
                    to="/signup"
                    className={classes.modalSignupBtn}
                  >
                    <span>sign up or log in to like this post</span>
                  </Typography>
                  <br></br>
                </>
              )}
            </Card>
          </Dialog>
        </section>
      </div>
    </>
  );
}

export default ColorWall;
