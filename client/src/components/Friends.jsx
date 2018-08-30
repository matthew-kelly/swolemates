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
      messages: '',
      currentFriend: '',
    }
  }

  componentDidMount() {

    this.getFriends(this.props.appState.current_user.id)
    .then(res => this.setState({ friends: res }))
    .catch(err => console.log(err));

    // setTimeout(function(){console.log(this.props.appState.current_user.id)}, 1000)
    this.getMessages(this.props.appState.current_user.id)
    .then(res => this.setState({ friends: this.state.friends, messages: res }))
    .catch(err => console.log(err));
  }


  renderChatWindow = (event) => {
    this.setState({
      currentFriend: JSON.parse(event.target.getAttribute('data-thisfriend'))
    });
    // document.getElementById('chatWindow').style = 'display: fixed'
  }

  closeWindow = () => {
    this.setState({currentFriend: ''})
  }

  // Get all friends
  async getFriends(id) {
    const res = await axios.get(`${API}/users/${id}/friends`);
    return await res.data;
  }

  // Get all messages
  async getMessages(id) {
    const res = await axios.get(`${API}/users/${id}/messages`);
    return await res.data;
  }

  // Write Messsage to DB
  async writeMessagetoDB(creator_id, receiver_id, content) {
    const res = await axios({
      method: 'post',
      url: `${API}/messages`,
      data: {
        creator_id: creator_id,
        receiver_id: receiver_id,
        content: content
      }
    })
    if (res.data.length > 0) {
      return await res.data;
    } else {
      return false;
    }
  }

  handleUserMessage = (event) => {
    event.preventDefault()
    const receiver = (JSON.parse(event.target.getAttribute('data-currentfriend')))
    const messageBody = (event.target.children[0].value)
    this.writeMessagetoDB(this.props.appState.current_user.id, receiver.id, messageBody)
    .then(res => this.setState({ friends: this.state.friends, messages: res }))
    .catch(err => console.log(err));
  }

  // const messages = this.state.messages.concat(newMessage);
  //     this.setState({ messages });

  render() {
    if (this.props.appState.isLoggedIn !== true) {
      return <Redirect to='/' />
    }

    const friends = this.state.friends;
    let chatWindow;
    let allFriends;
    if (friends){
      allFriends = friends.map((user_obj) => {
        return <User key={user_obj.id} renderChatWindow={this.renderChatWindow} user_obj={user_obj} />
      });
    }

    if(this.state.currentFriend){
      chatWindow = <ChatWindow closeWindow={this.closeWindow} currentFriend={this.state.currentFriend} handleUserMessage={this.handleUserMessage} messages={this.state.messages} appState={this.props.appState}/>
    }

    return (
      <div className="chat-head-list">
        {allFriends}
        <div>
        {chatWindow}
        </div>
      </div>
    );
  }
}

export default Friends