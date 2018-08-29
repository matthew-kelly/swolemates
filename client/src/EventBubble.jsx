import React, {Component} from 'react';
// import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import Calendar from './Calendar.jsx'
import { tagOptions } from './docs/data';

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
    const res = axios.get(`${API}/events/${event_id}/tags`);
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
    const firstTag = this.state.tags[0];

    let eventColour = '';

    if (firstTag) {
      tagOptions.forEach((dataTag) => {
        let tagOptionTag = dataTag
        if ( firstTag.tag.toLowerCase() === tagOptionTag.value.toLowerCase()) {
          return eventColour = tagOptionTag.color;
        }
      });
    }


    if (firstTag) {
      return(
        <div className="event-circle" style={{backgroundColor: `${eventColour}`}}></div> // {this.state.eventColour}
      )
    } else {
      return false;
    }
  }
}

export default EventBubble;
