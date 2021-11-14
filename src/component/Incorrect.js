import React from 'react'
import Row from './Row';

function Incorrect(props) {
  const Problems = props.response.filter(problem => problem.response !== problem.answer);
  return (
    <table>
      <h2>Incorrect Answers</h2>
      <tr>
        <th>Question</th>
        <th>Response</th>
        <th>Answer</th>
      </tr>
      {Problems.map(problem => <Row key={problem.question} {...problem} />)}
    </table>
  )
}

export default Incorrect;