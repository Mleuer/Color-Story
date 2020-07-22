import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Typography
        component={Link}
        to={"https://github.com/Mleuer/Color-Story"}
        target="__blank"
        style={{ fontWeight: "bold", color: "gray" }}
      >
        Color Story
      </Typography>{" "}
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
    }
  },
}));

function Footer(props) {
  const classes = useStyles();
  const user = props.user;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container>
          <Typography variant="body1" className={classes.memberText}>
            <Typography
              className={classes.memberLink}
              component={Link}
              to={"/users/15"}
            >
              Linus Schief
            </Typography>
            <Typography>・</Typography>
            <Typography
              className={classes.memberLink}
              component={Link}
              to={"/users/14"}
            >
              Matt Leuer
            </Typography>
            <Typography>・</Typography>
            <Typography
              className={classes.memberLink}
              component={Link}
              to={"/users/4"}
            >
              Chyna Davis
            </Typography>
            <Typography>・</Typography>
            <Typography
              className={classes.memberLink}
              component={Link}
              to={"/users/13"}
            >
              Elizabeth Munoz
            </Typography>
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
