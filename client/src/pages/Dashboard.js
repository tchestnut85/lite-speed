import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { QUERY_LESSONS } from '../utils/queries';
import { QUERY_ME } from '../utils/queries';
import { REMOVE_COURSE } from '../utils/mutations';
import { capitalizeFirstLetter } from '../utils/helpers';

function Dashboard() {
    const { loading, data } = useQuery(QUERY_ME);
    const { data: lessonData } = useQuery(QUERY_LESSONS);
    console.log(lessonData);

    const userData = data?.me || {};
    console.log(userData);
    const [isSavedCourses, setSavedCourses] = useState(userData.savedCourses);

    const [removeCourse] = useMutation(REMOVE_COURSE);

    if (loading) {
        return <div>Loading...</div>;
    };

    const getLesson = (courseId) => {
        const lesson = lessonData.lessons.filter(lesson => lesson.courses._id === courseId);
        window.location.replace(`/courses/${lesson[0]._id}`);
    };

    const handleRemoveCourse = async (courseId) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }
        try {
            await removeCourse({
                variables: { courseId: courseId }
            });
        } catch (err) {
            console.error(err);
        }
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

                {/* <Link to="/grades" className="dashboard-circles grades-circle">
                    <i className="fas fa-file-alt fa-6x grades-icon"></i>
                </Link> */}

            </section>
            {isSavedCourses && (
                <div>
                    <h2 className='dashboard-title'>My Courses</h2>
                    <div className='my-courses'>
                        {userData.savedCourses.map((course) => {
                            console.log(course);
                            return (
                                <div>
                                    <button onClick={() => { getLesson(course._id); }} className="dashboard-circles" key={course.title}>
                                        <p className='myCourses'>
                                            {course.title}
                                        </p>
                                    </button>
                                    <button
                                        className='btn'
                                        key={course._id}
                                        id={course._id}
                                        onClick={() => { handleRemoveCourse(course._id); }}
                                    >
                                        <i class="fas fa-arrow-up"></i> Remove this course
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default Dashboard;