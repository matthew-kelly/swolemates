import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import Message from './Message'


import 'react-chat-widget/lib/styles.css';

import logo from './logo.svg';

class ChatWindow2 extends Component {

  componentDidMount() {
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
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
    }
    console.log(conversation);

    for(let message of conversation){
      if(message.creator_id === current_user.id){
        this.handleNewUserMessage(message.content)
      }
    }
    //   for(let message of conversation) {
    //     if(message.creator_id === current_user.id && friend.id === message.receiver_id){
    //       this.handleNewUserMessage(message.body)
    //     }
    //   }
      // allMessages = conversation.map((message_obj) => {
      //   return <Message key={message_obj.id} current_user={current_user} friend={friend} message_obj={message_obj} />
      // });
    // }

    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={logo}
          title={`${friend.first_name} ${friend.last_name}`}
          subtitle={""}
        />
      </div>
    );
  }
}

export default ChatWindow2;