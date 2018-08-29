import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Message from './Message'

class ChatWindow extends Component {
  constructor(props){
    super(props);
    this.state = this.props.appState
  }

  closeWindow(){
    document.getElementById('chatWindow').style = "display:none"
  }



  render(){
    console.log(this.state)
    const messages = this.props.messages;
    let allMessages;
    if (messages){
      for(let message of messages){
        if(this.state.current_user.id = message.creator_id){

        }
      }
      allMessages = messages.map((message_obj) => {
        return <Message key={message_obj.id} appState={this.props.appState} message_obj={message_obj} />
      });
    }

    return(
      <div id='chatWindow'>
        <span id='chatWindowClose' onClick={this.closeWindow}>x</span>
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