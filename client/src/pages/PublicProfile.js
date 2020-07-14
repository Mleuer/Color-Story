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
        border: "2px solid pink"
      }
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
      minHeight: "100px",
      padding: "10px",
    },
    websitePaper: {
      height: "150px",
      padding: "10px",
      margin: "10px",
      textAlign: "center",
    },
    emailPaper: {
      height: "150px",
      padding: "10px",
      margin: "10px",
      textAlign: "center",
    },
    font: {
      fontFamily: "Petit Formal Script, cursive",
      fontSize: "30px",
    },
  
    profileLink: {
      backgroundColor: "black",
      color: "white",
      padding: "5px",
      borderRadius: "5px",
      textDecoration: "none",
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
  }));

function PublicProfile(props) {
  const user = props.user;
  const classes = useStyles();
  let { id } = useParams();
  const [renderedUser, setRenderedUser] = useState({});

  useEffect(() => {
    API.User.getById(id).then((result) => {
      console.log(result);
      setRenderedUser(result.data);
    });
  }, []);

  return (
    <>
        <Grid container direction="column">
        {/* column holds avatar and names */}
        <Grid container direction="column" alignItems="center" justify="center">
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
                      style={{marginTop: "-30px"}}
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
        <Grid item xs={12}>
          <Paper elevation={3} className={classes.bioPaper}>
            <Grid item>
              <Typography variant="body2" color="textSecondary" component="p">
                {renderedUser.biography}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <br></br>
        <Grid container justify="space-between" direction="row">
          <Grid item xs={12} md={6}>
            {/* website paper */}
            <Paper elevation={3} className={classes.websitePaper}>
              <Grid item>
                <h3 className={classes.font}>Website:</h3>
                <Typography>
                  <a
                    className={classes.profileLink}
                    target="__blank"
                    href={renderedUser.userLinks}
                  >
                    {renderedUser.userLinks}
                  </a>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* email paper */}
            <Paper elevation={3} className={classes.emailPaper}>
              <Grid item>
                <h3 className={classes.font}>Email:</h3>
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
      <ColorWall user={user} userId={renderedUser.id}/>
    </>
  );
}

export default PublicProfile;
