import React, {Component} from 'react';
import axios from 'axios';
import Calendar from './Calendar.jsx'

const API = 'http://localhost:5000/api'

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      current_user: 16,
      user_data: '',
      goals: ''
    }
  }

  componentWillMount() {
    this.getUser(this.state.current_user)
    .then(res => this.setState({ user_data: res[0] }))
    .catch(err => console.log(err));

    this.getGoals(this.state.current_user)
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
    const user_data = this.state.user_data;
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
        <div id="gym" className="tile dashboardSmall">
          <i class="fas fa-dumbbell"></i>
          <h4 className='dashboardSubtitle'>{user_data.gym_id}</h4>
        </div>
        <div id="calendarDashboard" className="tile dashboardSmall">
          <i class="far fa-calendar"></i>
          <h4 className='dashboardSubtitle'>Calendar</h4>
        </div>
        <div id="goals" className="tile">
          <h1>Goals</h1>
          <ul>
            {allGoals}
          </ul>
        </div>
        <div id="activity" className="tile">
          <p>This is my activity graph</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
