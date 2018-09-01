import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Homepage extends Component {

  render() {
    if (this.props.appState.isLoggedIn !== true) {
      return(
        <nav className="navbar">
          <span><a href='/login'><i className="far fa-user-circle"></i>Login</a></span>
          <span><a href='/register'><i className="far fa-calendar"></i>Register</a></span>
        </nav>
      );
    }
    return <Redirect to='/dashboard' />
  }
}

export default Homepage;
