import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
}));

function Favorite(props) {
  const [posts, setPosts] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    API.Like.getAll().then((result) => {
      // console.log(result);
      setPosts(result.data);
    });
  }, []);

  return (
    <>
      <div className={classes.imageSection}>
        <section className={classes.imgColumns}>
          {posts.map((tile) => (
            <Link key={tile.Post.id} to={tile.Post !== undefined ? (`/users/${tile.Post.UserId}`) : ("/home")}>
              <div>
                <img
                  className={classes.imgStyle}
                  src={tile.Post.imageUrl}
                  alt={tile.Post.title}
                  value={tile.Post.id}
                ></img>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
}

export default Favorite;
