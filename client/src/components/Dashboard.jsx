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

const API = 'http://localhost:5000/api'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user_data: '',
      goals: '',
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
    const gym_data = this.state.gym;

    let allGoals;
    let gymName;
    if (goals_data){
      allGoals = goals_data.map((goal) => {
        return <li key={goal.id}>{goal.goal}</li>
      });
    }
    if (gym_data){
      gymName = gym_data.map((gym) => {
        return <span key={gym.id}>{gym.name}</span>
      })
    }
    return (
      <div className="container">
      <ProfilePictureComponent content={user_data.profile_pic}/>
      <GymTileComponent content={gymName}/>
      <CalendarTileComponent />
          <div id="calendarDashboard3" className="tile tileSmall">
            <i className="far fa-calendar"></i>
            <h4 className='dashboardSubtitle'>Calendar</h4>
          </div>
      <BioComponent content={user_data}/>
      <GoalComponent content={allGoals}/>
      <AcitivityGraphComponent/>
      </div>
    );
  }
}

export default Dashboard;



