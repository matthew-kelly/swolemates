import React, {Component} from 'react'

class ProfilePictureComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="profileImage" className="tile tileMedium">
          <img className="profile_pic" src={this.props.content} alt="profile" />
        </div>
    )
  }
}

export default ProfilePictureComponent