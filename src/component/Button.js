import React from 'react'

function Button(props) {
  return (
    <div>
      <button className="Button" onClick={props.clicked}>{props.value}</button>
    </div>
  )
}

export default Button;
