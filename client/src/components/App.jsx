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
import Example from './Example.jsx'

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
    if (JSON.parse(cachedLogin) === true && cachedUser) {
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
        if (res) {
          sessionStorage.setItem('isLoggedIn', true);
          sessionStorage.setItem('current_user', JSON.stringify(res[0]));
          this.setState({
            isLoggedIn : true,
            current_user: res[0]
          })
        } else {
          event.target.email.value = '';
          event.target.password.value = '';
          window.alert("Could not log in. Please try again")
        }
      })
      .catch(err => console.error(err));
  }

  logoutSubmit = (event) => {
    sessionStorage.setItem('isLoggedIn', false);
    sessionStorage.setItem('current_user', undefined);
  }

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
    const appState = this.state;

    return (
      <Router>
        <Route path='/'>
          <div>
            <this.PropsRoute path="/" component={NavBar} logoutSubmit={this.logoutSubmit} appState={appState} />
            <this.PropsRoute exact path="/" component={Homepage} loginSubmit={this.loginSubmit} appState={appState} />
            <this.PropsRoute exact path="/calendar" component={Calendar} appState={appState} />
            <this.PropsRoute exact path="/dashboard" component={Dashboard} appState={appState} />
            <this.PropsRoute exact path="/connections" component={Connections} appState={appState} />
            <this.PropsRoute exact path="/friends" component={Friends} appState={appState} />
            <this.PropsRoute path ='/profiles/:id' component={FriendPage} appState={appState}/>
            <this.PropsRoute exact path="/login" component={Login} loginSubmit={this.loginSubmit} appState={appState} />
            <this.PropsRoute exact path="/register" component={Register} loginSubmit={this.loginSubmit} appState={appState} />
            <this.PropsRoute exact path='/example' component={Example}/>
          </div>
        </Route>
      </Router>
    );
  }
}


export default App;
