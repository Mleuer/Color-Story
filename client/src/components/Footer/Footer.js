import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <a
        href="https://github.com/Mleuer/Color-Story"
        target="__blank"
        className={classes.repoLink}
      >
        Color Story
      </a>{" "}
      2020
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    borderTop: "10px solid whitesmoke",
  },
  footer: {
    padding: theme.spacing(3, 2),
    backgroundColor: "#FFCCCC",
  },
  repoLink: {
    fontWeight: "bold",
    color: "gray",
    textDecoration: "none",
    "&:hover": {
      color: "whitesmoke",
    },
  },
  memberText: {
    display: "flex",
    justifyContent: "center",
    fontSize: "15px",
  },
  memberLink: {
    color: "black",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "bold",
    "&:hover": {
      color: "darkred",
    },
  },
}));

function Footer(props) {
  const classes = useStyles();
  // const user = props.user;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container>
          <Typography variant="body1" className={classes.memberText}>
            <span>
              <Typography
                className={classes.memberLink}
                component={Link}
                to={"/users/15"}
              >
                Linus Schief
              </Typography>
            </span>
            <span>・</span>
            <span>
              <Typography
                className={classes.memberLink}
                component={Link}
                to={"/users/14"}
              >
                Matt Leuer
              </Typography>
            </span>
            <span>・</span>
            <span>
              <Typography
                className={classes.memberLink}
                component={Link}
                to={"/users/4"}
              >
                Chyna Davis
              </Typography>
            </span>
            <span>・</span>
            <span>
              <Typography
                className={classes.memberLink}
                component={Link}
                to={"/users/13"}
              >
                Elizabeth Munoz
              </Typography>
            </span>
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
