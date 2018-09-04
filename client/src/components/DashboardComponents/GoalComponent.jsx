import React, {Component} from 'react'

class GoalComponent extends Component{

  render(){
    let editButton;
    if(this.props.goalData.length > 0){
      if(this.props.appState.current_user.id === this.props.goalData[0].user_id){
        editButton = <i onClick={this.onClick} className="far fa-edit"></i>
      }
    }
    return(
     <div id="goals" className="tile tileBig">
        <div className="dashboardComponentHeader">
          <span>Goals</span>
          {editButton}
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