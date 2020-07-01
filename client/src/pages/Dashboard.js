import React, { useState } from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  Grid,
  Container,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import CurrencyTextField from "@unicef/material-ui-currency-textfield";
import API from "../utils/API";
import PhotoUrl from "../components/PhotoUrl";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  inputField: {
      width: "100%",
  },
  linkField: {
    width: "33%",
  },
  colCatSelect: {
    width: "12%",
  },
  dashboardButtons: {
      backgroundColor: "#4d3b58",
      color: "white",
      width: "20%",
      "&:hover": {
          backgroundColor: "#c9c4cc",
          color: "black"
      }
  },
})

function Dashboard(props) {
  const [state, setState] = useState({
    title: "",
    imageUrl: "",
    colorCategory: "",
    postLink: "",
    description: "",
    postTags: "",
  });

  const [message, setMessage] = useState("");
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
          setMessage("Photo Uploaded Successfully");
        }
        // } else if (result.event === "abort") {
        //   setState({ ...state, imageUrl: "" });
        // }
      }
    );
  }

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
      API.Post.create({...state, price: price}).then(response => {
          console.log(response);
      })
    }
  };

  function clearMessage() {
    setMessage("");
  }

  const classes = useStyles();

  return (
    <>
      <Container>
        <form noValidate autoComplete="off">

          <Grid spacing={3}>

          <Grid item sm={4}>
            <TextField className={classes.inputField} name="title" value={state.title} id="title-input" onChange={handleChange} label="Post Title" helperText="*required" />
          </Grid>

          <Grid item sm={4}>
            <TextField className={classes.inputField} name="description" value={state.description} onChange={handleChange} id="description-input" label="Post Description" helperText="*optional" />
          </Grid>

          <Grid item sm={12}>
            <TextField name="postLink" className={classes.linkField} value={state.postLinks} onChange={handleChange} id="link-input" label="External Link" helperText="*optional" />
          </Grid>

          <br></br>

          <Grid item sm={12}>
            <CurrencyTextField className={classes.linkField} label="Amount" variant="standard" name="price" value={price} currencySymbol="$" outputFormat="number"
              // onBlur={handleChange}
              onChange={(event, value) => setPrice(value)}
            />
          </Grid>

          <br></br>

          <Grid item sm={12}>
            <InputLabel id="color-category">Color Category</InputLabel>
            <Select className={classes.colCatSelect} placeholderText="Color Category" name="colorCategory" value={state.colorCategory} onChange={handleChange} id="color-category">
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

          <Grid item sm={12}>
            <Button className={classes.dashboardButtons} onClick={uploadImage} variant="contained" color="primary">Upload Image</Button>
            {message && <PhotoUrl message={message} clearMessage={clearMessage} />}
          </Grid>

          <br></br>

          <Grid item sm={12}>
            <Button className={classes.dashboardButtons} onClick={handleSubmit} variant="contained" color="primary">Create Post</Button>
          </Grid>

          </Grid>

        </form>
      </Container>
    </>
  );
}

export default Dashboard;
