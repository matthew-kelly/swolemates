import React, {Component} from 'react';

class NavBar extends Component {
  render() {
    return (
        <nav className="navbar">
    <span><a href='/profile'><i class="far fa-user-circle"></i>Profile</a></span>
    <span><a href='/calendar'><i class="far fa-calendar"></i>Calendar</a></span>
    <span><a href='/connections'><i class="far fa-comments"></i>Connections</a></span>
    <span><a href='/friends'><i class="fas fa-user-friends"></i>Friends</a></span>
  </nav>
    );
  }
}

export default NavBar;
