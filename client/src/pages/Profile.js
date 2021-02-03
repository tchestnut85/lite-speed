import { UPDATE_USER } from '../utils/mutations';
import { React, useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import { QUERY_ME } from '../utils/queries';
import { capitalizeFirstLetter } from '../utils/helpers';

function Profile() {
    const [formState, setFormState] = useState({ email: '', firstName: '', lastName: '', password: '' });

    const { loading, data } = useQuery(QUERY_ME);


    const userData = data?.me || {};
    console.log("userData: ", userData);

    const [updateUser] = useMutation(UPDATE_USER, {
        variables: { _id: userData._id }
    });

    if (loading) {
        return <div>Loading...</div>
    };

    const handleUpdate = async event => {
        console.log('test');
        console.log(formState);
        event.preventDefault();
        const me = await updateUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName
            }
        });
        const user = Auth.loggedIn(me);
        window.location.replace('/profile');
        return user;
    };


    const handleChange = event => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    return (
        <section>
            <h1 className="profile-header">
                Welcome {capitalizeFirstLetter(userData.firstName)} {capitalizeFirstLetter(userData.lastName)}
            </h1>
            <section className="flex-row">
                <div className="settings-container">
                    <div>
                        <h3>Your Settings</h3>
                    </div>
                    <div className="settings-content">
                        <div className="settings-email" id="email-container">
                            <h4>Email:</h4>
                            <div className='flex-row'>
                                <p>{userData.email}</p>
                            </div>
                        </div>
                        <div className="settings-firstName">
                            <h4>First Name:</h4>
                            <p>{capitalizeFirstLetter(userData.firstName)}</p>
                        </div>
                        <div className="settings-lastName">
                            <h4>Last Name:</h4>
                            <p>{capitalizeFirstLetter(userData.lastName)}</p>
                        </div>
                        <div className="settings-password">
                            <h4>Password:</h4>
                            <input type="password" value='placeholder' id='password-input' />
                        </div>
                    </div>
                </div>
                <div className="edit-settings-wrapper">
                    <div>
                        <h3>Edit Settings</h3>
                    </div>
                    <form id='signup-form' onSubmit={handleUpdate}>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="email">Email:</label>
                            <input placeholder='Your Email' className='' id="email" name='email' type='email' onBlur={handleChange} />
                        </div>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="firstName">First Name:</label>
                            <input placeholder='Your Name' className='' id="firstName" name='firstName' type='firstName' onBlur={handleChange} />
                        </div>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="lastName">Last Name:</label>
                            <input placeholder='Your Last Name' className='' id="lastName" name='lastName' type='lastName' onBlur={handleChange} />
                        </div>
                        <div className="flex-row space-between my-2">
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder='******' className='' id="password" name='password' onChange={handleChange} />
                        </div>
                        <div className="flex-row flex-end">
                            <button type='submit'>Edit</button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    );
};

export default Profile;