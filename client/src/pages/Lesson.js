// import { useDispatch, useSelector } from 'react-redux';

// import { useEffect, useState } from 'react';

import { QUERY_LESSON } from '../utils/queries';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

function Lesson() {
    const { id: lessonId } = useParams();
    console.log(lessonId);

    const { loading, data } = useQuery(QUERY_LESSON, {
        variables: { id: lessonId }
    });
    console.log('data:', data);

    const lesson = data?.lesson || {};
    console.log('lesson:', lesson);

    if (loading) {
        return <div>Loading Lesson.</div>;
    }

    return (
        <section className='lesson'>
            <h2>Current Course: {lesson.courseName.title}</h2>
            <div>
                <span>Intro to {lesson.courseName.title}:</span>
                <p>
                    {lesson.intro}
                </p>
                <h3>{lesson.courseName.title} 101:</h3>
                <article>
                    {lesson.content}
                </article>
                <img alt={lesson.courseName.title} src={lesson.image} className='lesson-img'></img>
            </div>
        </section>
    );
}

export default Lesson;