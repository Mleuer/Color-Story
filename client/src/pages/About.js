import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  welcome: {
    marginTop: "40px",
    marginBottom: "20px",
    marginLeft: "8px",
    fontSize: "80px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "60px",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "70px",
    },
  },
  textBlock: {
    marginBottom: "20px",
    fontSize: "18px",
    marginLeft: "60px",
    marginRight: "60px",
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item align="justify" className={classes.textBlock}>
          <Typography variant="subtitle1">
            <h2><strong>Hello color enthusiasts!</strong></h2> If you are a visual artist, chances are you
            care about color. If you are not an artist, chances are you have a
            favorite color. Or two, or three...
            <br></br>
            <br></br>
            Color Story is a way to connect artists and designers to each other, as well as to art/design lovers via 
            a community “Color Wall." It's a simple,
            free platform for those who make creative work from a variety of media and want ONE website to show it all off! It's also for users to visit and browse your work by scrolling through the Color Wall, which displays as a beautiful quilt of objects, designs, illustrations...whatever visual art you would like to share. For those who want to browse by color, the Color Wall can become a monochromatic experience with the click of a button. Feel free to check it out right now by clicking on the color circles above!
        
            <br></br>
            <br></br>
            <h3><strong>Why sign up?</strong></h3>
            
            If you are an artist or designer, this is a great place to promote
          your work and provide viewers with links to sites where they may purchase directly from you. No fussing with filling out extensive forms here! Think of Color Story as a social media site for your creativity; a fun, colorful place to share your story and what you're excited about. Works in progress are welcome, as are process shots! Our hope is that Color Story will lead you to more sales, exposure, and collaborations.
            <br></br>
            <br></br>
            If you are here to browse artists and find new things to love, signing up for a profile means you can curate your
            own collection of favorites to your personalized Color Wall for easy
            retrieval and admiration! And of course, even if you are not an artist, we still want to hear your "Color Story"!
            <br></br>
            <br></br>
            <h3><strong>Nuts & Bolts</strong></h3>
            
            When an artist makes a post, it is displayed on a community “Color
            Wall” where images are sorted by a single color, multi-color, black,
            or white. Anyone who visits the site can scroll through the color
            wall for an immediate representation of all the artists, filtered by
            color if they choose. Click on the image and you will be shown the
            price, description, external links, and the artist's Color Story
            profile. <br></br>
            <br></br>
            To check it out right now, click above on the color circles, or sign
            up now to get your profile going! We'd LOVE to hear your "Color
            Story," whatever that means to you!
          </Typography>
        </Grid>
      </Grid>
      <br></br>
    </div>
  );
}

export default About;
