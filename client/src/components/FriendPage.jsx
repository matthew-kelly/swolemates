import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Calendar from './Calendar.jsx'

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

    this.getGoals(this.props.location.state.user_obj.id)
    .then(res => this.setState({ goals: res }))
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

    const user_data = this.props.location.state.user_obj;
    const goals_data = this.state.goals;

    let allGoals;
    if (goals_data){
      allGoals = goals_data.map((goal) => {
        return <li key={goal.id}>{goal.goal}</li>
      });
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
      </div>
    );
  }
}

export default Dashboard;
