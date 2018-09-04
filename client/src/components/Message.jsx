import React, {Component} from 'react';

class Message extends Component {

  render() {
    const message_obj = this.props.message_obj;
    if(this.props.current_user.id === message_obj.creator_id){
      return(
        <div className='message outgoingMessage'>
          <p>{message_obj.content}</p>
        </div>
        )
    } else {
      return(
        <div className="message incomingMessage">
        <p>{message_obj.content}</p>
        </div>
        );
      }
    }
  }

export default Message;
