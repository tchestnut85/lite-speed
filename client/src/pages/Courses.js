import { QUERY_COURSES } from '../utils/queries';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

function Courses() {
    const { id: coursesId } = useParams();
    console.log('coursesId', coursesId);
    
    const { loading, data } = useQuery(QUERY_COURSES, {
        variables: { _id: coursesId }
    });

    console.log('data:' , data);
    
    const courses = data?.courses || {};
    console.log('courses array', courses);

    if (loading) {
        return <div>Loading Courses...</div>;
    }

    return (
        <>
        <h1 className="page-title">Available Courses:</h1>
            <section className='courses'>
                <div className='course-titles'>
                    {courses.map((course) => (
                        <h3 key={course._id} id={course.title}>
                            {course.title}
                        </h3>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Courses;