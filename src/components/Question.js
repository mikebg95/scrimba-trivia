import React, { useState } from 'react'
import Answer from './Answer'

const Question = ({ question, correctAnswer, shuffledAnswers, questions, setQuestions, checked }) => {
    const [clickedAnswer, setClickedAnswer] = useState(null)

    const clickedStyle = {
        backgroundColor: "#D6DBF5",
        border: "none"
    }

    const checkedStyle = {
        backgroundColor: clickedAnswer === correctAnswer ? "green" : "red"
    }

    function selectAnswer(answer) {
        setQuestions(prevQuestions => {
            const newQuestions = prevQuestions.map(prevQuestion => {
                if (prevQuestion.question === question) {
                    return {
                        ...prevQuestion,
                        correct: answer === correctAnswer
                    }
                }
                return prevQuestion
            })
            return newQuestions
        })
        setClickedAnswer(answer)
    }

    return (
        <div className="Question">
            <h5>{question}</h5>
            <div className="answers">
                {shuffledAnswers.map(answer => {
                    return (
                        <Answer 
                            answer={answer} 
                            key={answer} 
                            handleClick={() => selectAnswer(answer)}
                            style={
                                answer === clickedAnswer ?
                                checked ? checkedStyle : clickedStyle
                                : null
                            }
                        />
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}

export default Question
