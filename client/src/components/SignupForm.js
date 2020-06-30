import React from "react";
import { Button, TextField, Container, Grid, Paper, Typography } from '@material-ui/core';

function SignupForm(props) {
    const { formObject, handleFormSubmit, handleInputChange } = props;

    return (
        <>
            <Paper>
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
                                    label="First Name"
                                    value={formObject.firstName}
                                    name="firstName"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="text"
                                    placeholder="First Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Last Name"
                                    value={formObject.lastName}
                                    name="lastName"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="text"
                                    placeholder="Last Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    value={formObject.email}
                                    name="email"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="email"
                                    placeholder="Email"
                                    helperText="enter your email address; must be unique and your own"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Username"
                                    value={formObject.username}
                                    name="username"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="text"
                                    placeholder="Username"
                                    helperText="must be unique and 3-25 characters; letters (upper/lower) and numbers (0-9) only"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    value={formObject.password}
                                    name="password"
                                    onChange={handleInputChange}
                                    as="input"
                                    type="password"
                                    placeholder="Password"
                                    helperText="must be at least 8 characters long, and something that you will remember"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" type="submit" onClick={handleFormSubmit}>
                                    Signup
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Container>
            </Paper>
        </>
    )
}

export default SignupForm;