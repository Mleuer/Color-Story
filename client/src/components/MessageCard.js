import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: "3px solid darkred",
    backgroundColor: "pink",
    boxShadow: "1px 1px 8px gray",
    margin: "20px 0px",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "darkred",
  },
  date: {
    fontSize: 15,
    marginBottom: 12,
    color: "black",
  },
  divider: {
    border: "1px solid darkred",
    borderRadius: "5px",
  },
});

function MessageCard(props) {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            Username
          </Typography>
          <Typography className={classes.date} color="textSecondary">
            date posted (mm/dd/yyyy)
          </Typography>
          <hr className={classes.divider}></hr>
          <Typography variant="body2" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            vestibulum efficitur vestibulum. Ut placerat iaculis tristique.
            Morbi aliquet fringilla diam congue semper. Maecenas eu velit
            luctus, auctor metus vitae, tincidunt enim. Integer et quam felis.
            Donec vel accumsan diam. Sed tincidunt a orci ut efficitur. Morbi a
            metus eget risus interdum pellentesque a vitae turpis. Pellentesque
            lacus urna, consequat vitae massa vitae, hendrerit tempor libero.
            Nullam sit amet ante quis quam condimentum pulvinar. Nam dui nulla,
            mattis a elementum nec, auctor id arcu. Duis interdum elit at
            tincidunt pharetra. Quisque vel varius diam, nec feugiat lorem. In
            hac habitasse platea dictumst. Etiam convallis urna eu vehicula
            scelerisque.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default MessageCard;
