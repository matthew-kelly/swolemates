import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import User from './User.jsx'

const API = 'http://localhost:5000/api'

class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connections: ''
    }
  }
  
  componentDidMount() {
    this.getConnections(this.props.appState.current_user.id)
    .then(res => this.setState({ connections: res }))
    .catch(err => console.log(err));
  }

  // Get all connections
  async getConnections(id) {
    const res = await axios.get(`${API}/users/${id}/connections`);
    return await res.data;
  }

  render() {
    if (this.props.appState.isLoggedIn !== true) {
      return <Redirect to='/' />
    }

    const connections = this.state.connections;
    let allConnections;
    if (connections){
      allConnections = connections.map((user_obj) => {
        return <User key={user_obj.id} user_obj={user_obj} />
      });
    }

    return (
      <div className="chat-head-list">
        {allConnections}
      </div>
    );
  }
}

export default Connections