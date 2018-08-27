import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const API = 'http://localhost:5000/api'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user_data: '',
      goals: ''
    }
  }

  componentWillMount() {
    this.getUser(this.props.appState.current_user.id)
    .then(res => this.setState({ user_data: res }))
    .catch(err => console.log(err));

    this.getGoals(this.props.appState.current_user.id)
    .then(res => this.setState({ goals: res }))
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

  render() {
    
    if (this.props.appState.isLoggedIn !== true) {
      return <Redirect to='/' />
    }

    const user_data = this.props.appState.current_user;
    const goals_data = this.state.goals;

    let allGoals;
    if (goals_data){
      allGoals = goals_data.map((goal) => {
        return <li key={goal.id}>{goal.goal}</li>
      });
    }
    return (
      <div className="container">
        <div id="image" className="tile">
          <img className="profile_pic" src={user_data.profile_pic} alt="profile" />
        </div>
        <div id="bio" className="tile">
          <h1>About {user_data.first_name}</h1>
          <p>{user_data.bio}</p>
        </div>
        <div id="goals" className="tile">
          <h1>Goals</h1>
          <ul>
            {allGoals}
          </ul>
        </div>
        <div id="calendar" className="tile">
          <p>calendar goes here </p>
        </div>
        <div id="activity" className="tile">
          <p>This is my activity graph</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
