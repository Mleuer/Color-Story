import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, makeStyles, Fab, Grid, Typography, CardContent } from "@material-ui/core";
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
import ButtonRow from "../../components/ButtonRow";
import API from "../../utils/API"
import "./style.css";

const useStyles = makeStyles((theme) => ({
  avatar: {
    height: "400px",
    width: "400px",
    marginTop: "20px",
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function Profile(props) {
  const [state, setState] = useState({
    name: "",
    biography: "",
    userLinks: "",
    profilePic: ""
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    API.User.update(props.user.id, state)

  };
  const handleEdit = (e) => {
    console.log(e.target.name)

    setState({ ...state, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    API.User.getById(props.user.id)
      .then((res) => {
        // console.log(res.data)

        let dataName = res.data.name;
        let dataBiography = res.data.biography;
        let dataUserLinks = res.data.userLinks;
        let dataProfilePic = res.data.profilePic;

        setState({
          ...state,
          name: dataName,
          biography: dataBiography,
          userLinks: dataUserLinks,
          profilePic: dataProfilePic

        });
      })
      .catch((err) => console.log(err));
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
          setState({ ...state, imageUrl: result.info.secure_url });
        } else if (result.event === "abort") {
          setState({ ...state, imageUrl: "" });
        }
      }
    );
  }

  const handleImageLoaded = (event) => {

  };

  const preventDefault = (event) => {
    event.preventDefault();
  };
  // console.log("this is our state", state)
  // console.log("these are our props", props)
  const classes = useStyles();

  return (
    <>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item xs={12}>
          <Avatar
            alt={state.name}
            src={state.profilePic}
            className={classes.avatar} />
        </Grid>
        <Grid xs={6}>
          <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
              {state.name}
            </Typography>
            <h3>Bio</h3>
            <Typography variant="body2" color="textSecondary" component="p">
              {state.biography}
            </Typography>
            <h3>Website</h3>
            <Typography>
              <Link href="#" onClick={preventDefault}>
                {state.userLinks}
              </Link>
            </Typography>
            <h3>Blog</h3>
            <Typography>
              <Link href="#" onClick={preventDefault}>
                Blog
                             </Link>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <Grid container direction="row">
        <Grid xs={12}>
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

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add Your Color Story
          </DialogContentText>
          <Avatar
            onClick={uploadImage}
            alt={state.name}
            src={state.profilePic} />
          <TextField
            onChange={handleEdit}
            name="name"
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="name"
            fullWidth
          />
          <TextField
            onChange={handleEdit}
            name="userLinks"
            autoFocus
            margin="dense"
            id="userLinks"
            label="Link"
            type="userLinks"
            fullWidth
          />
          <TextField
            onChange={handleEdit}
            name="biography"
            autoFocus
            margin="dense"
            id="biography"
            label="Bio"
            type="biography"
            fullWidth
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
          <ButtonRow />
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;