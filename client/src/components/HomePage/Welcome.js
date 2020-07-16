import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  welcome: {
    marginTop: "40px",
    marginBottom: "20px",
    marginLeft: "8px",
    fontSize: "80px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "70px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "80px",
    }
  },
  textBlock: {
    marginTop: "20px",
    marginBottom: "20px",
    fontSize: "18px",
  },
}));

function Welcome() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography alignitems="center" className={classes.welcome} variant="h1">Welcome</Typography>
        </Grid>
        <Grid item align="justify" className={classes.textBlock}>
          <Typography  variant="subtitle1">
          Hello color enthusiasts! If you are a visual artist, chances are you care about color. If you are not an artist, chances are you have a favorite one. Or two, or three...
<br></br><br></br>
Color Story is a way for artists and designers to post their work in a community “Color Wall” along with other artists. It's a simple, free, streamlined platform for those who have got their hands in many pots, and want ONE website to show it all off. From digital illustration to handmade goods, paintings, drawings, clothing, etc., you can showcase it all here, through the lens of COLOR.
<br></br><br></br>
Why sign up? 
<br></br><br></br>
If you are an artist or designer, this is a great place to promote and sell your work. Color Story is free, easy to use, and may lead to more sales,  exposure, even collaborations! 
<br></br><br></br>
If you are here simply to gain exposure to more artists that you can support directly, signing up for a profile means you can curate your own collection of favorites to your personalized Color Wall for easy retrieval/admiration.
<br></br><br></br>

How it all works: 
<br></br><br></br>
When an artist makes a post, it is displayed on a community “Color Wall” where images are sorted by a single color, multi-color, black, or white. Anyone who visits the site can scroll through the color wall for an immediate representation of all the artists, filtered by color if they choose. Click on the image and you will be shown the price, description, external links, and the artist's Color Story profile. <br></br><br></br>
To check it out right now, click above on the color circles, or sign up now to get your profile going! We'd LOVE to hear your "Color Story," whatever that means to you!
      </Typography>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
}

export default Welcome;
