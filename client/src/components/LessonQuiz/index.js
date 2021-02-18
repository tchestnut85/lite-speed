import Quiz from 'react-quiz-component';
import React from 'react';
import { quiz } from '../../utils/quiz';

function LessonQuiz() {

    return (
        <section>
            <Quiz quiz={quiz} />
        </section>
    );
}

export default LessonQuiz;