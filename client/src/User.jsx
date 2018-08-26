import React, {Component} from 'react';

class User extends Component {
  
  render() {
    const user_obj = this.props.user_obj;
    return (
      <div>
        <img src={user_obj.profile_pic} width="200" alt="profile" />
        <p>{user_obj.first_name} {user_obj.last_name}</p>
        <p>{user_obj.bio}</p>

      </div>
    );
  }
}

export default User