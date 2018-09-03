import React, {Component} from 'react'

class GoalComponent extends Component{

  render(){
    return(
     <div id="goals" className="tile tileMedium">
        <i onClick={this.onClick} className="far fa-edit"></i>
          <h1>Goals</h1>
          <ul>
            {this.props.content}
          </ul>
        </div>
    )
  }
}

export default GoalComponent