import { QUERY_ME } from '../utils/queries';
import React from 'react';
import { capitalizeFirstLetter } from '../utils/helpers';
import { useQuery } from '@apollo/react-hooks';

function Grades() {
	const { loading, data } = useQuery(QUERY_ME);
	const userData = data?.me || {};
	const userGrades = userData.grades;

	if (loading) {
		return <div className='page-title'>Loading grades...</div>;
	}

	// Function to filter out odd indexed grades that do not get the correct score saved by the quiz package
	const correctGrades = userGrades.filter((grade, i) => i % 2 !== 0);

	return (
		<section>
			<h2 className='page-title'>
				{capitalizeFirstLetter(userData.firstName)} {capitalizeFirstLetter(userData.lastName)}'s
				Grades
			</h2>
			<div className='flex-row column'>
				<h3>Lesson</h3>
				{correctGrades.map((grades, i) => (
					<div className='flex-row space-around' key={grades._id}>
						<p>{capitalizeFirstLetter(grades.lessonName)}</p>
					</div>
				))}
			</div>

			<div className='flex-row column'>
				<h3>Grade</h3>
				{correctGrades.map(grade => (
					<div className='flex-row space-around' key={grade._id}>
						<span>{grade.grade}</span>
					</div>
				))}
			</div>
		</section>
	);
}

export default Grades;
