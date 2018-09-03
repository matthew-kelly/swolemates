import React, {Component} from 'react'

class NoUpcomingEvents extends Component{
  
  render(){
    return(
      <div id="confirmed-events">
        <h1>Upcoming Events</h1>
        <ul>
          {this.props.content}
        </ul>
      </div>
    )
  }
}

export default NoUpcomingEvents