import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, makeStyles, Fab, Grid, Typography } from "@material-ui/core";
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

  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={12}>
          <Avatar
            alt={state.name}
            src={state.profilePic}
            className={classes.avatar}
          />
        </Grid>
        <Grid xs={12}>
          <Grid item direction="row">
            <Typography gutterBottom variant="h3" component="h2">
              {state.username}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              ({state.name})
            </Typography>



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

      <Grid container direction="row" spacing={3}>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid item direction="column">
              <Typography>
                <h3 className={classes.font}>My Color Story</h3>
              </Typography>
            </Grid>
            <Grid item>
              {state.biography}
            </Grid>
          </Paper>
        </Grid>

        {/* links and buttons paper */}

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Grid item direction="column">
              <h3 className={classes.font}>Website:</h3>
              <Typography>
                <a target="__blank" href={state.userLinks}>
                  {state.userLinks}
                </a>
              </Typography>
              <h3 className={classes.font}>Email:</h3>
              <Typography>
                <a href={`mailto:${state.email}`}>{state.email}</a>
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
                  <Fab color="primary" aria-label="edit" onClick={handleClickOpen}>
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
      </Grid>

    </>
  );
}

export default Profile;
