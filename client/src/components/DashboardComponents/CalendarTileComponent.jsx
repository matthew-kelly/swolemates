import React, {Component} from 'react'
import { Link } from 'react-router-dom';


class CalendarTileComponent extends Component{

  render(){

    let user_data = this.props.content
    return(
        <div id="calendarDashboard1" className="tile tileBig">
      <Link to ={{pathname: `/calendar`, state: {user_data} }}>
        <div className="dashboardComponentHeader">
          <span>Calendar</span>
          <i className="far fa-calendar"></i>
        </div>
          <div className="dashboardComponentContentCenter">
          <h4 className='dashboardSubtitle'>{user_data.first_name}'s Calendar</h4>
        </div>
      </Link>
        </div>
    )
  }
}

export default CalendarTileComponent
