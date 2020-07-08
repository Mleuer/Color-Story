import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Home, UserPost, Profile, ColorWall } from "./pages";
import Auth from "./pages/Auth"
import { Navigation, Error } from "./components";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import API from './utils/API';
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
  outline: {
    border: "black solid",
    borderRadius: "24px",
    padding: "20px",
  }
});

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("")
  const classes = useStyles();

  function loginUser(firstName, lastName, email, username, password) {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password
    }
    API.Auth.login(data).then(res => {
      setUser(res.data)

    })
  }

  function signupUser(firstName, lastName, email, username, password) {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password
    }
    API.Auth.signup(data).then(res => {
      setUser(res.data)
    }).catch(err => {
      setError("Please try again and ensure that input fits the requirements.")
    })
  }

  function logoutUser() {
    API.Auth.logout().then(res => {
      setUser({});
    })
  }

  function clearError() {
    setError("");
  }

  return (
    <>
      <Router>
        <Container className={classes.outline} maxWidth="md">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Navigation user={user} logoutUser={logoutUser} />
            </Grid>
            <Grid item xs={12}>
              {error && <Error error={error} clearError={clearError} />}
            </Grid>
            
            <Grid item xs={12}>
              <Switch>
                <Route exact path={["/", "/home"]}>
                  <Home user={user}/>
                </Route>
                <Route exact path={["/colorwall"]}>
                  <ColorWall user={user}/>
                </Route>
                <PrivateRoute exact user={user} path={["/userpost"]}>
                  <UserPost user={user} setError={setError}/>
                </PrivateRoute>
                <PrivateRoute exact user={user} path={["/profile"]}>
                  <Profile user={user} />
                </PrivateRoute>
                <Route exact path={["/login", "/signup"]}>
                  <Auth
                    user={user}
                    loginUser={loginUser}
                    signupUser={signupUser}
                  />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </Router>
    </>
  );
}

function PrivateRoute(props) {
  return (
    <>
      {props.user.email ?
        <Route {...props}>
          {props.children}
        </Route>
        :
        <Redirect to="/login" />
      }
    </>
  )
}

export default App;
