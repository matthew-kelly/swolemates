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
    if(document.getElementById('inputPicture').style.display === 'inline'){
      document.getElementById('inputPicture').style = 'display:none'
      document.getElementById('pictureContainer').style = 'display:inline'
    } else {
      document.getElementById('inputPicture').style = 'display:inline'
      document.getElementById('pictureContainer').style = 'display:none'
    }
  }

  onEnterPress = (event) => {
  if(event.keyCode === 13 && event.shiftKey === false) {
     this.onSubmit(event);
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    let newValue = document.getElementById('inputPicture').value
    this.props.changeUserInformation('profile_pic', newValue)
    this.setState({profile_pic : this.props.appState.current_user.profile_pic})
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
    // window.location.reload(true);
    setTimeout(() =>{this.changeUserPicture(this.state.id, this.state.profile_pic)}, 1000)
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
    let editButton;

    if(this.props.appState.current_user.id === this.props.content.id){
      editButton = <i onClick={this.onClick} className="far fa-edit"></i>
    }

    return(
      <form onSubmit={this.onSubmit} id="profileImage" className="tile tileBig">
      <div className="dashboardComponentHeader">
        <span>Profile Picture</span>
        {editButton}
      </div>
        <div className="dashboardComponentContentCenter">
          <img id='pictureContainer' className="profile_pic" src={this.props.content.profile_pic} alt="profile" />
          <textarea defaultValue={this.props.content.profile_pic} id='inputPicture' onKeyDown={this.onEnterPress} style={{display: 'none'}}/>
        </div>
      </form>
    )
  }
}

export default ProfilePictureComponent