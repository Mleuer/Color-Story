import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonRow from "../components/ColorWall/ButtonRow";
import API from "../utils/API";
import ColorWallModal from "../components/ColorWall/ColorWallModal";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  imageSection: {
    width: "100%",
    border: "black 3px solid",
    borderRadius: "5px",
  },
  imgColumns: {
    lineHeight: 0,
    WebkitColumnCount: 3,
    WebkitColumnGap: "0px",
    MozColumnCount: 3,
    MozColumnGap: "0px",
    columnCount: 3,
    columnGap: "0px",
    [theme.breakpoints.down("xs")]: {
      WebkitColumnCount: 1,
      MozColumnCount: 1,
      columnCount: 1,
    },
  },
  imgStyle: {
    width: "100%",
    height: "auto",
    "&:hover": {
      opacity: "0.5",
    },
  },
  noPostComment: {
    textAlign: "center",
    fontSize: "15px",
  },
}));

function ColorWall(props) {
  const user = props.user;
  const classes = useStyles();

  // ==========================================================================
  // DISPLAY IMAGES:
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (props.userId) {
      API.Post.getAll(`?UserId=${props.userId}`).then((result) => {
        setPosts(result.data);
        getLikedPosts();
      });
    } else if (props.user.id) {
      API.Post.getAll().then((result) => {
        setPosts(result.data);
        getLikedPosts();
      });
    } else {
      API.Post.getAll().then((result) => {
        setPosts(result.data);
      });
    }
  }, [props.userId, props.user.id]);

  const filteredPosts = posts.filter((post) => post.colorCategory === color);
  let displayedPosts = color ? filteredPosts : posts;
  // ==========================================================================
  // OPEN/CLOSE MODAL:
  const handleClick = (color) => {
    setColor(color);
  };

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
  // ==========================================================================
  // "LIKE" BUTTON:
  const addLike = () => {
    API.Like.create({ postId: openedPost.id }).then((result) => {
      getLikedPosts();
    });
  };

  const getLikedPosts = () => {
    API.Like.getAll().then((result) => {
      setLikedPosts(result.data);
    });
  };

  // ==========================================================================

  return (
    <>
      <Grid container justify="center" direction="row">
        <Grid item xs={10} md={8}>
          <ButtonRow handleClick={handleClick} />
        </Grid>
      </Grid>
      <br></br>

      {displayedPosts.length < 1 ? (
        <h6 className={classes.noPostComment}>no posts in this category</h6>
      ) : (
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
            <ColorWallModal
              openedPost={openedPost}
              likedPosts={likedPosts}
              user={user}
              handleClose={handleClose}
              addLike={addLike}
              open={open}
            />
          </section>
        </div>
      )}
    </>
  );
}

export default ColorWall;
