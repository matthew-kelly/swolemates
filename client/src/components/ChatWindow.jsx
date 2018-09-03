import React, {Component} from 'react';
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
        <div id='chatWindowHeader'>
          <h3>{`${friend.first_name} ${friend.last_name}`}</h3>
          <h3 id='chatWindowClose'><i onClick={this.props.closeWindow} className="far fa-times-circle"></i></h3>
        </div>
        <div id='chatWindowMessageContainer'>
          {allMessages}
        </div>
        <form onSubmit={this.props.handleUserMessage} data-currentfriend={JSON.stringify(this.props.currentFriend)}>
          <input defaultValue='' name='chatWindowInput' id='chatWindowInput'></input>
        </form>
      </div>
    )
  }
}

export default ChatWindow