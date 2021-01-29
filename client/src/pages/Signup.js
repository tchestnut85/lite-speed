import React, { useState } from 'react';

import Auth from '../utils/auth';
import { CREATE_USER } from '../utils/mutations';
import { useMutation } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

function Signup(props) {
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
        <div>
            <Link to="/login">
                ← Go to Login
            </Link>
            <form id='signup-form' onSubmit={handleFormSubmit}>
                <div className="">
                    <label htmlFor="firstName" className='input-text'>First Name:</label>
                    <input placeholder='Your Name' className='' id="firstName" name='firstName' type='firstName' onChange={handleChange} />
                </div>
                <div className="">
                    <label htmlFor="lastName" className='input-text'>Last Name:</label>
                    <input placeholder='Your Last Name' className='' id="lastName" name='lastName' type='lastName' onChange={handleChange} />
                </div>
                <div className="">
                    <label htmlFor="email" className='input-text'>Email:</label>
                    <input placeholder='Your Email' className='' id="email" name='email' type='email' onChange={handleChange} />
                </div>
                <div className="">
                    <label htmlFor="password" className='input-text'>Password:</label>
                    <input type="password" placeholder='******' className='' id="password" name='password' onChange={handleChange} />
                </div>
                <div className="col">
                    <button type='submit' className="">Signup!</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;