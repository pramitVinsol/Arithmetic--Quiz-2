import React from 'react'

function Problem(props) {
  return (
    <div>
      <div className='round'>
        <h3>Round: {props.round}</h3>
        <h3>Score: {props.score}</h3>
      </div>
      {props.question}
    </div>
  )
}

export default Problem
