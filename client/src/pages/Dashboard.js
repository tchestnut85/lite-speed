import { Link } from 'react-router-dom';
import React from 'react';

function Dashboard() {
    return (
        <section className='circles-wrapper'>
            <Link to="/courses" className="dashboard-circles courses-circle">
                <i className="fas fa-chalkboard-teacher fa-6x course-icon"></i>
            </Link>

            <Link to="/chat" className="dashboard-circles chat-circle">
                <i className="far fa-comment-dots fa-6x chat-icon"></i>
            </Link>

            <Link to="/profile" className="dashboard-circles profile-circle">
                <i className="fas fa-user-circle fa-6x profile-icon"></i>
            </Link>
        </section>
    );
};

export default Dashboard;