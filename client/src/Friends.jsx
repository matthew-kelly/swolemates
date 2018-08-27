import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import User from './User.jsx'

const API = 'http://localhost:5000/api'

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: ''
    }
  }
  
  componentDidMount() {
    this.getFriends(this.props.appState.current_user.id)
    .then(res => this.setState({ friends: res }))
    .catch(err => console.log(err));
  }

  // Get all friends
  async getFriends(id) {
    const res = await axios.get(`${API}/users/${id}/friends`);
    return await res.data;
  }

  render() {
    if (this.props.appState.isLoggedIn !== true) {
      return <Redirect to='/' />
    }

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