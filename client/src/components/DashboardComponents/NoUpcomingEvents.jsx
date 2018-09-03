import React, {Component} from 'react'

class NoUpcomingEvents extends Component{

  render(){
    return(
      <div id="confirmed-events">
          {this.props.content}
      </div>
    )
  }
}

export default NoUpcomingEvents