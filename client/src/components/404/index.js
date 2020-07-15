import React from "react";
import { Grid, Typography } from "@material-ui/core";


function DoesNotExist() {
  return (
    <>
      <Grid container direction="column">
        {/* column holds avatar and names */}
        <Grid container direction="column" alignItems="center" justify="center">
          {/* Avatar */}
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h3"
              component="h2"
              align="center"
            >
              404 Page Does Not Exist
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default DoesNotExist;
