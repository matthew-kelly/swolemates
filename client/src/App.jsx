import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  render
} from 'react-router-dom';

// import logo from './logo.svg';
import NavBar from './NavBar.jsx'
import Connections from './Connections.jsx'
import Dashboard from './Dashboard.jsx'
import ChatHead from './ChatHead.jsx'
import Calendar from './Calendar.jsx'
import Friends from './Friends.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'


class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <Router>
      <div>
      <NavBar/>
        <Route exact path="/login" component={Login}/>
        <Route exact path='/register/' component={Register}/>
        <Route path="/calendar" component={Calendar}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/connections" component={Connections}/>
        <Route path="/friends"
         render={(props) => <Friends {...props} response={this.state.response}/>}/>
      </div>
      </Router>
    );
  }
}


export default App;
