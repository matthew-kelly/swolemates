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
    this.state = this.props.appState
  }
  render() {
  const message_obj = this.props.message_obj;
  if(this.state.current_user.id === message_obj.creator_id){

  }
    return(
      <div>
      <p>{message_obj.content}</p>
      </div>
      );
    }
  }

export default Message;
