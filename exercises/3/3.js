import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'

// function HelloWorld(props) {
//   return <h1>Hello, {props.name}</h1>
// }

const HelloWorld = props => {
  // TODO: pass through another prop to customise the greeting
  // rather than it always be hardcoded as Hello
  return (
    <h1>
      {props.greeting || 'Hello'}, {props.name}
    </h1>
  )
}

ReactDOM.render(
  <HelloWorld name="Jack" greeting="Hi" />,
  document.getElementById('react-root')
)
