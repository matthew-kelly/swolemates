import React, {Component} from 'react';
import Dashboard from './Dashboard.jsx'
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  // Switch,
  Link,
  render
} from 'react-router-dom';

class User extends Component {


  render() {
    const user_obj = this.props.user_obj;
    return (
      <Link to ={{pathname: `/profiles/${user_obj.id}`, state: {user_obj} }}>
      <div className="chat-head-container">
        <div className="chat-head-content">
          <div className="chat-head-pic">
            <img src={user_obj.profile_pic} width="200" alt="profile" />
          </div>
          <h2>{user_obj.first_name} {user_obj.last_name}</h2>
        </div>
      </div>
      </Link>
    );
  }
}

export default User