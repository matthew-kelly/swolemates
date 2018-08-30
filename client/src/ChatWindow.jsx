import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Message from './Message'

class ChatWindow extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const messages = this.props.messages;
    const friend = this.props.currentFriend;
    const current_user = this.props.appState.current_user;
    let allMessages;
    let conversation = [];
    if (messages){
      for(let message of messages){
        if((current_user.id === message.creator_id && friend.id === message.receiver_id) || (current_user.id === message.receiver_id && friend.id === message.creator_id)){
          conversation.push(message);
        }
      }
      allMessages = conversation.map((message_obj) => {
        return <Message key={message_obj.id} current_user={current_user} friend={friend} message_obj={message_obj} />
      });
    }

    return(
      <div id='chatWindow'>
        <span id='chatWindowClose' onClick={this.props.closeWindow}>x</span>
        <div id='chatWindowMessageContainer'>
          <p>{this.props.appState.current_user.first_name}</p>
          {allMessages}
        </div>
        <textarea id='chatWindowTextArea'></textarea>
      </div>
    )
  }
}

export default ChatWindow