import React, {Component} from 'react'

class GymTileComponent extends Component{

  render(){
    return(
     <div id="gym" className="tile tileSmall">
            <i className="fas fa-dumbbell"></i>
            <h4 className='dashboardSubtitle'>{this.props.content}</h4>
          </div>
    )
  }
}

export default GymTileComponent