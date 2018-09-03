import React, {Component} from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api'


class FriendList extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: ''
    }
  }

  async getFriends(id) {
    const res = await axios.get(`${API}/users/${id}/friends`);
    return await res.data;
  }

  componentDidMount() {
    this.getFriends(this.props.appState.current_user.id)
      .then(res => this.setState({ friends: res }))
      .catch(err => console.log(err));
  }

  render(){
    const friends = this.state.friends;
    let allFriends;
    if (friends){
      allFriends = friends.map((friend) => {
        return <li key={friend.id} data-thisfriend={JSON.stringify(friend)} onClick={this.props.chooseFriend}>{friend.first_name} {friend.last_name}</li>
      });
    }

    return (
      <div>
        <li onClick={this.props.clearChosenFriend}>All Friends</li>
        <li key={this.props.appState.current_user.id} data-thisfriend={JSON.stringify(this.props.appState.current_user)} onClick={this.props.chooseFriend}>Your Events</li>
        <hr />
        {allFriends}
      </div>
    )
  }
}

export default FriendList