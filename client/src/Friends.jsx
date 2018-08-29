import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import ChatWindow from './ChatWindow.jsx'
import Message from './Message.jsx'


import User from './User.jsx'

const API = 'http://localhost:5000/api'

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: '',
      messages:''
    }
  }

  componentDidMount() {
    this.getFriends(this.props.appState.current_user.id)
    .then(res => this.setState({ friends: res }))
    .catch(err => console.log(err));

    this.getMessages(this.props.appState.current_user.id)
    .then(res => this.setState({ messages: res }))
    .catch(err => console.log(err));
  }


  renderChatWindow(){
    document.getElementById('chatWindow').style = 'display: fixed'
  }

  // Get all friends
  async getFriends(id) {
    const res = await axios.get(`${API}/users/${id}/friends`);
    return await res.data;
  }

  //Get all messages
  async getMessages(id) {
    const res = await axios.get(`${API}/users/${id}/messages`);
    return await res.data;
  }

  render() {
    console.log(this.state.friends)
    console.log(this.state.messages)
    if (this.props.appState.isLoggedIn !== true) {
      return <Redirect to='/' />
    }

    const friends = this.state.friends;
    let allFriends;
    if (friends){
      allFriends = friends.map((user_obj) => {
        return <User key={user_obj.id} renderChatWindow={this.renderChatWindow} user_obj={user_obj} />
      });
    }

    return (
      <div className="chat-head-list">
        {allFriends}
        <div>
          <ChatWindow messages={this.state.messages} appState={this.props.appState}/>
        </div>
      </div>
    );
  }
}

export default Friends