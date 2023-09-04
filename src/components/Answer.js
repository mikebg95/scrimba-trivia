import React from 'react'

const Answer = ({ answer, handleClick, style }) => {
  return (
    <div className="Answer" onClick={handleClick} style={style}>
      <span>{answer}</span>
    </div>
  )
}

export default Answer
