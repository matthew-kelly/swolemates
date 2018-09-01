import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const API = 'http://localhost:5000/api'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user_data: '',
      goals: '',
      confirmedEvents: ''
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

  render() {

    if (this.props.appState.isLoggedIn !== true) {
      return <Redirect to='/' />
    }

    const user_data = this.props.appState.current_user;
    const goals_data = this.state.goals;
    const events_data = this.state.confirmedEvents;

    let allGoals;
    if (goals_data) {
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

    return (
      <div className="container">
        <div id="profileImage" className="tile tileMedium">
          <img className="profile_pic" src={user_data.profile_pic} alt="profile" />
        </div>
          <div id="gym" className="tile tileSmall">
            <i className="fas fa-dumbbell"></i>
            <h4 className='dashboardSubtitle'>{user_data.gym_id}</h4>
          </div>
          <div id="calendarDashboard1" className="tile tileSmall">
            <i className="far fa-calendar"></i>
            <h4 className='dashboardSubtitle'>Calendar</h4>
          </div>
          <div id="calendarDashboard2" className="tile tileSmall">
            <i className="far fa-calendar"></i>
            <h4 className='dashboardSubtitle'>Calendar</h4>
          </div>
          <div id="calendarDashboard3" className="tile tileSmall">
            <i className="far fa-calendar"></i>
            <h4 className='dashboardSubtitle'>Calendar</h4>
          </div>
        <div id="bio" className="tile tileBig">
          <h1>About {user_data.first_name}</h1>
          <p>{user_data.bio}</p>
        </div>
        <div id="goals" className="tile tileMedium">
          <h1>Goals</h1>
          <ul>
            {allGoals}
          </ul>
        </div>
        <div id="activity" className="tile">
          <p>This is my activity graph</p>
        </div>
        <div id="confirmed-events">
          <h1>Next Event</h1>
          <ul>
            {earliestEventFormatted}
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
