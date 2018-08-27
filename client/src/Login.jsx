import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  render() {
    if (this.props.appState.isLoggedIn === true) {
      return <Redirect to='/dashboard' />
    }

    return(
      <div className="tile">
        <form onSubmit={this.props.loginSubmit}>
          <input name='email' type='email' placeholder='email'/>
          <input name='password' type='password' placeholder='password'/>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
