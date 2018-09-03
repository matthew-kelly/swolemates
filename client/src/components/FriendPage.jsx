import React, {Component} from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import ProfilePictureComponent from './DashboardComponents/ProfilePictureComponent.jsx'
import GymTileComponent from './DashboardComponents/GymTileComponent.jsx'
import CalendarTileComponent from './DashboardComponents/CalendarTileComponent.jsx'
import BioComponent from './DashboardComponents/BioComponent.jsx'
import GoalComponent from './DashboardComponents/GoalComponent.jsx'
import AcitivityGraphComponent from './DashboardComponents/ActivityGraphComponent.jsx'
import ConfirmedEventsComponent from './DashboardComponents/ConfirmedEventsComponent.jsx'
import moment from 'moment';
import NoUpcomingEvents from './DashboardComponents/NoUpcomingEvents';


const API = 'http://localhost:5000/api';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user_data: '',
      goals: '',
      gym: '',
      currentTime: moment(new Date()).format('YYYYMMDDHHmm')
    }
  }

  async getGym(id) {
    const res = await axios.get(`${API}/gyms/${id}`);
    return await res.data;
  }

  async getConfirmedEvents(id) {
    const res = await axios.get(`${API}/users/${id}/events/confirmed`);
    return await res.data;

  }

  componentWillMount() {
    this.getGoals(this.props.location.state.user_obj.id)
    .then(res => this.setState({ goals: res }))
    .catch(err => console.log(err));

    this.getGym(this.props.location.state.user_obj.gym_id)
      .then(res => this.setState({ gym: res}))
      .catch(err => console.log(err));


    this.getConfirmedEvents(this.props.location.state.user_obj.id)
    .then(res => this.setState({ confirmedEvents: res }))
    .catch(err => console.log(err));
  }

  // Get user's goals
  async getGoals(id) {
    const res = await axios.get(`${API}/users/${id}/goals`);
    return await res.data;
  }

  render() {
    if (this.props.appState.isLoggedIn !== true) {
      return <Redirect to='/' />
    }

    const events_data = this.state.confirmedEvents;
    const user_data = this.props.location.state.user_obj;
    const goals_data = this.state.goals;
    let gym;

    if (this.state.gym){
      gym = this.state.gym.map((gym) => {
        return <span key={gym.id}>{gym.name}<br/>{gym.address}</span>
      })
    } else {
      gym = '';
    }

    let allGoals;
    if (goals_data){
      allGoals = goals_data.map((goal) => {
        return <li key={goal.id}>{goal.goal}</li>
      });
    }

    let noUpcomingEvents = <li><p>No upcoming events</p></li>;
    let eventsListFormatted = '';

    if (events_data && events_data.length > 0) {
      noUpcomingEvents = '';
      eventsListFormatted = events_data.map((event) => {
        if (moment(event.time_end).format('YYYYMMDDHHmm') > this.state.currentTime) {
          return <ConfirmedEventsComponent key={event.request_id} content={event} />
        } else {
          return;
        }
      }).sort((a, b) => {
        return moment(a.props.content.time_begin).format('YYYYMMDDHHmm') - moment(b.props.content.time_begin).format('YYYYMMDDHHmm')
      })
    }


    if (noUpcomingEvents) {
      eventsListFormatted = <NoUpcomingEvents content={noUpcomingEvents}/>
    }

    return (
      <div className="container">
      <ProfilePictureComponent changeUserInformation={this.props.changeUserInformation} appState={this.props.appState} content={user_data.profile_pic}/>
      <GymTileComponent appState={this.props.appState} content={gym}/>
      <CalendarTileComponent appState={this.props.appState} content={user_data}/>
      <BioComponent changeUserInformation={this.props.changeUserInformation} appState={this.props.appState} content={user_data}/>
      <GoalComponent appState={this.props.appState} content={allGoals}/>
      <AcitivityGraphComponent appState={this.props.appState}/>
              <div id="confirmed-events" className="tile tileBig">
         <div className="dashboardComponentHeader">
           <span>Upcoming Events</span>
        </div>
        <div className="dashboardComponentContent">
          <ul>
            {eventsListFormatted}
          </ul>
          </div>
        </div>

      </div>
    );
  }
}

export default Dashboard;

