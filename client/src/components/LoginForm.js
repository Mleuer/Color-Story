import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button, TextField, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    inputField: {
        width: "100%"
    },
    signupButton: {
        backgroundColor: "#4d3b58",
        color: "white",
        width: "20%",
        "&:hover": {
            backgroundColor: "#c9c4cc",
            color: "black"
        }
    },
})

function LoginForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;
    const classes = useStyles();

    return (
        <>
            <Paper>
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
                                <Button className={classes.signupButton} variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default LoginForm;