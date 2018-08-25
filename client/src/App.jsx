import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  render
} from 'react-router-dom'
// import logo from './logo.svg';
import NavBar from './NavBar.jsx'
import Profile from './Profile.jsx'
import ChatHead from './ChatHead.jsx'
import Calendar from './Calendar.jsx'
import Friends from './Friends.jsx'

// class App extends Component {
//     constructor(props) {
//     super(props);
//     this.state = {
//       currentUser: { name: 'Fred'},
//     };
//   }

  // render() {
  //   return (
  //     <Router>
  //     <div>
  //     <NavBar/>
  //       <Route exact path="/" component={NavBar}/>
  //       <Route path="/calendar" component={Calendar}/>
  //       <Route path="/profile" component={Profile}/>
  //       <Route path="/connections" component={ChatHead}/>
  //       <Route path="/friends" component={Friends}/>
  //     </div>
  //     </Router>
  //   );
  // }
// }

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
        <Route path="/calendar" component={Calendar}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/connections" component={ChatHead}/>
        <Route path="/friends"
         render={(props) => <Friends {...props} response={this.state.response}/>}/>
      </div>
      </Router>
    );
  }
}


export default App;
