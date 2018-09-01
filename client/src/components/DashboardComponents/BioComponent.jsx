import React, {Component} from 'react'

class BioComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
     <div id="bio" className="tile tileBig">
          <h3>About {this.props.content.first_name}</h3>
          <p>{this.props.content.bio}</p>
        </div>
    )
  }
}

export default BioComponent