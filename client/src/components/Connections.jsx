import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import {NotificationContainer} from 'react-notifications';
import Ticket from './Ticket.jsx'


import 'react-notifications/lib/notifications.css';

const API = 'http://localhost:5000/api'

class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventRequests: '',
      friends: '',
      newFriend: false,
      currentTime: moment(new Date()).format('YYYYMMDDHHmm')

    }
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
      method: 'put',
      url: `${API}/requests/${request_id}/accept`,
      data: {
        request_id: request_id,
        accepted: true
      }
    })
    return await res.data
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

  wait = (time) => {
    setTimeout(()=>{return true;}, time)
  }

  acceptThisEventRequest = (event) => {

    let request = JSON.parse(event.target.getAttribute('data-requester'))
    let current_user = this.props.appState.current_user;
    let friends = this.state.friends
    let alreadyAFriend = false;
    let eventsArray = this.state.eventRequests


    for(let friend of friends){
      if(friend.id === request.requester_id){
        alreadyAFriend = true;
      }
    }

    if(!alreadyAFriend) {
    this.props.createNotification('addFriend', request.first_name, request.last_name)
      this.addNewFriend(current_user.id, request.requester_id)
        .then(res => this.setState({ newFriend: true }))
        .catch(err => console.error(err));
    }

    let targetIndex = eventsArray.findIndex(x => x.request_id === request.request_id)
    eventsArray.splice(targetIndex, 1)

    this.setState({eventRequests: eventsArray})

    this.props.createNotification('eventAccepted', request.first_name, request.last_name)
    this.acceptEventRequest(request.request_id)
  }

  deleteThisEventRequest = (event) => {

    let request = JSON.parse(event.target.getAttribute('data-requester'))
    let eventsArray = this.state.eventRequests
    let targetIndex = eventsArray.findIndex(x => x.request_id === request.request_id)
    eventsArray.splice(targetIndex, 1)
    this.setState({eventRequests: eventsArray})

    this.deleteEventRequest(request.request_id)
      .catch(err => console.error(err));

    this.props.createNotification('deleteFriend', request.first_name, request.last_name)
  }

  componentDidMount() {
    const current_user = this.props.appState.current_user;

    this.getFriends(current_user.id)
      .then(res => this.setState({ friends: res }))
      .catch(err => console.log(err));

    this.getPendingEventRequests(current_user.id)
      .then(res => this.setState({ eventRequests: res }))
      .catch(err => console.error(err));

  }

  render() {
    let allEventRequests;
    if(this.state.eventRequests.length > 0) {

      allEventRequests = this.state.eventRequests;
      allEventRequests = this.state.eventRequests.map((request) => {

        if (request.accepted === false && moment(request.time_end).format('YYYYMMDDHHmm') > this.state.currentTime){
          return <Ticket key={request.request_id} deleteRequest={this.deleteThisEventRequest} acceptRequest={this.acceptThisEventRequest} request={request}/>
        } else {
          return;
        }
      }).sort((a, b) => {
        return moment(a.props.request.time_begin).format('YYYYMMDDHHmm') - moment(b.props.request.time_begin).format('YYYYMMDDHHmm');
      })
    }

    return (
      <div>
        <div className="chat-head-list">
          <h2 className="chat-head-list-title">Pending Event Requests</h2>
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