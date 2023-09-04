import React from 'react'

const StartPage = ({ setStarted }) => {
    function startGame() {
        setStarted(true)
    }

    return (
        <div className="StartPage">
            <h1 className="title">Quizzical</h1>
            <span>Prove your intelligence and knowledge and play this awesome Trivia game!</span>
            <button onClick={startGame}>Start quiz</button>
        </div>
    )
}

export default StartPage
