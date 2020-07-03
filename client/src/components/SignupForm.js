import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  TextField,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  inputField: {
    width: "100%",
  },
  signupButton: {
    backgroundColor: "#4d3b58",
    color: "white",
    width: "20%",
    "&:hover": {
      backgroundColor: "#c9c4cc",
      color: "black",
    },
  },
});

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
                label="First Name"
                value={formObject.firstName}
                name="firstName"
                onChange={handleInputChange}
                as="input"
                type="text"
                helperText="*required"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.inputField}
                label="Last Name"
                value={formObject.lastName}
                name="lastName"
                onChange={handleInputChange}
                as="input"
                type="text"
                helperText="*required"
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
                helperText="*required; enter your email address; must be unique and your own"
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
                helperText="*required; unique and 3-25 characters; letters (upper/lower) and numbers (0-9) only"
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
      </Container>
    </>
  );
}

export default SignupForm;
