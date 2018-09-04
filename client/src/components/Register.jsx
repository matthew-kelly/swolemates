import React, {Component} from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api'

class Register extends Component {

  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      userEmail: '',
      userPassword : ''
    })
  }

  async createNewUser(first_name, last_name, email, password, bio, gym_id, profile_pic) {
    const res = await axios({
      method: 'post',
      url: `${API}/users`,
      data: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        bio: bio,
        gym_id: gym_id,
        profile_pic: profile_pic
      }
    })
      return await res.data;
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let first_name = event.target.children[0].value
    let last_name = event.target.children[1].value
    let email = event.target.children[3].value
    let password = event.target.children[4].value
    let bio = event.target.children[6].value
    let gym_id = event.target.children[8].value
    let profile_pic = event.target.children[9].value
    this.createNewUser(first_name, last_name, email, password, bio, gym_id, profile_pic)
  }

  render() {

    return(
      <div className="registerContainer">
        <div className='formContainer'>
          <form onSubmit={this.handleSubmit}>
            <input id='registerInputFirstName' className='registerInput' name='first_name' placeholder='First name'/>
            <input id='registerInputLastName' className='registerInput' name='last_name' placeholder='Last Name'/>
            <br/>
            <input id='registerInputEmail' type='email'className='registerInput' name='email' placeholder='email'/>
            <input id='registerInputPassword' type='password'className='registerInput' name='password' placeholder='password'/>
            <br/>
            <input id='registerInputBio' className='registerInput' name='bio' placeholder='bio'/>
            <br/>
            <input id='registerInputGym' className='registerInput' name='gym' placeholder='gym'/>
            <input id='registerInputPic' className='registerInput' name='pic' placeholder='pictureURL'/>
            <button action="submit" id='registerButton'>Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
