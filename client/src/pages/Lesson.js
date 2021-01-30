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
            <h2>Current Course: {lesson.name}</h2>
            <div>
                <span>Intro to Astronomy:</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit harum officia perspiciatis aut repellendus magnam unde aliquam, nihil explicabo ex, earum possimus libero sunt vero? Quisquam dolor saepe voluptatem rem!
                </p>
                <h3>Astronomy 101:</h3>
                <article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos recusandae et repellendus repudiandae quaerat. Consequatur rem autem inventore earum, libero atque, numquam distinctio sit quisquam mollitia, vitae quaerat magni dolor?</article>
            </div>

        </section>
    );
}

export default Lesson;