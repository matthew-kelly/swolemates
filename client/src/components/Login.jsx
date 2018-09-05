import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {

  render() {
    if (this.props.appState.isLoggedIn === true) {
      return <Redirect to='/dashboard' />
    }

    return(
      <div className="login-container">
        <div className="homepage-background-image"></div>
        <form onSubmit={this.props.loginSubmit}>
          <input className='inputLogin' name='email' type='email' placeholder='Email'/>
          <input className='inputLogin' name='password' type='password' placeholder='Password'/>
          <button id="button-loginButton">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
