import React, { useState } from "react";

import Auth from "../utils/auth";
import { LOGIN } from "../utils/mutations"
import { Link } from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
            const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
            const token = mutationResponse.data.login.token;
            Auth.login(token);
        } catch (e) {
            console.log(e);
        }

        window.location.replace('/dashboard');
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <div className='login-image'>
            <div className="login-overlay">
                <div className='landing-nav'>
                    <Link to="/" className="landing-nav-title">
                        <h1>Warp <i>Speed</i></h1>
                    </Link>
                </div>
                <div className="container my-1">
                    <Link to="/signup" className="signup-back">
                        <h4>Not a User? Go to Signup &#8594;</h4>
                    </Link>

                    <h2 className="login-title">Login</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="email">Email address:</label>
                            <input
                                placeholder="youremail@test.com"
                                name="email"
                                type="email"
                                id="email"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="pwd">Password:</label>
                            <input
                                placeholder="******"
                                name="password"
                                type="password"
                                id="pwd"
                                onChange={handleChange}
                            />
                        </div>
                        {
                            error ? <div>
                                <p className="error-text" >The provided credentials are incorrect</p>
                            </div> : null
                        }
                        <div className="flex-row flex-end">
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default Login;