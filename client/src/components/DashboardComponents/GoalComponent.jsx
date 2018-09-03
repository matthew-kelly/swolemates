import React, {Component} from 'react'

class GoalComponent extends Component{

  render(){
    return(
     <div id="goals" className="tile tileBig">
        <div className="dashboardComponentHeader">
          <span>Goals</span>
          <i onClick={this.onClick} className="far fa-edit"></i>
        </div>
      <div className="dashboardComponentContent">
            <ul>
              {this.props.content}
            </ul>
        </div>
      </div>
    )
  }
}

export default GoalComponent