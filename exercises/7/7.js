import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: props.start,
    }
  }

  onButtonClickDecrement() {
    this.setState(prevState => {
      return { count: prevState.count - 1 }
    })
  }
  onButtonClickIncrement() {
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
  }

  render() {
    // TODO: add another button that decrements the count
    return (
      <div>
        <button onClick={this.onButtonClickDecrement.bind(this)}>
          Click to decrement
        </button>
        <p>current count: {this.state.count}</p>
        <button onClick={this.onButtonClickIncrement.bind(this)}>
          Click to increment
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  start: PropTypes.number,
}

Counter.defaultProps = {
  start: 0,
}

// TODO: make the counter component take a prop that configures the starting value
// so I could do <Counter start={4} /> to start the counter at 4
// remember to document it with prop types!
const App = () => {
  return <Counter start={4} />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
