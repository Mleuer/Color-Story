import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Button,
  TextField,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
  },
  signupButton: {
    backgroundColor: "white",
    color: "black",
    width: "30%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    "&:hover": {
      backgroundColor: "gray",
      color: "black",
    },
  },
  authLink: {
    marginLeft: "10px",
    color: "purple",
    textDecoration: "none",
    fontWeight: "bold",
    "&:hover": {
      color: "#c9c4cc",
    },
  },
}));

function LoginForm(props) {
  const { formObject, handleFormSubmit, handleInputChange } = props;
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Login
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inputField}
                label="Email or Username"
                value={formObject.email}
                name="email"
                onChange={handleInputChange}
                as="input"
                type="text"  
                helperText="enter your email address or username"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inputField}
                label="Password"
                value={formObject.password}
                name="password"
                onChange={handleInputChange}
                as="input"
                type="password"
                helperText="enter your password"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                className={classes.signupButton}
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleFormSubmit}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </form>
        <br></br>
        <Typography variant="body2" component="p" gutterBottom>
          don't have an account yet?
          <Typography
            variant="body2"
            gutterBottom
            className={classes.authLink}
            component={Link}
            to="/signup"
          >
            sign up →
          </Typography>
        </Typography>
      </Container>
    </>
  );
}

export default LoginForm;
