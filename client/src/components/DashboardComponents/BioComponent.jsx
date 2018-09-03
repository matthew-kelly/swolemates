import React, {Component} from 'react'
import axios from 'axios'
const API = 'http://localhost:5000/api'

class BioComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: this.props.content.id,
      first_name: this.props.content.first_name,
      last_name: this.props.content.last_name,
      bio: this.props.content.bio
    }
  }

  onClick = (event) => {
    if(document.getElementById('inputBio').style.display === 'inline'){
      document.getElementById('inputBio').style = 'display:none'
      document.getElementById('bioContainer').style = 'display:inline'
    } else {
      document.getElementById('inputBio').style = 'display:inline'
      document.getElementById('bioContainer').style = 'display:none'
    }
  }

  onEnterPress = (event) => {
  if(event.keyCode === 13 && event.shiftKey === false) {
     this.onSubmit(event);
    }
  }

  onSubmit = (event) => {
    event.preventDefault();
    let newValue = document.getElementById('inputBio').value
    this.props.changeUserInformation('bio', newValue)
    this.setState({bio : this.props.appState.current_user.bio})
    document.getElementById('inputBio').style = 'display:none'
    document.getElementById('bioContainer').style = 'display:inline'
    this.changeSessionInfo(newValue);
  }

  changeSessionInfo = (newValue) => {
    let current_user = sessionStorage.getItem('current_user');
    current_user = JSON.parse(current_user);
    current_user.bio = newValue;
    sessionStorage.setItem('current_user', JSON.stringify(current_user));
    // window.location.reload(true);
    this.changeUserBio(this.state.id, this.state.bio)
  }

  async changeUserBio(user_id, user_bio) {
    const res = await axios({
      method: 'post',
      url: `${API}/users/${user_id}/bio`,
      data: {
        user_id: user_id,
        user_bio: user_bio,
      }
    })
    return await res.status
  }

  render(){
    return(
      <form onSubmit={this.onSubmit} id="bio" className="tile tileBig">
      <div className="dashboardComponentHeader">
        <span>Bio</span>
        <i onClick={this.onClick} className="far fa-edit"></i>
      </div>
      <div className="dashboardComponentContent">
        <h3>About {this.state.first_name} {this.state.last_name}</h3>
        <br/>
        <p id="bioContainer">{this.state.bio}</p>
        <textarea defaultValue={this.state.bio} id='inputBio' onKeyDown={this.onEnterPress} style={{display: 'none'}}/>
      </div>
        </form>
    )
  }
}

export default BioComponent