import React, { useState } from "react";
import { useLocation, Redirect } from "react-router-dom";
import SignupForm from "../components/AuthForms/SignupForm";
import LoginForm from "../components/AuthForms/LoginForm";

function Auth(props) {
    const { user, loginUser, signupUser } = props;
    const initialFormState = { fullName: "", email: "", username: "", password: "" };
    const [formObject, setFormObject] = useState(initialFormState)

    const location = useLocation();

    const handleInputChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value });
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        const { fullName, email, username, password } = formObject;
        loginUser(fullName, email, username, password);
        setFormObject(initialFormState);
    }

    const handleSignupSubmit = (event) => {
        event.preventDefault();
        const { fullName, email, username, password } = formObject;
        signupUser(fullName, email, username, password);
        setFormObject(initialFormState);
    }

    return (
        <>
            {user.email ?
                <Redirect to="/profile" />
                :
                location.pathname === "/login" ?
                    <>
                        <LoginForm
                            formObject={formObject}
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleLoginSubmit} />

                    </>
                    :
                    <>
                        <SignupForm
                            formObject={formObject}
                            handleInputChange={handleInputChange}
                            handleFormSubmit={handleSignupSubmit} />
                    </>
            }
        </>
    )
}

export default Auth;