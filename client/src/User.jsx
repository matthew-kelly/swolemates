import React, {Component} from 'react';

class User extends Component {
  
  render() {
    const user_obj = this.props.user_obj;
    return (
      <div className="chat-head-container">
        <div className="chat-head-content">
          <div className="chat-head-pic">
            <img src={user_obj.profile_pic} width="200" alt="profile" />
          </div>
          <h2>{user_obj.first_name} {user_obj.last_name}</h2>
        </div>
      </div>
    );
  }
}

export default User