import React, {Component} from 'react';
import axios from 'axios';

import User from './User.jsx'

const API = 'http://localhost:5000/api'

class Friends extends Component {
  constructor() {
    super();
    this.state = {
      friends: '',
      current_user: 1
    }
  }
  
  componentWillMount() {
    this.getFriends(this.state.current_user)
    .then(res => this.setState({ friends: res }))
    .catch(err => console.log(err));
  }

  // Get all friends
  async getFriends(id) {
    const res = await axios.get(`${API}/users/${id}/friends`);
    return await res.data;
  }

  render() {
    const friends = this.state.friends;
    let allFriends;
    if (friends){
      allFriends = friends.map((user_obj) => {
        return <User key={user_obj.id} user_obj={user_obj} />
      });
    }

    return (
      <div className="chat-head-list">
        {allFriends}
      </div>
    );
  }
}

export default Friends