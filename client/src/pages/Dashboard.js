import React from "react";
import { Button } from "@material-ui/core";

function Dashboard() {

  function uploadImage(event) {
    event.preventDefault();

    window.cloudinary.openUploadWidget(
        {
          cloudName: "dmxye0jps",
          uploadPreset: "ftjygjpy",
        },
        (error, result) => {
          console.log(result);
        //   Save result to database using api call
        }
      );
  }

  return (
    <>
      <Button onClick={uploadImage} variant="contained" color="primary">
        Create Post
      </Button>
    </>
  );
}

export default Dashboard;
