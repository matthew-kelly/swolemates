import React, {Component} from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn :false,
      userEmail : '',
      userPassword : '',
    }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event)
    this.setState({
      isLoggedIn : true,
      userEmail: '',
      userPassword : ''
    })
  }

  render() {
    return(
    <div className="tile">
    <form>
    <input name='email' placeholder='email'/>
    </form>
    <form>
      <input name='password' placeholder='password'/>
    </form>
    <button onClick={this.handleClick}>Submit</button>
    </div>
    );
  }
}

export default Login;
