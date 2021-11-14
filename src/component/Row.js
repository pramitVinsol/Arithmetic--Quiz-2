import React from 'react'

function Row(props) {
  return (
    <tr>
      <td>{props.question}</td>
      <td>{props.response ? props.response : `NA`}</td>
      <td>{props.answer}</td>
    </tr>
  )
}

export default Row
