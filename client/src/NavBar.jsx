import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar">
    <span><a href='/dashboard'><i className="far fa-user-circle"></i>Dashboard</a></span>
    <span><a href='/calendar'><i className="far fa-calendar"></i>Gym Calendar</a></span>
    <span><a href='/connections'><i className="far fa-comments"></i>Connections</a></span>
    <span><a href='/friends'><i className="fas fa-user-friends"></i>Friends</a></span>
  </nav>
    );
  }
}

export default NavBar;
