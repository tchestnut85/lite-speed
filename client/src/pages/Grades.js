import { QUERY_ME } from '../utils/queries';
import React from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { useQuery } from '@apollo/react-hooks';

function Grades() {

    const { loading, data } = useQuery(QUERY_ME);
    const userData = data?.me || {};

    console.log(userData.grades);

    if (loading) {
        return <div className='page-title'>Loading grades...</div>;
    }

    const isOdd = (i) => {
        if (i % 2 !== 0) {
            return true;
        }
        return false;
    };

    return (
        <section>
            <h2 className='page-title'>{capitalizeFirstLetter(userData.firstName)} {capitalizeFirstLetter(userData.lastName)}'s Grades</h2>
            <div className='flex-row column'>
                <h3>Lesson</h3>
                {/* {userData.grades.map((grade) => (
                    <div className='flex-row space-around' key={grade._id}>
                        <p>{capitalizeFirstLetter(grade.lessonName)}</p>
                    </div>
                ))} */}
                {/* {userData.grades.filter((grade, i) => i % 2 !== 0(
                    <div className='flex-row space-around' key={grade._id}>
                        <p>{capitalizeFirstLetter(grade.lessonName)}</p>
                    </div>
                ))} */}
                {userData.grades.forEach(function (grades, i) {
                    return (
                        <div className='flex-row space-around' key={grades._id}>
                            <p>{capitalizeFirstLetter(grades.lessonName)}</p>
                        </div>
                    );
                })}
            </div>

            <div className='flex-row column'>
                <h3>Grade</h3>
                {userData.grades.map((grade) => (
                    // console.log(grade);
                    < div className='flex-row space-around' key={grade._id} >
                        <span>{grade.grade}</span>
                    </div>
                ))}
            </div>
        </section >
    );
}

export default Grades;