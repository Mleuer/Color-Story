import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      width: "300px",
    },
    width: "400px",
    maxHeight: "98vh",
    overflow: "auto",
    paddingBottom: "15px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    "& .MuiPaper-rounded": {
      borderRadius: "24px",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
    },
  },
  avatar: {
    height: "80px",
    width: "80px",
    border: "2px solid white",
    "&:hover": {
      border: "2px solid pink",
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  title: {
    fontWeight: "bold",
    fontSize: "25px",
  },
  cardDescription: {
    [theme.breakpoints.down("xs")]: {
      paddingRight: "10px",
    },
  },
  modalUsernameLink: {
    fontSize: "15px",
    marginLeft: "2px",
    marginRight: "2px",
    backgroundColor: "black",
    color: "white",
    padding: "3px",
    borderRadius: "5px",
    textDecoration: "none",
    "&:hover": {
      color: "pink",
    },
  },
  modalPostLink: {
    fontSize: "15px",
    backgroundColor: "black",
    color: "white",
    padding: "3px",
    borderRadius: "5px",
    textDecoration: "none",
    "&:hover": {
      color: "pink",
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
}));

function ColorWallModal(props) {
  const openedPost = props.openedPost;
  const likedPosts = props.likedPosts;
  const user = props.user;
  const open = props.open;
  const handleClose = props.handleClose;
  const addLike = props.addLike;
  const classes = useStyles();

  function determineIfLiked() {
    return (
      likedPosts.filter((like) => like.PostId === openedPost.id).length > 0
    );
  }

  return (
    <Modal
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={open}
      style={{ positon: "relative" }}
    >
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              component={Link}
              to={
                openedPost.User !== undefined
                  ? `/users/${openedPost.User.id}`
                  : ""
              }
              aria-label="user"
              className={classes.avatar}
              alt={
                openedPost.User !== undefined
                  ? `${openedPost.User.username}-modal-${openedPost.id}`
                  : ""
              }
              src={
                openedPost.User !== undefined
                  ? openedPost.User.profilePic
                  : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
              }
            ></Avatar>
          }
          title={
            <Typography className={classes.title}>
              {openedPost.title}
            </Typography>
          }
        />
        <Typography
          variant="body2"
          color="textSecondary"
          component="h4"
          style={{ margin: "-15px 10px 10px 15px" }}
        >
          posted by{" "}
          {openedPost.User !== undefined ? (
            <Typography
              className={classes.modalUsernameLink}
              component={Link}
              to={
                openedPost.User !== undefined
                  ? `/users/${openedPost.User.id}`
                  : ""
              }
            >
              {openedPost.User !== undefined ? openedPost.User.username : ""}
            </Typography>
          ) : (
            <div></div>
          )}
        </Typography>
        <CardMedia className={classes.media} image={openedPost.imageUrl} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="h4">
            posted on{" "}
            {openedPost.createdAt !== undefined ? (
              <span>
                {openedPost.createdAt !== undefined
                  ? openedPost.createdAt.slice(0, 10)
                  : ""}
              </span>
            ) : (
              <div></div>
            )}
          </Typography>

          {openedPost.description !== "" ? (
            <div>
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
            </div>
          ) : (
            <div></div>
          )}

          {openedPost.postLink !== "" ? (
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
          ) : (
            <div></div>
          )}

          <br></br>
          <Typography variant="body2" color="textSecondary" component="p">
            <span>
              price:{" "}
              {openedPost.price === 0 ? (<span style={{ fontWeight: "bold" }}>N/A</span>) : (<span style={{ fontWeight: "bold" }}>${openedPost.price}</span>)}
            </span>
          </Typography>
        </CardContent>
        <br></br>
        {user !== undefined ? (
          user.email ? (
            <CardActions disableSpacing>
              <IconButton onClick={() => addLike()} aria-label="Add like">
                <FavoriteIcon
                  style={{ color: determineIfLiked() ? "red" : "gray" }}
                />
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
          )
        ) : (
          <></>
        )}
      </Card>
    </Modal>
  );
}

export default ColorWallModal;
