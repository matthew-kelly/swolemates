import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar">
    <span><a href='/profile'>Profile</a></span>
    <span><a href='/calendar'>Calendar</a></span>
    <span><a href='/connections'>Connections</a></span>
    <span><a href='/friends'>Friends</a></span>
  </nav>
    );
  }
}

export default NavBar;
