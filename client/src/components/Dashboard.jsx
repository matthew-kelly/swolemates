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


const API = 'http://localhost:5000/api'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user_data: '',
      goals: '',
      confirmedEvents: '',
      gym:''
    }
  }

  componentWillMount() {
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

    let earliestEventFormatted = <li><p>No upcoming events</p></li>;
    if (events_data.length > 0) {
      let earliestEvent = events_data[0];
      events_data.forEach(event => {
        if (moment(event.time_begin).format('YYYYMMDDHHmm') < moment(earliestEvent.time_begin).format('YYYYMMDDHHmm')) {
          earliestEvent = event;
        }
      })
      earliestEventFormatted = <li><p>{moment(earliestEvent.time_begin).format('MMMM Do YYYY, h:mm a')} - {moment(earliestEvent.time_end).format('h:mm a')}</p><p>{earliestEvent.first_name} {earliestEvent.last_name}</p></li>
    }

    if (gym_data){
      gymName = gym_data.map((gym) => {
        return <span key={gym.id}>{gym.name}</span>
      })
    }

    return (
      <div className="container">
      <ProfilePictureComponent appState={this.props.appState} content={user_data.profile_pic}/>
      <GymTileComponent content={gymName}/>
      <CalendarTileComponent />
          <div id="calendarDashboard3" className="tile tileSmall">
            <i className="far fa-calendar"></i>
            <h4 className='dashboardSubtitle'>Calendar</h4>
          </div>
      <BioComponent content={user_data}/>
      <GoalComponent content={allGoals}/>
      <AcitivityGraphComponent/>
      <ConfirmedEventsComponent content={earliestEventFormatted}/>
      </div>
    );
  }
}

export default Dashboard;



