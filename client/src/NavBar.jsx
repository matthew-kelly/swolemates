import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  // Switch,
  Link
  // render
} from 'react-router-dom';

class NavBar extends Component {

  render() {
    let logoutButton;

    if (this.props.appState.isLoggedIn === true) {
      logoutButton = <span><a href='/' onClick={this.props.logoutSubmit}><i className="fas fa-sign-out-alt"></i>
Logout</a></span>;
      return (
        <nav className="navbar">
          <span><Link to={{pathname: '/dashboard'}}><i className="far fa-user-circle"></i>Dashboard</Link></span>
          <span><Link to={{pathname:'/calendar'}}><i className="far fa-calendar"></i>Gym Calendar</Link></span>
          <span><Link to={{pathname:'/connections'}}><i className="far fa-comments"></i>Connections</Link></span>
          <span><Link to={{pathname:'/friends'}}><i className="fas fa-user-friends"></i>Friends</Link></span>
          {logoutButton}
        </nav>
      );
    }
    return false;
  }
}

export default NavBar;
