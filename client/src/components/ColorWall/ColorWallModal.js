import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
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
    overflow: "auto",
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

function ColorWallModal(props) {
  const openedPost = props.openedPost;
  const user = props.user;
  const open = props.open;
  const handleClose = props.handleClose;
  const addLike = props.addLike;
  const classes = useStyles();

  return (
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
          image={
            openedPost.imageUrl
              ? openedPost.imageUrl
              : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
          }
          title={openedPost.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="h4">
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
                {openedPost.User !== undefined ? openedPost.User.username : ""}
              </a>{" "}
              on{" "}
              {openedPost.createdAt !== undefined
                ? openedPost.createdAt.slice(0, 10)
                : ""}
            </span>
          </Typography>
          <br></br>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.cardDescription}
          >
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
              <span style={{ fontWeight: "bold" }}>${openedPost.price}</span>
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
  );
}

export default ColorWallModal;
