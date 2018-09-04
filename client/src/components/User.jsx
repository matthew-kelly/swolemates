import React, {Component} from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class User extends Component {

  renderFriendMenu(){
    let user_obj = this.props.user_obj;
    return(
      <div className='friendMenu'>
        <Link className='user-profile-icon' to ={{pathname: `/profiles/${user_obj.id}`, state: {user_obj} }}><i className="far fa-user"></i></Link>
        <span><i data-thisfriend={JSON.stringify(this.props.user_obj)} onClick={this.props.renderChatWindow}className="far chatWindowIcon fa-comments"></i></span>
        <span><i data-thisfriend={JSON.stringify(this.props.user_obj)} onClick={this.props.onDelete} className="far fa-trash-alt"></i></span>
      </div>
    )
  }


  render() {
    let user_obj = this.props.user_obj;
    return (
      <div>
        <div className="chat-head-container">
          <div className="chat-head-content">
            <div className="chat-head-pic">
              <img src={user_obj.profile_pic} width="200" alt="profile" />
            </div>
            <h2 className="friendName">{user_obj.first_name} {user_obj.last_name}</h2>
            {this.renderFriendMenu()}
          </div>
        </div>
      </div>
    );
  }
}

export default User