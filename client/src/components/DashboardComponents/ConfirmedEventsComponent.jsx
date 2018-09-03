import React, {Component} from 'react'
import moment from 'moment';

class ConfirmedEventsComponent extends Component{
  render() {
    return (
      <li>
        <p>{moment(this.props.content.time_begin).format('MMM. Do, YYYY, h:mm a')} - {moment(this.props.content.time_end).format('h:mm a')}</p>
        <p>{this.props.content.first_name} {this.props.content.last_name}</p>
      </li>
    )
  }
}

export default ConfirmedEventsComponent
