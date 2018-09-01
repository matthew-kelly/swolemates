import React, {Component} from 'react'

class CalendarTileComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="calendarDashboard1" className="tile tileSmall">
        <i className="far fa-calendar"></i>
        <h4 className='dashboardSubtitle'>Calendar</h4>
      </div>
    )
  }
}

export default CalendarTileComponent