import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const API = 'http://localhost:5000/api'


class Ticket extends Component {
  constructor(props){
    super(props)
  }

  render(){
    let user_obj = this.props.request;
    return(
        <div className="event-request-container">

          <div className="event-request-content">
          <Link to ={{pathname: `/profiles/${this.props.request.requester_id}`, state: {user_obj} }}>
              <h2>{moment(this.props.request.time_begin).format('MMMM Do, YYYY')}</h2>
              <h3>{moment(this.props.request.time_begin).format('h:mm a')} - {moment(this.props.request.time_end).format('h:mm a')}</h3>
              </Link>
            <div className="event-request-body">

              <div className="event-request-pic">
                <img src={this.props.request.profile_pic} width="200" alt="profile" />
              </div>
               <Link to ={{pathname: `/profiles/${this.props.request.requester_id}`, state: {user_obj} }}>
                <h3>{this.props.request.first_name} {this.props.request.last_name}</h3>
              </Link>
              <div className="request-buttons">
              <span  data-requester={JSON.stringify(this.props.request)} className="accept-request" onClick={this.props.acceptRequest}>&#10004;</span>
                <span data-requester={JSON.stringify(this.props.request)} className="delete-request" onClick={this.props.deleteRequest}>&#10005;</span>
              </div>

            </div>

          </div>

        </div>

    )
  }
}

export default Ticket