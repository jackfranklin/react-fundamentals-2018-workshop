import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import AuthContext from './auth-context'

// TODO:
// using <AuthContext.Consumer>, hook this component up to the AuthContext
// and only allow the user to like a post if they are signed in.
export default class UserActions extends Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  }

  state = {
    liked: false,
  }

  like = () => this.setState({ liked: true })

  render() {
    return (
      <div>
        <AuthContext.Consumer>
          {signedIn => {
            return signedIn ? (
              <Fragment>
                <button
                  disabled={this.state.liked}
                  onClick={this.like}
                  onClick={this.like}
                >
                  ❤
                </button>
                {this.state.liked && <span>You've liked this post!</span>}
              </Fragment>
            ) : (
              <span>you need to sign in to like things</span>
            )
          }}
        </AuthContext.Consumer>
      </div>
    )
  }
}
