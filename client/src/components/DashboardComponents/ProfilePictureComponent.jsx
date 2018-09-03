import React, {Component} from 'react'
import axios from 'axios'

const API = 'http://localhost:5000/api'


class ProfilePictureComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.appState.current_user.id,
      profile_pic: this.props.content
    }
  }

  onClick = (event) => {
    document.getElementById('inputPicture').style = 'display:inline'
    document.getElementById('pictureContainer').style = 'display:none'
  }

  onSubmit = (event) => {
    event.preventDefault();
    let newValue = document.getElementById('inputPicture').value
    this.setState({profile_pic : newValue})
    document.getElementById('inputPicture').style = 'display:none'
    document.getElementById('pictureContainer').style = 'display:inline'
    this.changeSessionInfo(newValue);
  }

  changeSessionInfo = (newValue) => {
    let current_user = sessionStorage.getItem('current_user');
    console.log(current_user)
    current_user = JSON.parse(current_user);
    current_user.profile_pic = newValue;
    sessionStorage.setItem('current_user', JSON.stringify(current_user));
    window.location.reload(true);
    this.changeUserPicture(this.state.id, this.state.profile_pic)
  }

  async changeUserPicture(user_id, user_profile_pic) {
    const res = await axios({
      method: 'post',
      url: `${API}/users/${user_id}/profile_pic`,
      data: {
        user_id: user_id,
        user_profile_pic: user_profile_pic,
      }
    })
    return await res.status
  }

  render(){
    return(
      <form onSubmit={this.onSubmit} id="profileImage" className="tile tileMedium">
      <div className="dashboardComponentHeader">
        <i onClick={this.onClick} className="far fa-edit"></i>
      </div>
        <img id='pictureContainer' className="profile_pic" src={this.state.profile_pic} alt="profile" />
        <input defaultValue={this.state.profile_pic} id='inputPicture' style={{display: 'none'}}/>
      </form>
    )
  }
}

export default ProfilePictureComponent