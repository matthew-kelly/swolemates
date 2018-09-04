import React, {Component} from 'react';
import moment from 'moment';
import axios from 'axios';

const API = 'http://localhost:5000/api'


class EventDataModal extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: ''
    }
  }

  async getFriends(id) {
    const res = await axios.get(`${API}/users/${id}/friends`);
    return await res.data;
  }

  componentDidMount() {
    this.getFriends(this.props.currentUser.id)
      .then(res => this.setState({ friends: res }))
      .catch(err => console.log(err));
  }

  render() {
    const showHideClassName = this.props.showEventModal ? "event-data-modal display-block" : "event-data-modal display-none";

    const tags = this.props.tags;
    let eventTags;

    if (tags) {
      eventTags = tags.map((tag) => {
        return <li key={tag.id}>{tag.tag}</li>
      });
    }
    let currentEventRequests = this.props.currentEventRequests;
    let requestToJoinButton = <button className="request-to-join-button event-data-button" onClick={this.props.requestToJoin} data-event={JSON.stringify(this.props.currentEvent)}>Request to Join</button>;

    if (this.props.currentEvent.user_id === this.props.currentUser.id) {
      requestToJoinButton = <p className="event-data-modal-status"><em>This is your event</em></p>;
    }

    if (currentEventRequests) {
      currentEventRequests.forEach(request => {
        if (request.requester_id === this.props.currentUser.id) {
          requestToJoinButton = <p className="event-data-modal-status"><em>Pending Request</em></p>;
        }
      })
    }

    let friendIdArray;
    if (this.state.friends.length > 0) {
      friendIdArray = [];
      this.state.friends.forEach((friend) => {
        friendIdArray.push(friend.id);
      })
    }

    let eventOwner = <h2>Public Event</h2>

    if (this.props.currentEvent.first_name && friendIdArray && friendIdArray.includes(this.props.currentEvent.user_id)) {
      eventOwner = <h2>{this.props.currentEvent.first_name} {this.props.currentEvent.last_name}'s Event</h2>
    }
    if (this.props.currentEvent.user_id === this.props.currentUser.id) {
      eventOwner = <h2>Your Event</h2>
    }

    return (
      <div className={showHideClassName}>
        <div className="event-data-modal-main">
          {eventOwner}
          <h3>Time:</h3>
          <p>{moment(this.props.currentEvent.time_begin).format('MMMM Do YYYY, h:mm a')} - {moment(this.props.currentEvent.time_end).format('h:mm a')}</p>
          <h3>Description:</h3>
          <p>{this.props.currentEvent.description}</p>
          <h3>Tags</h3>
          <ul>
            {eventTags}
          </ul>
          <div id='event-data-modal-button-container'>
          {requestToJoinButton}
          <button className="close-modal-button event-data-button" onClick={this.props.handleClose}>Close</button>
          </div>
        </div>
      </div>
    )
  }

}

export default EventDataModal;
