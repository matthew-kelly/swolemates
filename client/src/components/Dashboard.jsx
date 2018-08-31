import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Calendar from './Calendar.jsx'
import Graph from './Graph.jsx'
import Tile from './Tile.jsx'


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
      <div id="profileImage" className="tile tileMedium">
          <img className="profile_pic" src={user_data.profile_pic} alt="profile" />
        </div>
          <div id="gym" className="tile tileSmall">
            <Tile tileData={gymName}/>
          </div>
          <div id="calendarDashboard1" className="tile tileSmall">
            <Tile/>
          </div>
          <div id="calendarDashboard2" className="tile tileSmall">
            <Tile/>
          </div>
          <div id="calendarDashboard3" className="tile tileSmall">
            <Tile/>
          </div>
        <div id="bio" className="tile tileBig">
          <Tile tileData={user_data.bio} />
        </div>
        <div id="goals" className="tile tileMedium">
          <h1>Goals</h1>
          <Tile tileData={allGoals} />
        </div>
        <div id="activity" className="tile">
        <Graph/>
        </div>
      </div>
    );
  }
}

export default Dashboard;



