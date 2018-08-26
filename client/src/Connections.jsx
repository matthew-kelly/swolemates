import React, {Component} from 'react';
import axios from 'axios';

import User from './User.jsx'

const API = 'http://localhost:5000/api'

class Connections extends Component {
  constructor() {
    super();
    this.state = {
      connections: '',
      current_user: 2
    }
  }
  
  componentWillMount() {
    this.getConnections(this.state.current_user)
    .then(res => this.setState({ connections: res }))
    .catch(err => console.log(err));
  }

  // Get all connections
  async getConnections(id) {
    const res = await axios.get(`${API}/users/${id}/connections`);
    return await res.data;
  }

  render() {
    const connections = this.state.connections;
    let allConnections;
    if (connections){
      allConnections = connections.map((user_obj) => {
        return <User key={user_obj.id} user_obj={user_obj} />
      });
    }

    return (
      <div>
        {allConnections}
      </div>
    );
  }
}

export default Connections