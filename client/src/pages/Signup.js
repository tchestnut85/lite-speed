import React, { useState } from 'react';

import Auth from '../utils/auth';
import { CREATE_USER } from '../utils/mutations';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

function Signup() {
    const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
    const [createUser] = useMutation(CREATE_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();
        const mutationResponse = await createUser({
            variables: {
                firstName: formState.firstName,
                lastName: formState.lastName,
                email: formState.email,
                password: formState.password
            }
        });

        const token = mutationResponse.data.createUser.token;
        Auth.login(token);

        window.location.replace('/dashboard');
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };
    console.log(formState);

    return (
        <div className='signup-image'>
            <div className="signup-overlay">
                <div className='landing-nav'>
                    <Link to="/" className="landing-nav-title">
                        <h1>Lite <i>Speed</i></h1>
                    </Link>
                </div>
                <div className="signup-container my-1">
                    <Link to="/login" className="login-back">
                        <h4> Already a user? Go to Login &#8594;</h4>
                    </Link>

                    <h2 className="signup-title">Signup to start exploring Lite Speed!</h2>

                    <form id='signup-form' onSubmit={handleFormSubmit}>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="firstName">First Name:</label>
                            <input placeholder='Your Name' className='' id="firstName" name='firstName' type='firstName' onChange={handleChange} />
                        </div>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="lastName">Last Name:</label>
                            <input placeholder='Your Last Name' className='' id="lastName" name='lastName' type='lastName' onChange={handleChange} />
                        </div>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="email">Email:</label>
                            <input placeholder='Your Email' className='' id="email" name='email' type='email' onChange={handleChange} />
                        </div>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder='******' className='' id="password" name='password' onChange={handleChange} />
                        </div>
                        <div className="flex-row flex-end">
                            <button type='submit'>Signup!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;