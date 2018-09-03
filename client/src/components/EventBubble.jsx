import React, {Component} from 'react';
import axios from 'axios';
import { tagOptions } from '../docs/data';

const API = 'http://localhost:5000/api'

class EventBubble extends Component {
  constructor(props) {
    super(props)
    this.state = {
      eventColour: '',
      tags: ''
    }
  }

  async getEventTags(event_id) {
    const res = await axios.get(`${API}/events/${event_id}/tags`);
    return await res;
  }

  componentDidMount() {
    this.getEventTags(this.props.thisEvent.id)
      .then(res => {
        this.setState({tags: res.data});
      })
      .catch(err => console.error(err));
  }

  render() {
    let firstTag;
    if (this.state.tags) {
      firstTag = this.state.tags[0];
    }

    let eventColour = '';

    if (firstTag) {
      tagOptions.forEach((dataTag) => {
        let tagOptionTag = dataTag;
        if ( firstTag.tag.toLowerCase() === tagOptionTag.value.toLowerCase()) {
          return eventColour = tagOptionTag.color;
        }
      });
    }

    const thisEvent = JSON.stringify(this.props.thisEvent);
    if (firstTag) {
      return(
        <div data-thisevent={thisEvent} data-eventtags={JSON.stringify(this.state.tags)} onClick={this.props.showEventDataModal} className="event-circle" style={{backgroundColor: `${eventColour}`}}></div> // {this.state.eventColour}
      )
    } else {
      return false;
    }
  }
}

export default EventBubble;
