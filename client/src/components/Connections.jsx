import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import {NotificationContainer, NotificationManager} from 'react-notifications';


import User from './User.jsx';
import EventRequest from './EventRequest.jsx';


import 'react-notifications/lib/notifications.css';

const API = 'http://localhost:5000/api'

class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: '',
      eventRequests: '',
      friends: '',
      newFriend: false
    }
  }

  // Get all connections
  async getConnections(id) {
    const res = await axios.get(`${API}/users/${id}/connections`);
    return await res.data;
  }

  // Get all friends
  async getFriends(id) {
    const res = await axios.get(`${API}/users/${id}/friends`);
    return await res.data;
  }

  // Get all event join requests for current user
  async getPendingEventRequests(user_id) {
    const res = await axios.get(`${API}/notifications/${user_id}/requests`);
    return await res.data;
  }

  // Accept event join request
  async acceptEventRequest(request_id) {
    console.log("accept");
    const res = await axios({
      method: 'post',
      url: `${API}/requests/${request_id}/accept`,
      data: {
        id: request_id,
        accepted: true
      }
    })
    if (res.status === 200) {
      return await res.data;
    } else {
      return false;
    }
  }

  // Delete event join request
  async deleteEventRequest(request_id) {
    console.log("delete");
    const res = await axios({
      method: 'post',
    url: `${API}/requests/${request_id}/delete`,
      data: {
        id: request_id
      }
    })
    if (res.status === 200) {
      return await res.data;
    } else {
      return false;
    }
  }

  // Add a new friend
  async addNewFriend(user_id, friend_id) {
    const res = await axios({
      method: 'post',
      url: `${API}/users/${user_id}/friends/new`,
      data: {
        friend_id: friend_id
      }
    })
    if (res.status === 200) {
      return await res.data;
    } else {
      return false;
    }
  }

  acceptThisEventRequest = (event) => {
    const request = JSON.parse(event.target.getAttribute('data-requestrow'));
    const current_user = this.props.appState.current_user;
    const friends = this.state.friends;
    let alreadyAFriend = false;

    friends.forEach((friend) => {
      if (friend.id === request[0].requester_id) {
        alreadyAFriend = true;
        console.log("already a friend")
      }
    })

    if (!alreadyAFriend) {
      this.addNewFriend(current_user.id, request[0].requester_id)
        .then(res => this.setState({ newFriend: true }))
        .catch(err => console.error(err));
    }

    this.acceptEventRequest(request[0].id)
      .then(res => console.log("accept event request complete: ", res))
      .then(res => window.location.reload(true))
      .catch(err => console.error(err));
  }

  createNotification = (type, first_name, last_name) => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'addEvent':
        NotificationManager.success('Success!', 'Your event is being added to the Calendar');
        break;
      case 'deleteFriend':
        NotificationManager.warning('Request Denied', `${first_name} ${last_name}'s request was denied`, 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
      break;
    }
  };

  deleteThisEventRequest = (event) => {
    const request = JSON.parse(event.target.getAttribute('data-requestrow'));

    // let eventsArray = this.state.eventRequests
    // let targetIndex = eventsArray.findIndex(x => x.request_id==request[0].id)
    // eventsArray.splice(targetIndex, 1)
    // this.setState({eventRequests: eventsArray})
    // console.log(request[0])
    this.createNotification('deleteFriend', request[0].first_name, request[0].last_name)


    this.deleteEventRequest(request[0].id)
      .then(res => window.location.reload(true))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    const current_user = this.props.appState.current_user;

    this.getFriends(current_user.id)
      .then(res => this.setState({ friends: res }))
      .catch(err => console.log(err));

    this.getPendingEventRequests(current_user.id)
      .then(res => this.setState({ eventRequests: res }))
      .catch(err => console.error(err));

    this.getConnections(current_user.id)
      .then(res => this.setState({ connections: res }))
      .catch(err => console.error(err));
  }

  render() {
    if (this.props.appState.isLoggedIn !== true) {
      return <Redirect to='/' />
    }

    if (this.state.newFriend === true) {
      return <Redirect to='/friends' />
    }

    const connections = this.state.connections;


    const eventRequests = this.state.eventRequests;
    let allEventRequests;
    // if (eventRequests.length) {
    if (eventRequests.length) {
      allEventRequests = eventRequests.map((request) => {
        return <EventRequest acceptRequest={this.acceptThisEventRequest} deleteRequest={this.deleteThisEventRequest} request={request} key={request.id} />;
      }).sort((a, b) => {
        return moment(a.props.request.time_begin).format('YYYYMMDDHHmm') - moment(b.props.request.time_begin).format('YYYYMMDDHHmm');
      })
    }

    return (
      <div>
        <div className="chat-head-list">
          <h2>Pending Event Requests</h2>
        </div>
        <div className="event-request-list">
          {allEventRequests}
        </div>
        <NotificationContainer/>
      </div>
    );
  }
}

export default Connections