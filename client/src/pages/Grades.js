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

	const gradeAverage = Math.round(
		correctGrades.reduce((total, grade) => total + grade.grade, 0) / correctGrades.length
	);

	return (
		<section>
			<h2 className='page-title'>
				{capitalizeFirstLetter(userData.firstName)} {capitalizeFirstLetter(userData.lastName)}'s
				Grades
			</h2>

			<div className='grade-wrapper'>
				<div className='grade-details'>
					<h3>Lesson</h3>
					<ul>
						{correctGrades.map((grades, i) => (
							<li className='flex-row space-around' key={grades._id}>
								<p>{capitalizeFirstLetter(grades.lessonName)}</p>
							</li>
						))}
					</ul>
				</div>

				<div className='grade-details'>
					<h3>Grade</h3>
					<ul>
						{correctGrades.map(grade => (
							<li className='flex-row space-around' key={grade._id}>
								<span
									style={{ fontWeight: 'bold', color: grade.grade >= 60 ? 'green' : 'red' }}
								>
									{grade.grade}
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='grade-wrapper'>
				<p>
					{capitalizeFirstLetter(userData.firstName)}'s Total Average:{' '}
					<span style={{ fontWeight: 'bold', color: gradeAverage >= 60 ? 'green' : 'red' }}>
						{gradeAverage}%
					</span>
				</p>
			</div>
		</section>
	);
}

export default Grades;
