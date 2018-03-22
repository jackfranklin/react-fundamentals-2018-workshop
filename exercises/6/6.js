import '../common.css'

import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'

const AskQuestion = props => {
  return <p>{props.question}</p>
}

AskQuestion.propTypes = {
  question: PropTypes.string.isRequired,
}

const HelloWorld = props => {
  // TODO: make the HelloWorld component render the <AskQuestion /> component
  return (
    <div>
      <AskQuestion question="How is your day?" />
      <h1>
        {props.greeting}, {props.name}
      </h1>
    </div>
  )
}
HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.oneOf(['Hello', 'Hi']).isRequired,
}

const App = () => {
  return <HelloWorld greeting="Hello" name="Jack" />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
