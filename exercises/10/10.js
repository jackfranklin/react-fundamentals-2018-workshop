import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Count extends Component {
  onButtonClick() {
    this.props.onIncrement()
  }

  render() {
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.onButtonClick.bind(this)}>Increment</button>
      </div>
    )
  }
}

Count.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
}

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counts: [0, 0, 0],
    }
  }

  incrementCount(countIndex) {
    this.setState(prevState => {
      const counts = [...prevState.counts]
      counts[countIndex] = prevState.counts[countIndex] + 1

      return { counts: counts }
    })
  }

  render() {
    // TODO: generate the list of count components automatically
    // rather than hardcoding them
    return (
      <div>
        <Count
          count={this.state.counts[0]}
          onIncrement={this.incrementCount.bind(this, 0)}
        />

        <Count
          count={this.state.counts[1]}
          onIncrement={this.incrementCount.bind(this, 1)}
        />
      </div>
    )
  }
}

// TODO: make the counter component take a prop that configures the starting value
// so I could do <Counter start={4} /> to start the counter at 4
// remember to document it with prop types!
const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
