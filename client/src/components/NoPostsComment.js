import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
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
});

function NoPostsComment(props) {
  const user = props.user;
  const classes = useStyles();

  return (
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
  );
}

export default NoPostsComment;
