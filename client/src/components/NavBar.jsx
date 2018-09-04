import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    let logoutButton;

    if (this.props.appState.isLoggedIn === true) {
      logoutButton = <span><a className="NavLink" href='/' onClick={this.props.logoutSubmit}><i className="fas fa-sign-out-alt"></i></a></span>;
      return (
        <nav className="navbar">
          <span><Link id="profileIcon"className="NavLink" to={{pathname: '/dashboard'}}><i className="far fa-user-circle"></i></Link></span>
          <span><Link className="NavLink" to={{pathname:'/calendar'}}><i className="far fa-calendar"></i></Link></span>
          <span><Link id="connectionsIcon" className="NavLink" to={{pathname:'/connections'}}><i className="far fa-comments"></i></Link></span>
          <span><Link id="friendsIcon" className="NavLink" to={{pathname:'/friends'}}><i className="fas fa-user-friends"></i></Link></span>
          {logoutButton}
        </nav>
      );
    }
    return false;
  }
}

export default NavBar;
