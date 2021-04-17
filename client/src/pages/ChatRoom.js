import React from 'react';
import { Link } from 'react-router-dom';


const ChatRoom = () => {
    return (
        <div>
            <Link to="/courses" className="dashboard-circles courses-circle">
                {/* <i className="fas fa-chalkboard-teacher fa-6x course-icon"></i> */}
            </Link>
        </div>
    );
};

export default ChatRoom;