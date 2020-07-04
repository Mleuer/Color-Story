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

  const handleClickOpen = (value) => {
    setOpen(true);
    setSelectedValue(value);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const addLike = (post) => {
    post.userLikes += 1;

  }
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
                          href={tile.postLink}
                        >{`${tile.User.firstName.charAt(
                          0
                        )}${tile.User.lastName.charAt(0)}`}</a>
                      </Avatar>
                    }
                    title={tile.title}
                    subheader={tile.createdAt.slice(0, 10)}
                  />
                  <CardMedia className={classes.media} image={tile.imageUrl} />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {tile.description}
                    </Typography>
                    <hr></hr>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      <a target="__blank" href={tile.postLink}>
                        {tile.postLink}
                      </a>
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton onClick={() => addLike(tile)} aria-label="Add like">
                      <FavoriteIcon/>
                      <>{tile.userLikes}</>
                    </IconButton>
                  </CardActions>
                </Card>
              </Dialog>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}

export default ColorWall;
