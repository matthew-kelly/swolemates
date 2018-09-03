import React, {Component} from 'react'

class ConfirmedEventsComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div id="confirmed-events">
        <h1>Next Event</h1>
        <ul>
          {this.props.content}
        </ul>
      </div>
    )
  }
}

export default ConfirmedEventsComponent