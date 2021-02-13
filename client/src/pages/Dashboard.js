import { Link } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';
import React from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { useQuery } from '@apollo/react-hooks';

function Dashboard() {

    const { loading, data } = useQuery(QUERY_ME);

    const userData = data?.me || {};
    console.log(userData);

    if (loading) {
        return <div>Loading...</div>
    };

    return (
        <>
            <h1 className="dashboard-title">
                {capitalizeFirstLetter(userData.firstName)} {capitalizeFirstLetter(userData.lastName)}'s Dashboard
            </h1>

            <section className='circles-wrapper'>
                <Link to="/courses" className="dashboard-circles courses-circle">
                    <i className="fas fa-chalkboard-teacher fa-6x course-icon"></i>
                </Link>

                {/* <Link to="/chat" className="dashboard-circles chat-circle">
                    <i className="far fa-comment-dots fa-6x chat-icon"></i>
                </Link> */}

                <Link to="/profile" className="dashboard-circles profile-circle">
                    <i className="fas fa-user-circle fa-6x profile-icon"></i>
                </Link>
            </section>
        </>
    );
};

export default Dashboard;