import React, {Component} from 'react';
import axios from 'axios';
import { tagOptions } from '../docs/data';

const API = 'http://localhost:5000/api'


class TagList extends Component {
  constructor(props){
    super(props)
    this.state = {
      tags: tagOptions,
      tagEvents: ''
    }
  }

  // Get list of events that have this tag
  async getEventsByTag(tag_id) {
    const res = await axios.get(`${API}/tags/${tag_id}/events`);
    return await res.data;
  }


  render(){
    const tagArray = [];
    if (this.state.tags) {
      this.state.tags.forEach((dataTag) => {
        tagArray.push(dataTag);
      });
      // console.log(tagArray);
    }

    let tagEvents = ''
    if (this.state.tagEvents) {
      tagEvents = JSON.stringify(this.state.tagEvents);
    }

    let allTags = tagArray.map((tag) => {
      return <li className="tag-li" key={tag.tag_id} data-thistag={JSON.stringify(tag)} data-tagevents={tagEvents} onClick={this.props.chooseTag}><p data-thistag={JSON.stringify(tag)} data-tagevents={tagEvents} style={{backgroundColor: tag.color}} className="event-circle"></p><p data-thistag={JSON.stringify(tag)} data-tagevents={tagEvents}> {tag.value}</p></li>
    });


    return (
      <div>
        <li onClick={this.props.clearChosenTag}>All Tags</li>
        <hr />
        {allTags}
      </div>
    )
  }
}

export default TagList