import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'

const HelloWorld = props => {
  return (
    <h1>
      Hello, {props.name}, {props.age}, {props.colour}
    </h1>
  )
}

const bunchOfProps = {
  name: 'Jack',
  age: 25,
  colour: 'blue',
}

// TODO: use the spread operator to pass through all the object keys as prop
ReactDOM.render(
  <HelloWorld
    name={bunchOfProps.name}
    age={bunchOfProps.age}
    colour={bunchOfProps.colour}
  />,
  document.getElementById('react-root')
)
