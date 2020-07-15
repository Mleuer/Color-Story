import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Grid,
  Container,
  InputLabel,
  Typography,
} from "@material-ui/core";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import API from "../utils/API";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
  titleField: {
    width: "100%",
    marginBottom: "20px",
  },
  descField: {
    width: "100%",
  },
  linkField: {
    width: "100%",
  },
  amountField: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  colCatSelect: {
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  userPostButtons: {
    backgroundColor: "#4d3b58",
    color: "white",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "#c9c4cc",
      color: "black",
    },
  },
  colorwallLink: {
    marginLeft: "5px",
    color: "purple",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      color: "#c9c4cc",
    },
  },
}));

function UserPost(props) {
  const [state, setState] = useState({
    title: "",
    imageUrl: "",
    colorCategory: "",
    postLink: "",
    description: "",
    postTags: "",
  });

  const [price, setPrice] = useState(0);

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
          createToast("Photo uploaded successfully");
        }
      }
    );
  }

  const createToast = (message) => {
    Swal.fire({
      icon: "success",
      title: message,
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
  };

  const handleChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!state.title || !state.imageUrl || !state.colorCategory) {
      props.setError("Please Fill Out Required Fields");
    } else {
      API.Post.create({ ...state, price: price })
        .then((response) => {
          setState({
            title: "",
            imageUrl: "",
            colorCategory: "",
            postLink: "",
            description: "",
            postTags: "",
          });
          setPrice({
            price: 0.0,
          });
        })
        .then((response) => {
          createToast("Post submitted successfully");
        });
    }
  };

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xs">
        <form noValidate autoComplete="off">
          <Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.titleField}
                name="title"
                value={state.title}
                id="title-input"
                onChange={handleChange}
                label="Post Title"
                helperText="*required; 25 character limit"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                multiline
                variant="outlined"
                rows={3}
                className={classes.descField}
                name="description"
                value={state.description}
                onChange={handleChange}
                id="description-input"
                label="Post Description"
                helperText="*optional; 1000 character limit"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                name="postLink"
                className={classes.linkField}
                value={state.postLink}
                onChange={handleChange}
                id="link-input"
                label="Website URL"
                helperText="*optional"
                placeholder="ie, 'https://www.userblog.com/homepage'"
              />
            </Grid>

            <br></br>

            <Grid item sm={12}>
              <CurrencyTextField
                className={classes.amountField}
                label="Amount"
                variant="standard"
                name="price"
                value={price}
                currencySymbol="$"
                outputFormat="number"
                helperText="*optional"
                onChange={(event, value) => setPrice(value)}
              />
            </Grid>

            <br></br>

            <Grid item xs={12}>
              <InputLabel id="color-category">Color Category (*required)</InputLabel>
              <Select
                className={classes.colCatSelect}
                placeholder="Color Category"
                name="colorCategory"
                value={state.colorCategory}
                onChange={handleChange}
                id="color-category"
              >
                <MenuItem value={"red"}>Red</MenuItem>
                <MenuItem value={"orange"}>Orange</MenuItem>
                <MenuItem value={"yellow"}>Yellow</MenuItem>
                <MenuItem value={"green"}>Green</MenuItem>
                <MenuItem value={"blue"}>Blue</MenuItem>
                <MenuItem value={"purple"}>Purple</MenuItem>
                <MenuItem value={"black"}>Black</MenuItem>
                <MenuItem value={"white"}>White</MenuItem>
                <MenuItem value={"multicolor"}>Multi-Color</MenuItem>
              </Select>
            </Grid>

            <br></br>

            <Grid item xs={12}>
              <Button
                className={classes.userPostButtons}
                onClick={uploadImage}
                variant="contained"
                color="primary"
              >
                Upload Image
              </Button>
            </Grid>

            <br></br>

            <Grid item xs={12}>
              <Button
                className={classes.userPostButtons}
                onClick={handleSubmit}
                variant="contained"
                color="primary"
              >
                Create Post
              </Button>
            </Grid>
          </Grid>
        </form>
        <br></br>
        <hr></hr>

        <Typography variant="body2" component="p" gutterBottom>
          check out your posts on the
          <Typography
            variant="body2"
            gutterBottom
            className={classes.colorwallLink}
            component={Link}
            to="/colorwall"
          >
            ColorWall →
          </Typography>
        </Typography>
      </Container>
    </>
  );
}

export default UserPost;
