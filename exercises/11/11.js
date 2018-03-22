import '../common.css'

import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MakeThingsBlue = props => {
  return <div style={{ color: 'blue' }}>{props.children}</div>
}

MakeThingsBlue.propTypes = {
  children: PropTypes.node.isRequired,
}

const App = props => {
  return <MakeThingsBlue>{props.children}</MakeThingsBlue>
}

ReactDOM.render(
  <App children={<p>Hello</p>} />,
  document.getElementById('react-root')
)
