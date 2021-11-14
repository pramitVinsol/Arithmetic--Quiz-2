import React from 'react'

function Input(props) {
  return (
    props.type === 'checkbox' ?
    <div>
      <label>{props.label}</label>
      <input type={props.type} onChange={props.changed}/>
    </div>
    :
    <div>
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={props.changed}/>
    </div>
  )
}

export default Input
