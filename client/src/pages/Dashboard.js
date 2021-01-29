import { Link } from 'react-router-dom';
import React from 'react';

function Dashboard() {
    return (
        <section className='circles-wrapper'>
            <Link to="/courses" className="dashboard-circles ">
                Courses
            </Link>

            <Link to="/chat" className="dashboard-circles">
                Chat
            </Link>

            <Link to="/profile" className="dashboard-circles">
                profile
            </Link>
        </section>
    );
};

export default Dashboard;