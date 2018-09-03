import React, {Component} from 'react'

class CalendarTileComponent extends Component{

  render(){
    return(
      <div id="calendarDashboard1" className="tile tileBig">
      <div className="dashboardComponentHeader">
        <span>Calendar</span>
        <i className="far fa-calendar"></i>
      </div>
        <div className="dashboardComponentContentCenter">
        <h4 className='dashboardSubtitle'>Calendar</h4>
      </div>
      </div>
    )
  }
}

export default CalendarTileComponent
