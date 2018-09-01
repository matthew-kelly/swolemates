import React, {Component} from 'react';
import moment from 'moment';


class EventDataModal extends Component {

  render() {
    const showHideClassName = this.props.showEventModal ? "event-data-modal display-block" : "event-data-modal display-none";

    const tags = this.props.tags;
    let eventTags;

    if (tags) {
      eventTags = tags.map((tag) => {
        return <li key={tag.id}>{tag.tag}</li>
      });
    }
    let currentEventRequests = this.props.currentEventRequests;
    let requestToJoinButton = <button className="request-to-join-button" onClick={this.props.requestToJoin} data-event={JSON.stringify(this.props.currentEvent)}>Request to Join</button>;
    
    if (this.props.currentEvent.user_id === this.props.currentUser.id) {
      requestToJoinButton = <p><em>This is your event</em></p>;
    }

    if (currentEventRequests) {
      currentEventRequests.forEach(request => {
        if (request.requester_id === this.props.currentUser.id) {
          requestToJoinButton = <p><em>Pending Request</em></p>;
        }
      })
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
          {requestToJoinButton}
          <button className="close-modal-button" onClick={this.props.handleClose}>Close</button>
        </div>
      </div>
    )
  }

}

export default EventDataModal;
