import React, {Component} from 'react'

class GymTileComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
     <div id="gym" className="tile tileBig">
      <div className="dashboardComponentHeader">
        <span>Gym</span>
        <i className="fas fa-dumbbell"></i>
      </div>
        <div className="dashboardComponentContentCenter">
          <h4 className='dashboardSubtitle'>{this.props.content}</h4>
        </div>
      </div>
    )
  }
}

export default GymTileComponent