import React from 'react'
import Quiz from './Quiz'

function Quizzes(props) {
  let setKey = 1
  return (
    props.quizSet.map((quiz)=> <Quiz key={setKey++} {...quiz}/>)
  )
}

export default Quizzes