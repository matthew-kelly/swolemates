import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import {NotificationContainer} from 'react-notifications';
import Ticket from './Ticket.jsx'


import User from './User.jsx';
import EventRequest from './EventRequest.jsx';


import 'react-notifications/lib/notifications.css';

const API = 'http://localhost:5000/api'

class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventRequests: '',
      friends: '',
      newFriend: false
    }
  }

  // Get all connections
  // async getConnections(id) {
  //   const res = await axios.get(`${API}/users/${id}/connections`);
  //   return await res.data;
  // }

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

    // console.log(JSON.parse(event.target.getAttribute('data-requester')))
    let request = JSON.parse(event.target.getAttribute('data-requester'))
    let current_user = this.props.appState.current_user;
    let friends = this.state.friends
    let alreadyAFriend = false;
    let eventsArray = this.state.eventRequests

    // let request = JSON.parse(event.target.getAttribute('data-requestrow'))

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

    // console.log('eventsarray', eventsArray)
    console.log('request', request)
    let targetIndex = eventsArray.findIndex(x => x.request_id === request.request_id)
    // console.log(targetIndex)
    eventsArray.splice(targetIndex, 1)
    // console.log('spliced array', eventsArray)

    this.setState({eventRequests: eventsArray})

    console.log('request ID : ', request.request_id)
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


    // const request = JSON.parse(event.target.getAttribute('data-requestrow'));

    // let eventsArray = this.state.eventRequests
    // let targetIndex = eventsArray.findIndex(x => x.request_id===request.id)
    // // console.log(eventsArray)
    // eventsArray.splice(targetIndex, 1)
    // this.setState({eventRequests: eventsArray})
    this.props.createNotification('deleteFriend', request.first_name, request.last_name)

    // // console.log("request,", request)
    // this.deleteEventRequest(request.id)
    //   .catch(err => console.error(err));
  }

  componentDidMount() {
    const current_user = this.props.appState.current_user;

    this.getFriends(current_user.id)
      .then(res => this.setState({ friends: res }))
      .catch(err => console.log(err));

    this.getPendingEventRequests(current_user.id)
      .then(res => this.setState({ eventRequests: res }))
      .catch(err => console.error(err));

    // this.getConnections(current_user.id)
    //   .then(res => this.setState({ connections: res }))
    //   .catch(err => console.error(err));
  }

  render() {
    // if (this.props.appState.isLoggedIn !== true) {
    //   return <Redirect to='/' />
    // }

    // let eventRequests = this.state.eventRequests;

    // console.log(this.state)
    let allEventRequests;
    if(this.state.eventRequests.length > 0) {
      console.log(this.state.eventRequests)

      allEventRequests = this.state.eventRequests;
      allEventRequests = this.state.eventRequests.map((request) => {
        console.log(request);

        if (request.accepted === false ){
          return <Ticket key={request.request_id} deleteRequest={this.deleteThisEventRequest} acceptRequest={this.acceptThisEventRequest} request={request}/>
        } else {
          return;
        }
      }).sort((a, b) => {
        return moment(a.props.request.time_begin).format('YYYYMMDDHHmm') - moment(b.props.request.time_begin).format('YYYYMMDDHHmm');
      })
    }


    // if (eventRequests.length) {
    //   allEventRequests = eventRequests.map((request) => {
    //     return <EventRequest acceptRequest={this.acceptThisEventRequest} eventRequests={this.state.eventRequests} request={request} key={request.id} />
    //   })
    // }
    // console.log('alleventrequests', allEventRequests)

    // if (eventRequests.length) {
    //   allEventRequests = eventRequests.map((request) => {
    //     return <EventRequest acceptRequest={this.acceptThisEventRequest} deleteRequest={this.deleteThisEventRequest} request={request} key={request.id} />;
    //   }).sort((a, b) => {
    //     return moment(a.props.request.time_begin).format('YYYYMMDDHHmm') - moment(b.props.request.time_begin).format('YYYYMMDDHHmm');
    //   })
    // }

    return (
      <div>
        <div className="chat-head-list">
          {/* {allConnections} */}
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