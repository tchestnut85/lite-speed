import { Link } from 'react-router-dom';
import { QUERY_ME } from '../utils/queries';
import React from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_LESSONS } from '../utils/queries';


function Dashboard() {
    const { loading, data } = useQuery(QUERY_ME);
    const { data: lessonData } = useQuery(QUERY_LESSONS);
    console.log(lessonData);

    const userData = data?.me || {};
    // console.log(userData);

    if (loading) {
        return <div>Loading...</div>;
    };

    const getLesson = (courseId) => {
        const lesson = lessonData.lessons.filter(lesson => lesson.courses._id === courseId);
        window.location.replace(`/courses/${lesson[0]._id}`);
    };


    return (
        <>
            <h1 className="dashboard-title page-title">
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
            <div className=''>
                <h2 className='dashboard-title'>My Courses</h2>
                <div className='my-courses'>
                    {userData.savedCourses.map((course) => {
                        console.log(course);
                        return (
                            <div>
                                <button onClick={() => { getLesson(course._id) }} className="dashboard-circles" key={course.title}>
                                    {course.title}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Dashboard;