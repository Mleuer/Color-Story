import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar, makeStyles, Fab, Grid, Typography } from "@material-ui/core";
import Menu from "../components/ColorWall/menu";
import ButtonRow from "../components/ColorWall/ButtonRow";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import API from "../utils/API";
import Paper from "@material-ui/core/Paper";

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
      "&:hover": {
        backgroundColor: "gray",
      },
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
    alignItems: "center",
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
    fontSize: "50px",
    fontWeight: "700",
    marginBottom: "10px",
    marginTop: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "35px",
    },
  },

  profileLink: {
    backgroundColor: "black",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
    textDecoration: "none",
    fontSize: "15px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
    "&:hover": {
      color: "pink",
    },
  },
  imageSection: {
    width: "100%",
    border: "black 3px solid",
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
  },
}));

function Profile(props) {
  const [state, setState] = useState({
    fullName: "",
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

        let dataFullName = res.data.fullName;
        let dataUsername = res.data.username;
        let dataBiography = res.data.biography;
        let dataUserLinks = res.data.userLinks;
        let dataEmail = res.data.email;
        let dataProfilePic = res.data.profilePic;

        setState({
          ...state,
          fullName: dataFullName,
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
    resetPost();
  }, []);

  const resetPost = () => {
    API.Post.getAll(`?UserId=${props.user.id}`).then((res) => {
      console.log(res.data);
      setPosts(res.data);
    });
  };

  const handleClick = (color) => {
    setColor(color);
  };

  const filteredPosts = posts.filter((post) => post.colorCategory === color);
  let displayedPosts = color ? filteredPosts : posts;

  const classes = useStyles();

  return (
    <>
      {/* column holds all pieces down to color wall */}
      <Grid container direction="column">
        {/* column holds avatar and names */}
        <Grid container direction="column" alignItems="center" justify="center">
          {/* Avatar */}
          <Grid item xs={12}>
            <Avatar
              alt={state.fullName}
              src={state.profilePic}
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
                  {state.username}
                </Typography>

                {state.fullName ? (
                  state.fullName !== "" ? (
                    <Typography
                      style={{ marginTop: "-30px" }}
                      color="textSecondary"
                      gutterBottom
                      variant="h6"
                      component="h2"
                      align="center"
                    >
                      {state.fullName}
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
                {state.biography === null || state.biography === "" ? (
                  <Typography
                    className={classes.bioText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Hello {state.username}, and welcome to Color Story! This is
                    your Profile page, where you can tell your story, get in
                    contact with other artists, and most importantly -- share
                    your work!! See the three pink buttons below? The left-most
                    one allows you to create your very own posts and share your
                    artwork with others. The second one allows you to edit your
                    profile that others will see (avatar, name, website, and
                    biography). The third button will bring you to your
                    "Favorites" page where you can find all of the images you
                    have "liked", while the last button will let you view your
                    Public Profile and see exactly what other users will see
                    when they visit your page. On the bottom of this page, you
                    even have your very own Color Wall, filled with just your
                    posts! Feel free to add, edit, and delete posts as you see
                    fit!
                  </Typography>
                ) : (
                  <Typography
                    className={classes.bioText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {state.biography}
                  </Typography>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <br></br>
        <Grid container justify="center" spacing={2} direction="row">
          <Grid item xs={10} md={5}>
            {/* website paper */}
            <Paper elevation={3} className={classes.websitePaper}>
              <Grid item>
                <h3 className={classes.webEmailFont}>Website:</h3>
                <Typography>
                  <a
                    className={classes.profileLink}
                    target="__blank"
                    href={state.userLinks}
                  >
                    {state.userLinks}
                  </a>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={10} md={5}>
            {/* email paper */}
            <Paper elevation={3} className={classes.emailPaper}>
              <Grid item>
                <h3 className={classes.webEmailFont}>Email:</h3>
                <Typography>
                  <a
                    className={classes.profileLink}
                    href={`mailto:${state.email}`}
                  >
                    {state.email}
                  </a>
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
            className={classes.editAvatarIcon}
            onClick={uploadImage}
            name="profilePic"
            value={state.profilePic}
            alt={state.fullName}
            src={state.profilePic}
          />
          <TextField
            onChange={handleEdit}
            name="fullName"
            value={state.fullName}
            autoFocus
            margin="dense"
            id="fullName"
            label="Full Name"
            type="text"
            fullWidth
          />
          <TextField
            onChange={handleEdit}
            name="userLinks"
            value={state.userLinks}
            autoFocus
            margin="dense"
            id="userLinks"
            label="Link"
            type="text"
            fullWidth
          />
          <TextField
            multiline
            variant="outlined"
            rows={5}
            onChange={handleEdit}
            name="biography"
            value={state.biography}
            autoFocus
            margin="dense"
            id="biography"
            label="Bio"
            type="text"
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

      <Grid
        className={classes.topBottomMargins}
        justify="center"
        container
        direction="row"
      >
        <Grid item className={classes.root}>
          <Fab
            color="secondary"
            aria-label="add"
            component={Link}
            to="/userpost"
          >
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit" onClick={handleClickOpen}>
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

          <Fab
            color="secondary"
            aria-label="publicProfile"
            component={Link}
            to={`/users/${props.user.id}`}
          >
            <AccountCircleIcon />
          </Fab>
        </Grid>
      </Grid>

      <hr></hr>
      <br></br>

      <Grid container justify="center">
        <Grid justify="center" item xs={10} md={8}>
          <ButtonRow handleClick={handleClick} />
          <br></br>
          {displayedPosts.length < 1 ? (
            <h6 className={classes.noPostComment}>no posts in this category</h6>
          ) : (
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
                    <Menu tile={tile} resetPost={resetPost} id={tile.id} />
                  </div>
                ))}
              </section>
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
}

export default Profile;
