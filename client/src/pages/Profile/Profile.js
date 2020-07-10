import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, makeStyles, Fab, Grid, Typography } from "@material-ui/core";
import ButtonRow from "../../components/ButtonRow";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import API from "../../utils/API";
import "./style.css";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "400px",
    width: "400px",
    marginTop: "20px",
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

  paper: {
    minHeight: "400px",
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
      color: "lightblue",
    },
  },
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
}));

function Profile(props) {
  const [state, setState] = useState({
    name: "",
    username: "",
    biography: "",
    userLinks: "",
    email: "",
    profilePic: "",
  });

  const [open, setOpen] = useState(false);

  const getUserInfo = () => {
    API.User.getById(props.user.id)
      .then((res) => {
        // console.log(res.data)

        let dataName = res.data.firstName + " " + res.data.lastName;
        let dataUsername = res.data.username;
        let dataBiography = res.data.biography;
        let dataUserLinks = res.data.userLinks;
        let dataEmail = res.data.email;
        let dataProfilePic = res.data.profilePic;

        setState({
          ...state,
          name: dataName,
          username: dataUsername,
          biography: dataBiography,
          userLinks: dataUserLinks,
          email: dataEmail,
          profilePic: dataProfilePic,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    getUserInfo();
  };

  const handleSave = () => {
    setOpen(false);
    API.User.update(props.user.id, state);
  };
  const handleEdit = (e) => {
    // console.log(e.target.name)
    setState({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  function uploadImage(event) {
    event.preventDefault();
    window.cloudinary.openUploadWidget(
      {
        cloudName: "dmxye0jps",
        uploadPreset: "ftjygjpy",
      },
      (error, result) => {
        if (result.event === "success") {
          setState({ ...state, profilePic: result.info.secure_url });
        }
      }
    );
  }
  //CollorWall Display
  const [posts, setPosts] = useState([]);
  const [color, setColor] = useState("");

  useEffect(() => {
    API.Post.getAll(`?UserId=${props.user.id}`).then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  }, []);

  const handleClick = (color) => {
    setColor(color);
  };

  const filteredPosts = posts.filter((post) => post.colorCategory === color);
  let displayedPosts = color ? filteredPosts : posts;

  const classes = useStyles();

  return (
    <>
      <Grid container xs={12}>
        <Grid container direction="column" xs={6}>
          <Grid item justify="center" xs={6}>
            <Avatar
              alt={state.name}
              src={state.profilePic}
              className={classes.avatar}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid justify="center" item>
              {/* <Typography gutterBottom variant="h3" component="h2" align="center">
              {state.username}
            </Typography> */}
              <Typography gutterBottom variant="h6" component="h2" align="center">
                {state.name}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="column" xs={6}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Grid item>
                <Typography variant="h3" className={classes.font}>
                  My Color Story
              </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" color="textSecondary" component="p">
                  {state.biography}
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>Add Your Color Story</DialogContentText>
          <Avatar
            onClick={uploadImage}
            name="profilePic"
            value={state.profilePic}
            alt={state.name}
            src={state.profilePic}
          />
          <TextField
            onChange={handleEdit}
            name="userLinks"
            value={state.userLinks}
            autoFocus
            margin="dense"
            id="userLinks"
            label="Link"
            type="userLinks"
            fullWidth
          />
          <TextField
            multiline
            variant="outlined"
            rows={3}
            onChange={handleEdit}
            name="biography"
            value={state.biography}
            autoFocus
            margin="dense"
            id="biography"
            label="Bio"
            type="biography"
            fullWidth
            helperText="1000 character limit"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Done
          </Button>
        </DialogActions>
      </Dialog>
      <Grid container direction="row">
        <Grid xs={12}>
          <br></br>
        </Grid>
      </Grid>



      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Grid item direction="column">
            <h3 className={classes.font}>Website:</h3>
            <Typography>
              <a
                className={classes.profileLink}
                target="__blank"
                href={state.userLinks}
              >
                {state.userLinks}
              </a>
            </Typography>
            <h3 className={classes.font}>Email:</h3>
            <Typography>
              <a
                className={classes.profileLink}
                href={`mailto:${state.email}`}
              >
                {state.email}
              </a>
            </Typography>
          </Grid>
          <Grid container direction="row">
            <Grid item xs={12}>
              <div className={classes.root}>
                <Fab
                  color="primary"
                  aria-label="add"
                  component={Link}
                  to="/userpost"
                >
                  <AddIcon />
                </Fab>
                <Fab
                  color="primary"
                  aria-label="edit"
                  onClick={handleClickOpen}
                >
                  <EditIcon />
                </Fab>
                <Fab
                  color="secondary"
                  aria-label="like"
                  component={Link}
                  to="/favorites"
                >
                  <FavoriteIcon />
                </Fab>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid container direction="row">
        <Grid xs={12}>
          <ButtonRow handleClick={handleClick} />
          <br></br>
          <div className={classes.imageSection}>
            <section className={classes.imgColumns}>
              {displayedPosts.map((tile) => (
                <div key={`${tile.id}-imgWithModal`}>
                  <img
                    className={classes.imgStyle}
                    src={tile.imageUrl}
                    alt={tile.title}
                    value={tile.id}
                  ></img>
                </div>
              ))}
            </section>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
