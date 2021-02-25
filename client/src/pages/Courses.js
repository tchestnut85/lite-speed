import { QUERY_ALL_COURSES, QUERY_LESSONS } from '../utils/queries';
import { useMutation, useQuery } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import React from 'react';
import { SAVE_COURSES } from '../utils/mutations';

function Courses() {
    const { loading: courseLoading, data } = useQuery(QUERY_ALL_COURSES);

    const { data: lessonData } = useQuery(QUERY_LESSONS);

    const courses = data?.courses || {};

    const [saveCourses] = useMutation(SAVE_COURSES);

    if (courseLoading) {
        return <div>Loading Courses...</div>;
    }

    const getLesson = (courseId, i) => {
        const lesson = lessonData.lessons.filter(lesson => lesson.courses._id === courseId);
        window.location.replace(`/courses/${lesson[0]._id}`);
    };

    const handleSaveCourse = async (courseId, i, courseTitle) => {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
            return false;
        }
        try {
            await saveCourses({
                variables: { courseId: courseId, courseTitle: courseTitle }
            });
        } catch (err) {
            console.error(err);
        }
        return data;
    };

    return (
        <>
            <h1 className="page-title">
                Available Courses
            </h1>

            <section className='courses-wrapper'>
                <div className='course-titles'>
                    {courses.map((course, i) => (
                        <>
                            <div>
                                <button
                                    key={course._id}
                                    id={course._id}
                                    className="courses-btn"
                                    onClick={() => { getLesson(course._id, i); }}>
                                    <h3 className="course-name">
                                        {course.title}
                                    </h3>
                                </button>
                                <button
                                    className='btn'
                                    key={i}
                                    id={course._id}
                                    onClick={() => { handleSaveCourse(course._id, i, course.title); }}
                                >
                                    <i class="fas fa-arrow-up"></i>  Save this course
                                </button>
                            </div>
                        </>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Courses;