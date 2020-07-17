import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import {
  Home,
  UserPost,
  Profile,
  ColorWall,
  Favorite,
  PublicProfile,
} from "./pages";
import Auth from "./pages/Auth";
import { Navigation, Error, DoesNotExist, Footer } from "./components";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import API from "./utils/API";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  outline: {
    border: "black solid",
    borderRadius: "24px",
    padding: "20px",
    backgroundColor: "#F5F1EE",
  },
  pageContainer: {
    position: "relative",
    minHeight: "100vh"
  },
  contentWrap: {
    paddingBottom: "2.5rem"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  }
});

function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const classes = useStyles();

  function clearError() {
    setError("");
  }

  function loginUser(fullName, email, username, password) {
    const data = {
      fullName: fullName,
      email: email,
      username: username,
      password: password,
    };
    API.Auth.login(data)
      .then((res) => {
        setUser(res.data);
        clearError();
      })
      .catch((err) => {
        setError(
          "Please try again and ensure that input fits the requirements."
        );
      });
  }

  function signupUser(fullName, email, username, password) {
    const data = {
      fullName: fullName,
      email: email,
      username: username,
      password: password,
    };
    API.Auth.signup(data)
      .then((res) => {
        setUser(res.data);
        clearError();
      })
      .catch((err) => {
        setError(
          "Please try again and ensure that input fits the requirements."
        );
      });
  }

  function logoutUser() {
    API.Auth.logout().then((res) => {
      setUser({});
    });
  }

  return (
    <div className={classes.pageContainer}>
      <Router>
        <Grid container className={classes.contentWrap}>
          <Grid item xs={12} style={{ padding: "10px" }}>
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
                      <Home user={user} />
                    </Route>
                    <Route exact path={["/colorwall"]}>
                      <ColorWall user={user} />
                    </Route>
                    <Route path="/users/:id">
                      <PublicProfile user={user} />
                    </Route>
                    <PrivateRoute exact user={user} path={["/userpost"]}>
                      <UserPost user={user} setError={setError} />
                    </PrivateRoute>
                    <PrivateRoute exact user={user} path={["/profile"]}>
                      <Profile user={user} />
                    </PrivateRoute>
                    <PrivateRoute exact user={user} path={["/favorites"]}>
                      <Favorite user={user} />
                    </PrivateRoute>
                    <Route exact path={["/login", "/signup"]}>
                      <Auth
                        user={user}
                        loginUser={loginUser}
                        signupUser={signupUser}
                      />
                    </Route>
                    <Route path="*">
                      <DoesNotExist />
                    </Route>
                  </Switch>
                </Grid>
              </Grid>
            </Container>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            <br></br>
            <hr style={{ border: "1px solid gray", marginBottom: "20px" }}></hr>
            <br></br>
          </Grid>
        </Grid>
        <Grid container className={classes.footer}>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

function PrivateRoute(props) {
  return (
    <>
      {props.user.email ? (
        <Route {...props}>{props.children}</Route>
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

export default App;
