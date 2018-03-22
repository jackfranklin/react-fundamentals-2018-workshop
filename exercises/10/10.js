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

  renderCounts() {
    return this.state.counts.map((count, index) => {
      return (
        <Count
          key={index}
          count={count}
          onIncrement={this.incrementCount.bind(this, index)}
        />
      )
    })
  }

  render() {
    return <div>{this.renderCounts()}</div>

    // TODO: once you do the above TODO, you'll see a warning in your console
    // where React tells you you're missing a key property. See if you can investigate...
  }
}

const App = () => {
  return <Counter />
}

ReactDOM.render(<App />, document.getElementById('react-root'))
