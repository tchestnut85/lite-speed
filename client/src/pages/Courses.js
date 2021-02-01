import { QUERY_ALL_COURSES, QUERY_LESSONS } from '../utils/queries';

import React from 'react';
import { useQuery } from '@apollo/react-hooks';

function Courses() {

    const { loading: courseLoading, data: courseData } = useQuery(QUERY_ALL_COURSES);

    const { data: lessonData } = useQuery(QUERY_LESSONS);
    // console.log('lessonData:', lessonData.lessons[0].courses._id);
    console.log('lessonData:', lessonData);

    const courses = courseData?.courses || {};
    // console.log('courses array', courses);

    if (courseLoading) {
        return <div>Loading Courses...</div>;
    }

    const getLesson = (courseId, i) => {
        const lesson = lessonData.lessons.filter(lesson => lesson.courses._id === courseId);
        console.log(courseId);
        console.log('lesson:', lesson);
        console.log('i:', i);
        window.location.replace(`/courses/${lesson[0]._id}`);
    };

    return (
        <>
            <h1 className="page-title">Available Courses:</h1>
            <section className='courses'>
                <div className='course-titles'>
                    {courses.map((course, i) => (
                        <button
                            key={course._id}
                            id={course._id}
                            onClick={() => { getLesson(course._id, i); }}>
                            <h3>
                                {course.title}
                            </h3>
                        </button>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Courses;