import React, { useState, useEffect } from "react";
import { Avatar, Paper, makeStyles, Grid, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import ColorWall from "./ColorWall";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "400px",
    width: "400px",
    marginTop: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "300px",
    },
  },
  editAvatarIcon: {
    border: "2px solid white",
    "&:hover": {
      border: "2px solid pink",
    },
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      backgroundColor: "#FFCCCC",
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  bioPaper: {
    minHeight: "50px",
    borderRadius: "24px",
    padding: "20px",
  },
  websitePaper: {
    height: "150px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    borderRadius: "24px",
  },
  emailPaper: {
    height: "150px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    borderRadius: "24px",
  },
  font: {
    fontFamily: "Petit Formal Script, cursive",
    fontSize: "40px",
    fontWeight: "700",
    [theme.breakpoints.down("xs")]: {
      fontSize: "30px",
    },
  },

  profileLink: {
    backgroundColor: "black",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "15px",
    "&:hover": {
      color: "pink",
    },
  },
  imageSection: {
    width: "100%",
    border: "solid 3px black",
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
    height: "100%",
  },
  topBottomMargins: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  noPostComment: {
    textAlign: "center",
    fontSize: "15px",
  },
  bioText: {
    fontSize: "24px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
    },
  },
  webEmailFont: {
    fontFamily: "Petit Formal Script, cursive",
    fontSize: "30px",
    fontWeight: "700",
    marginBottom: "10px",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
    },
  },
}));

function PublicProfile(props) {
  const user = props.user;
  const classes = useStyles();
  let { id } = useParams();
  const [renderedUser, setRenderedUser] = useState({});

  useEffect(() => {
    API.User.getById(id).then((result) => {
      setRenderedUser(result.data);
    });
  }, []);

  return (
    <>
      {renderedUser ? (
        <>
          <Grid container direction="column">
            {/* column holds avatar and names */}
            <Grid
              container
              direction="column"
              alignItems="center"
              justify="center"
            >
              {/* Avatar */}
              <Grid item xs={12}>
                <Avatar
                  alt={renderedUser.fullName}
                  src={renderedUser.profilePic}
                  className={classes.avatar}
                />
              </Grid>
              {/* Username/Real Name */}
              <Grid item xs={12}>
                <Grid container direction="row">
                  <Grid item xs={12}>
                    <Typography
                      className={classes.topBottomMargins}
                      gutterBottom
                      variant="h3"
                      component="h2"
                      align="center"
                    >
                      {renderedUser.username}
                    </Typography>

                    {renderedUser.fullName ? (
                      renderedUser.fullName !== "" ? (
                        <Typography
                          style={{ marginTop: "-15px" }}
                          color="textSecondary"
                          gutterBottom
                          variant="h6"
                          component="h2"
                          align="center"
                        >
                          {renderedUser.fullName}
                        </Typography>
                      ) : (
                        <div></div>
                      )
                    ) : (
                      <div></div>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid container direction="row">
              <Grid item xs={12}>
                <br></br>
                <hr></hr>
                <br></br>
              </Grid>
            </Grid>

            <Grid
              className={classes.topBottomMargins}
              alignItems="center"
              justify="center"
              container
              direction="row"
            >
              <Grid item>
                <Typography variant="h3" className={classes.font}>
                  My Color Story
                </Typography>
              </Grid>
            </Grid>
            {/* grid item holds Bio Paper */}

            <Grid container alignItems="center" justify="center">
              <Grid placeholder="Hello" item xs={12} md={10}>
                <Paper elevation={3} className={classes.bioPaper}>
                  <Grid item>
                  {renderedUser.biography === null || renderedUser.biography === "" ? (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.bioText}
                  >
                    Hello, my name is {renderedUser.username}.
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.bioText}
                  >
                    {renderedUser.biography}
                  </Typography>
                )}
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <br></br>
            <Grid container justify="center" direction="row">
              <Grid item xs={12} md={5}>
                {/* website paper */}
                <Paper elevation={3} className={classes.websitePaper}>
                  <Grid item>
                    <h3 className={classes.webEmailFont}>Website:</h3>
                    <Typography>
                      <a
                        className={classes.profileLink}
                        target="__blank"
                        href={renderedUser.userLinks ? (renderedUser.userLinks.includes("://") ? (renderedUser.userLinks) : (`http://${renderedUser.userLinks}`)) : ("/404")}
                      >
                        {renderedUser.userLinks}
                      </a>
                    </Typography>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={5}>
                {/* email paper */}
                <Paper elevation={3} className={classes.emailPaper}>
                  <Grid item>
                    <h3 className={classes.webEmailFont}>Email:</h3>
                    <Typography>
                      <a
                        className={classes.profileLink}
                        href={`mailto:${renderedUser.email}`}
                      >
                        {renderedUser.email}
                      </a>
                    </Typography>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <ColorWall user={user} userId={renderedUser.id} />
        </>
      ) : (
        <h3>User Does Not Exist</h3>
      )}
    </>
  );
}

export default PublicProfile;
