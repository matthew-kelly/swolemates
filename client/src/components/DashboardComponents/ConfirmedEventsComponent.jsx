import React, {Component} from 'react'

class ConfirmedEventsComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="confirmed-events" className="tile tileBig">
        <div className="dashboardComponentHeader">
          <span>Upcoming Events</span>
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

export default ConfirmedEventsComponent