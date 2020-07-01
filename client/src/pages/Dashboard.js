import React, { useState } from "react";
import { TextField, Button, Select, MenuItem } from "@material-ui/core";
import API from "../utils/API";


function Dashboard() {

  const [state, setState] = useState({
    title: "",
    imageUrl: "",
    colorCategory: "",
    postLinks: [],
    description: "",
    postTags: "",
    price: 0
  });

  function uploadImage(event) {
    event.preventDefault();

    window.cloudinary.openUploadWidget(
      {
        cloudName: "dmxye0jps",
        uploadPreset: "ftjygjpy",
      },
      (error, result) => {
        if(result.event === "success") {
          setState({ ...state, imageUrl: result.info.secure_url });
        }else if(result.event === "abort"){
          setState({ ...state, imageUrl: "" });
        }
      }
    );
  }

  const handleChange = (event) => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;

    setState({...state, [name]: value});
  };

  return (
    <>
      <form noValidate autoComplete="off">
          
        <TextField name="title" value={state.title} id="title-input" onChange={handleChange} label="Post Title" helperText="*required"/>
        <TextField name="description" value={state.description} onChange={handleChange} id="description-input" label="Post Description" helperText="*optional"/>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="colorCategory"
          value={state.colorCategory}
          onChange={handleChange}
        >
          <MenuItem value={"Red"}>Red</MenuItem>
          <MenuItem value={"Orange"}>Orange</MenuItem>
          <MenuItem value={"Yellow"}>Yellow</MenuItem>
          <MenuItem value={"Green"}>Green</MenuItem>
          <MenuItem value={"Blue"}>Blue</MenuItem>
          <MenuItem value={"Purple"}>Purple</MenuItem>
          <MenuItem value={"Black"}>Black</MenuItem>
          <MenuItem value={"White"}>White</MenuItem>
        </Select>

        <Button onClick={uploadImage} variant="contained" color="primary">
          Upload Image
        </Button>

        <Button variant="contained" color="primary">
          Create Post
        </Button>
      </form>
    </>
  );
}

export default Dashboard;
