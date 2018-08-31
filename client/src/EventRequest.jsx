import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const API = 'http://localhost:5000/api'

class EventRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestRow: ''
    }
  }

  // Get request row
  async getRequestRow(event_id, requester_id) {
    const res = await axios.get(`${API}/requests/${event_id}/requester/${requester_id}`);
    return await res.data;
  }

  componentWillMount() {
    this.getRequestRow(this.props.request.event_id, this.props.request.requester_id)
    .then(res => this.setState({ requestRow: res }))
    .catch(err => console.error(err));
  }

  render() {
    const request = this.props.request;
    const user_obj = request;

    if (!request.accepted) {
      return (
        <div className="event-request-container">
          <div className="event-request-content">
            <Link to ={{pathname: `/profiles/${request.requester_id}`, state: {user_obj} }}>
              <h2>{moment(request.time_begin).format('MMMM Do, YYYY')}</h2>
              <h3>{moment(request.time_begin).format('h:mm a')} - {moment(request.time_end).format('h:mm a')}</h3>
            </Link>
            <div className="event-request-body">
              <div className="event-request-pic">
                <img src={request.profile_pic} width="200" alt="profile" />
              </div>
              <Link to ={{pathname: `/profiles/${request.requester_id}`, state: {user_obj} }}>
                <h3>{request.first_name} {request.last_name}</h3>
              </Link>
              <div className="request-buttons">
                <span data-requestrow={JSON.stringify(this.state.requestRow)} className="accept-request" onClick={this.props.acceptRequest}>&#10004;</span>
                <span data-requestrow={JSON.stringify(this.state.requestRow)} className="delete-request" onClick={this.props.deleteRequest}>&#10005;</span>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      return false;
    }
  }
}

export default EventRequest