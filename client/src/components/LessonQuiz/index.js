import Quiz from 'react-quiz-component';
import React from 'react';
import { history } from '../../quizzes/history';
import { mathematics } from '../../quizzes/math';
import { science } from '../../quizzes/science';
import { space } from '../../quizzes/space';
import { useParams } from 'react-router-dom';

function LessonQuiz() {

    const quizName = useParams();
    const currentQuiz = quizName.quizName;

    const displayQuiz = () => {
        switch (currentQuiz) {
            case 'science':
                return science;
            case 'space':
                return space;
            case 'history':
                return history;
            case 'mathematics':
                return mathematics;
        }
    };

    const completeQuiz = (obj) => {
        const score = Math.round((obj.numberOfCorrectAnswers / obj.numberOfQuestions) * 100);
        console.log(obj);
        console.log(score);

    };

    return (
        <section className='py-2'>
            <Quiz
                quiz={displayQuiz()}
                shuffle={true}
                onComplete={completeQuiz}
            />
        </section>
    );
}

export default LessonQuiz;;