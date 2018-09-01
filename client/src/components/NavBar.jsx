import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    let logoutButton;

    if (this.props.appState.isLoggedIn === true) {
      logoutButton = <span><a href='/' onClick={this.props.logoutSubmit}><i className="fas fa-sign-out-alt"></i></a></span>;
      return (
        <nav className="navbar">
          <span><Link to={{pathname: '/dashboard'}}>Your Dashboard<i className="far fa-user-circle"></i></Link></span>
          <span><Link to={{pathname:'/calendar'}}>Gym Calendar<i className="far fa-calendar"></i></Link></span>
          <span><Link to={{pathname:'/connections'}}>Notifications<i className="far fa-comments"></i></Link></span>
          <span><Link to={{pathname:'/friends'}}>Friends<i className="fas fa-user-friends"></i></Link></span>
          {logoutButton}
        </nav>
      );
    }
    return false;
  }
}

export default NavBar;
