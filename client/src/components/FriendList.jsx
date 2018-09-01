import React, {Component} from 'react';
import axios from 'axios';
const API = 'http://localhost:5000/api'


class FriendList extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: '',
      selectedFriendEvents: ''
    }
  }

  async getFriends(id) {
    const res = await axios.get(`${API}/users/${id}/friends`);
    return await res.data;
  }

  async getFriendEvents(friend_id) {
    const res = axios.get(`${API}/users/${friend_id}/events`);
    return await res;
  }

  componentDidMount() {
    this.getFriends(this.props.appState.current_user.id)
    .then(res => this.setState({ friends: res }))
    .catch(err => console.log(err));
  }

  // onClick = (event) => {
  //   const friend_id = (JSON.parse(event.target.getAttribute('data-thisfriendid')))
  //   this.getFriendEvents(friend_id)
  //   .then(res => this.setState({ selectedFriendEvents: res.data}))
  //   .then(res => setTimeout(() => {console.log(this.state.selectedFriendEvents)}, 100))
  //   .catch(err => console.log(err));
  // }

  render(){
    const friends = this.state.friends;
    let allFriends;
     if (friends){
      allFriends = friends.map((friend) => {
        return <li key={friend.id} data-thisfriend={JSON.stringify(friend)} onClick={this.props.chooseFriend}>{friend.first_name}</li>
      });
    }
    return(
      <p>{allFriends}</p>
    )
  }
}

export default FriendList