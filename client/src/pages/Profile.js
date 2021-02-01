import { QUERY_ME } from '../utils/queries';
import { React, useState } from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { UPDATE_USER } from '../utils/mutations';

function Profile() {
    const [formState, setFormState] = useState();

    const { loading, data } = useQuery(QUERY_ME);

    const [updateUser] = useMutation(UPDATE_USER);

    const userData = data?.me || {};
    console.log("userData: ", userData);

    if (loading) {
        return <div>Loading...</div>
    };

    const handleUpdate = async event => {
        event.preventDefault();

        const mutationResponse = await updateUser({
            variables: {
                email: formState.email,
                password: formState.password,
                firstName: formState.firstName,
                lastName: formState.lastName
            }
        });
    };

    const createInput = () => {
        const container = document.querySelector("#email-container");
        const emailInput = document.createElement('input');
        emailInput.setAttribute('for', 'email-radio');
        container.appendChild(emailInput);
    };

    return (
        <section>
            <h1 className="profile-header">
                {capitalizeFirstLetter(userData.firstName)} {capitalizeFirstLetter(userData.lastName)}'s Profile
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
                                <input type="checkbox" id="email-radio" className="email-radio" onClick={createInput} />
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
            </section>
        </section>
    );
};

export default Profile;