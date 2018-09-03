import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import axios from 'axios';

import Homepage from './Homepage.jsx'
import NavBar from './NavBar.jsx'
import Connections from './Connections.jsx'
import Dashboard from './Dashboard.jsx'
import Calendar from './Calendar.jsx'
import Friends from './Friends.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import FriendPage from './FriendPage.jsx'
import {NotificationManager} from 'react-notifications';

const API = 'http://localhost:5000/api'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: '',
      isLoggedIn: false
    };
    this.renderMergedProps = this.renderMergedProps.bind(this);
    this.PropsRoute = this.PropsRoute.bind(this);

    const cachedUser = sessionStorage.getItem('current_user');
    const cachedLogin = sessionStorage.getItem('isLoggedIn');
    if (JSON.parse(cachedLogin) === true) {
      this.state = { isLoggedIn: JSON.parse(cachedLogin), current_user: JSON.parse(cachedUser) };
    }
  }


  // -------------------------------------------------
  //                 LOGIN FUNCTIONS
  // -------------------------------------------------
  // Check db for login info
  async checkLogin(email, password) {
    const res = await axios({method: 'post', url: `${API}/login`, data: {email: email, password: password}})
    if (res.data.length > 0) {
      return await res.data;
    } else {
      return false;
    }
  }

  // Login method
  loginSubmit = (event) => {
    event.preventDefault();
    const userEmail = event.target.email.value;
    const userPassword = event.target.password.value;

    this.checkLogin(userEmail, userPassword)
      .then(res => {
          sessionStorage.setItem('isLoggedIn', true);
          sessionStorage.setItem('current_user', JSON.stringify(res[0]));
          this.setState({
            isLoggedIn : true,
            current_user: res[0]
        })
      })
      .catch(err => console.error(err));
  }

  logoutSubmit = (event) => {
    sessionStorage.setItem('isLoggedIn', false);
    this.setState({ current_user: undefined});
  }

  changeUserInformation = (key, value) => {
    let current_user = this.state.current_user;
    current_user[key] = value;
    this.setState({current_user: current_user})
  }

  createNotification = (type, first_name, last_name) => {
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'eventAccepted' :
        NotificationManager.info('Event Added!', `Your event with ${first_name} ${last_name} has been added to your upcoming events`, 3000);
        break;
      case 'addEvent':
        NotificationManager.success('Success!', 'Your event is being added to the Calendar');
        break;
      case 'addFriend':
        NotificationManager.success('Friend Added!', `${first_name} ${last_name} was added to your friends list`, 3000);
        break;
      case 'deleteFriend':
        NotificationManager.warning('Request Denied', `${first_name} ${last_name}'s request was denied`, 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
      break;
    }
  };

  // -------------------------------------------------
  //              RENDER PROP ROUTES
  // -------------------------------------------------
  renderMergedProps(component, ...rest) {
    const finalProps = Object.assign({}, ...rest);
    return React.createElement(component, finalProps);
  }

  PropsRoute({ component, ...rest }) {
    return (
      <Route {...rest}
        render={routeProps => {
          return this.renderMergedProps(component, routeProps, rest);
        }
      }/>
    );
  }

  // -------------------------------------------------
  //                     RENDER
  // -------------------------------------------------
  render() {
    // const appState = this.state;

    return (
      <Router>
        <Route path='/'>
          <div>
            <this.PropsRoute path="/" component={NavBar} logoutSubmit={this.logoutSubmit} appState={this.state} />
            <this.PropsRoute exact path="/" component={Homepage} loginSubmit={this.loginSubmit} appState={this.state} />
            <this.PropsRoute exact path="/calendar" createNotification={this.createNotification} component={Calendar} appState={this.state} />
            <this.PropsRoute exact path="/dashboard" createNotification={this.createNotification} component={Dashboard} changeUserInformation={this.changeUserInformation} appState={this.state} />
            <this.PropsRoute exact path="/connections" createNotification={this.createNotification} component={Connections} appState={this.state} />
            <this.PropsRoute exact path="/friends" component={Friends} appState={this.state} />
            <this.PropsRoute path ='/profiles/:id' component={FriendPage} appState={this.state}/>
            <this.PropsRoute exact path="/login" component={Login} loginSubmit={this.loginSubmit} appState={this.state} />
            <this.PropsRoute exact path="/register" component={Register} loginSubmit={this.loginSubmit} appState={this.state} />
          </div>
        </Route>
      </Router>
    );
  }
}


export default App;
