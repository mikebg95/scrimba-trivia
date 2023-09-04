import React, { useState, useEffect } from 'react'
import Question from './Question'
import { decode } from 'html-entities';

const GamePage = () => {
    const [questions, setQuestions] = useState([])
    const DATA_URL = 'https://opentdb.com/api.php?amount=5&type=multiple'
    const [questionElements, setQuestionElements] = useState([])
    const [checked, setChecked] = useState(false)

    function checkAnswers() {
        let corrects = questions.map(question => question.correct)
        setChecked(true)
    }

    // fetch from api and save in state as custom question objects
    useEffect(() => {
        fetch(DATA_URL).
            then(res => res.json()).
            then(data => {
                const mappedQuestions = data.results.map((questionData, index) => {
                    const { question, correct_answer: correctAnswer, incorrect_answers: incorrectAnswers } = questionData;
                    const shuffledAnswers = [...incorrectAnswers, correctAnswer]
                    shuffledAnswers.sort(() => Math.random() - 0.5);

                    for (const i in shuffledAnswers) {
                        shuffledAnswers[i] = decode(shuffledAnswers[i])
                    }
                    
                    const questionObj = {
                        id: index + 1,
                        question: decode(question),
                        correctAnswer: decode(correctAnswer),
                        shuffledAnswers,
                        correct: null
                    }
                    return questionObj;
                })

                setQuestions(mappedQuestions)
            })
    }, [])

    useEffect(() => {
        const tempElements = questions.map(mappedQuestion => (
            <Question 
                setQuestions={setQuestions}
                questions={questions}
                question={mappedQuestion.question}
                correctAnswer={mappedQuestion.correctAnswer}
                shuffledAnswers={mappedQuestion.shuffledAnswers}
                key={mappedQuestion.id}
                checked={checked}
            />
        ));
        setQuestionElements(tempElements);
    }, [questions]);

    return (
        <div className="GamePage">
            {questionElements}
            <button onClick={checkAnswers}>Check answers</button>
        </div>
    )
}

export default GamePage
