import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Calendar from './Calendar.jsx'
import ProfilePictureComponent from './DashboardComponents/ProfilePictureComponent.jsx'
import GymTileComponent from './DashboardComponents/GymTileComponent.jsx'
import CalendarTileComponent from './DashboardComponents/CalendarTileComponent.jsx'
import BioComponent from './DashboardComponents/BioComponent.jsx'
import GoalComponent from './DashboardComponents/GoalComponent.jsx'
import AcitivityGraphComponent from './DashboardComponents/ActivityGraphComponent.jsx'
import ConfirmedEventsComponent from './DashboardComponents/ConfirmedEventsComponent.jsx'
import moment from 'moment';
import NoUpcomingEvents from './DashboardComponents/NoUpcomingEvents';


const API = 'http://localhost:5000/api'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user_data: '',
      goals: '',
      confirmedEvents: '',
      gym:'',
      currentTime: moment(new Date()).format('YYYYMMDDHHmm')
    }
  }

  // Get user
  async getUser(id) {
    const res = await axios.get(`${API}/users/${id}`);
    return await res.data;
  }

  // Get user's goals
  async getGoals(id) {
    const res = await axios.get(`${API}/users/${id}/goals`);
    return await res.data;
  }

  // Get user's confirmed events
  async getConfirmedEvents(id) {
    const res = await axios.get(`${API}/users/${id}/events/confirmed`);
    return await res.data;
  }

  // Get user's gym
  async getGym(id) {
    const res = await axios.get(`${API}/gyms/${id}`);
    return await res.data;
  }

  componentDidMount() {
    this.getUser(this.props.appState.current_user.id)
      .then(res => this.setState({ user_data: res }))
      .catch(err => console.log(err));

    this.getGoals(this.props.appState.current_user.id)
      .then(res => this.setState({ goals: res }))
      .catch(err => console.log(err));

    this.getConfirmedEvents(this.props.appState.current_user.id)
      .then(res => this.setState({ confirmedEvents: res }))
      .catch(err => console.log(err));

    this.getGym(this.props.appState.current_user.gym_id)
      .then(res => this.setState({ gym: res}))
      .catch(err => console.log(err));
  }

  render() {

    if (this.props.appState.isLoggedIn !== true) {
      return <Redirect to='/' />
    }

    const user_data = this.props.appState.current_user;
    const goals_data = this.state.goals;
    const events_data = this.state.confirmedEvents;
    const gym_data = this.state.gym;

    let allGoals;
    let gymName;
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

    if (gym_data){
      gymName = gym_data.map((gym) => {
        return <span key={gym.id}>{gym.name}<br/>{gym.address}</span>
      })
    }

    return (
      <div className="container">
      <ProfilePictureComponent changeUserInformation={this.props.changeUserInformation} appState={this.props.appState} content={user_data.profile_pic}/>
      <GymTileComponent appState={this.props.appState} content={gymName}/>
      <CalendarTileComponent appState={this.props.appState} />
      <BioComponent changeUserInformation={this.props.changeUserInformation} appState={this.props.appState} content={user_data}/>
      <GoalComponent appState={this.props.appState} content={allGoals}/>
      <AcitivityGraphComponent appState={this.props.appState}/>
      {/*<ConfirmedEventsComponent appState={this.props.appState} content={earliestEventFormatted}/>*/}
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



