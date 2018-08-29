import React, {Component} from 'react';
import moment from 'moment';


class EventDataModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const showHideClassName = this.props.showEventModal ? "event-data-modal display-block" : "event-data-modal display-none";

    const tags = this.props.tags;
    let eventTags;

    if (tags) {
      eventTags = tags.map((tag) => {
        return <li key={tag.id}>{tag.tag}</li>
      });
    }

    return (
      <div className={showHideClassName}> 
        <div className="event-data-modal-main">
          <h2>Event</h2>
          <h3>Time:</h3>
          <p>{moment(this.props.currentEvent.time_begin).format('MMMM Do YYYY, h:mm a')} - {moment(this.props.currentEvent.time_end).format('h:mm a')}</p>
          <h3>Description:</h3>
          <p>{this.props.currentEvent.description}</p>
          <h3>Tags</h3>
          <ul>
            {eventTags}
          </ul>
          <button onClick={this.props.handleClose}>close</button>
        </div>
      </div>
    )
  }

}

export default EventDataModal;
