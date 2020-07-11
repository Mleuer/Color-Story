import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  welcome: {
    marginTop: "40px",
    marginBottom: "40px",
    marginLeft: "8px",
  },
});

function Welcome() {
  const classes = useStyles();

  return (
    <div>
      <Grid item>
        <Typography alignitems="center" className={classes.welcome} variant="h1">Welcome</Typography>
      </Grid>
      <Typography className={classes.welcome} justify="center" variant="subtitle1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Typography>
      <br></br>
    </div>
  );
}

export default Welcome;
