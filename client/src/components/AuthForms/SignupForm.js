import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Container,
  Grid,
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
      color: "white",
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

function SignupForm(props) {
  const { formObject, handleFormSubmit, handleInputChange } = props;
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm">
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Signup
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inputField}
                label="Full Name"
                value={formObject.fullName}
                name="fullName"
                onChange={handleInputChange}
                as="input"
                type="text"
                helperText="*optional; will be made public"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inputField}
                label="Email Address"
                value={formObject.email}
                name="email"
                onChange={handleInputChange}
                as="input"
                type="email"
                helperText="*required; must be unique and will be made public"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inputField}
                label="Username"
                value={formObject.username}
                name="username"
                onChange={handleInputChange}
                as="input"
                type="text"
                helperText="*required; must be unique and 3-25 characters; letters (upper/lower) and numbers (0-9) only"
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
                helperText="*required; must be at least 8 characters, and something that you will remember"
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
                Signup
              </Button>
            </Grid>
          </Grid>
        </form>
        <br></br>
        <Typography variant="body2" component="p" gutterBottom>
          already have an account?
          <Typography
            variant="body2"
            gutterBottom
            className={classes.authLink}
            component={Link}
            to="/login"
          >
            log in →
          </Typography>
        </Typography>
      </Container>
    </>
  );
}

export default SignupForm;
