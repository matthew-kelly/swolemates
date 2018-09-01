import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  // Switch,
  Link,
  render
} from 'react-router-dom';

class Message extends Component {
  constructor(props){
    super(props)
  }
  render() {
    const message_obj = this.props.message_obj;
    if(this.props.current_user.id === message_obj.creator_id){
      return(
        <div className='outgoingMessage'>
          <p>{message_obj.content}</p>
        </div>
        )
    } else {
      return(
        <div className="incomingMessage">
        <p>{message_obj.content}</p>
        </div>
        );
      }
    }
  }

export default Message;