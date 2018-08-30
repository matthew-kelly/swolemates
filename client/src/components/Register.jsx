import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Register extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      isLoggedIn : true,
      userEmail: '',
      userPassword : ''
    })
  }

  render() {
    if (this.props.appState.isLoggedIn === true) {
      return <Redirect to='/dashboard' />
    }

    return(
      <div className="tile">
        <form onClick={this.handleClick}>
          <input name='first_name' placeholder='First name'/>
          <input name='last_name' placeholder='Last Name'/>
          <input name='email' placeholder='email'/>
          <input name='password' placeholder='password'/>
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
