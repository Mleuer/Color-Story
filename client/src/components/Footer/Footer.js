import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link
        color="inherit"
        target="__blank"
        href="https://github.com/Mleuer/Color-Story"
        style={{ fontWeight: "bold" }}
      >
        Color Story
      </Link>{" "}
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
    fontWeight: "bold",
    fontSize: "15px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  memberLink: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      color: "darkred",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <footer className={classes.footer}>
        <Container maxWidth="md">
          <Typography variant="body1" className={classes.memberText}>
            <span>
              <a
                className={classes.memberLink}
                target="__blank"
                href="https://github.com/Linus41"
              >
                Linus Schief
              </a>
            </span>
            <span>・</span>
            <span>
              <a
                className={classes.memberLink}
                target="__blank"
                href="https://github.com/Mleuer"
              >
                Matt Leuer
              </a>
            </span>
            <span>・</span>
            <span>
              <a
                className={classes.memberLink}
                target="__blank"
                href="https://github.com/CrainDavis"
              >
                Chyna Davis
              </a>
            </span>
            <span>・</span>
            <span>
              <a
                className={classes.memberLink}
                target="__blank"
                href="https://github.com/munoze714"
              >
                Elizabeth Munoz
              </a>
            </span>
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
