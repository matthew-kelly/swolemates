import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import dateFns from "date-fns";
import Select from 'react-select'
import makeAnimated from 'react-select/lib/animated';
import { tagOptions } from '../docs/data';
import { colourStyles } from '../docs/data';
// import chroma from 'chroma-js';
import TimeRange from 'react-time-range';
import moment from 'moment';
import 'moment-timezone';
import axios from 'axios';
import EventBubble from './EventBubble';
import EventDataModal from './EventDataModal';
import FriendList from './FriendList';
import TagList from './TagList';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';


const API = 'http://localhost:5000/api'



class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: '',
      friendsIdArray: '',
      tags: '',
      currentMonth: new Date(),
      selectedDate: new Date(),
      events: '',
      selectedEvents: '',
      selectedFriend: '',
      eventTagsArray: '',
      pageLoadEvents: '',
      showEventModal: false,
      currentEvent: '',
      selectedTag: '',
      currentEventTags: '',
      currentEventRequests: '',
      currentTime: moment(new Date()).format('YYYYMMDD')
    };
    this.getAllEvents = this.getAllEvents.bind(this);
  }

  async getAllEvents(gym_id) {
    const res = axios.get(`${API}/gyms/${gym_id}/events`);
    return await res;
  }

  async getFriendEvents(friend_id) {
    const res = axios.get(`${API}/users/${friend_id}/events`);
    return await res;
  }

  async getFriends(user_id) {
    const res = await axios.get(`${API}/users/${user_id}/friends`);
    return await res.data;
  }

  async getEventTags(event_id) {
    const res = await axios.get(`${API}/events/${event_id}/tags`);
    return await res.data;
  }

  async addEventTag(event_id, tag) {
    const res = await axios({
      method: 'post',
      url: `${API}/events/${event_id}/tags`,
      data: {
        tag: tag
      }
    })
    if (res.data.length > 0) {
      return await res.data;
    } else {
      return false;
    }
  }

  async postEvent(eventObj) {
    const res = await axios({
      method: 'post',
      url: `${API}/events`,
      data: {
        user_id: eventObj.user_id,
        gym_id: eventObj.gym_id,
        description: eventObj.description,
        public: eventObj.public,
        time_begin: eventObj.time_begin,
        time_end: eventObj.time_end
      }
    })
    if (res.data.length > 0) {
      return await res.data;
    } else {
      return false;
    }
  }

  async currentEventJoinRequests(event_id) {
    const res = await axios.get(`${API}/events/${event_id}/request`);
    return await res;
  }

  async newEventJoinRequest(requestObj) {
    const res = await axios({
      method: 'post',
      url: `${API}/events/${requestObj.event_id}/request`,
      data: {
        event_id: requestObj.event_id,
        requester_id: requestObj.requester_id,
        accepted: false
      }
    })
    if (res.data.length > 0) {
      return await res.data;
    } else {
      return false;
    }
  }

  getTagsForEvents = (eventsList) => {
    const eventTagsArray = [];

    eventsList.forEach(event => {
      this.getEventTags(event.id)
        .then(res => {
          let eventTagsObj = { event_id: '', tags: [] };
          res.forEach(row => {
            eventTagsObj.event_id = row.event_id;
            eventTagsObj.tags.push(row.tag);
          })
          eventTagsArray.push(eventTagsObj);
        })
        .catch(err => console.error(err));
    })
    console.log("eventTagsArray: ", eventTagsArray);
    this.setState({ eventTagsArray: eventTagsArray });
  }
  
  createNotification = (type) =>{
    switch (type) {
      case 'info':
        NotificationManager.info('Info message');
        break;
      case 'addEvent':
        NotificationManager.success('Success!', 'Your event is being added to the Calendar');
        break;
      case 'warning':
        NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        break;
      case 'error':
        NotificationManager.error('Error message', 'Click me!', 5000, () => {
          alert('callback');
        });
      break;
    }
  };

  showEventDataModal = (event) => {
    const thisEvent = JSON.parse(event.target.getAttribute('data-thisevent'));
    this.setState({
      currentEventTags: JSON.parse(event.target.getAttribute('data-eventtags')),
      currentEvent: JSON.parse(event.target.getAttribute('data-thisevent')),
     });
    this.currentEventJoinRequests(thisEvent.id)
      .then(res => {
        this.setState({
          currentEventRequests: res.data,
          showEventModal: true
        })
      })
      .catch(err => console.error(err));
  };

  hideEventDataModal = () => {
    this.setState({ showEventModal: false });
  };

  // User requests an invitation to event
  requestToJoin = (event) => {
    const thisEvent = JSON.parse(event.target.getAttribute('data-event'));
    const requestObj = {
      event_id: thisEvent.id,
      requester_id: this.props.appState.current_user.id
    }
    this.newEventJoinRequest(requestObj)
      .then(res => {
        this.hideEventDataModal();
      })
      .catch(err => console.error(err));
  }

  // Called when user clicks on timedropdown menu, sets state to set time
  changeTime = (event) => {
    let startTime = moment(event.startTime).format('YYYYMMDD HHmm')
    let endTime = moment(event.endTime).format('YYYYMMDD HHmm')
    this.setState({ startTime: startTime });
    this.setState({ endTime: endTime });
  }

  // Hides popup and resets checkbox/event description
  onClear = (event) => {
    document.getElementById("popup").style = "display: none";
    document.getElementById("popupBackground").style = "display: none";
    document.getElementById("eventDescription").value = '';
    document.getElementById('publicCheckbox').checked = '';
    this.setState({tags:''});
  }

  // Does nothing if click is inside the event popup/else clears
  handleClick = (event) => {
    if (this.node.contains(event.target)) {
      return;
    }
    this.onClear();
  }

  // Adds tags selected by user to the state with each tag click
  addTag = (event) => {
    this.setState({tags: event});
  }

  // Creates event object with all relevant information
  createEvent = (event) => {
    let description = document.getElementById("eventDescription").value;
    let tagArray = [];
    let date = moment(this.state.selectedDate).format('YYYYMMDD')
    let sTime = date + " " + moment(this.state.startTime).format('HHmm')
    let eTime = date + " " + moment(this.state.endTime).format('HHmm')
    let publicCheck = false;
    if(document.getElementById('publicCheckbox').checked){
      publicCheck = true;
    }
    for(let tag of this.state.tags){
      tagArray.push(tag.label);
    }

    if (description.length > 0 && tagArray.length > 0 && date.length > 0 && sTime < eTime) {
      let eventObj = {
        user_id: this.props.appState.current_user.id,
        gym_id: this.props.appState.current_user.gym_id,
        description: description,
        public: publicCheck,
        time_begin: sTime,
        time_end: eTime,
      }
      this.postEvent(eventObj)
        .then(res => {
          const eventId = res[0];

          tagArray.map((tag) => {
            this.addEventTag(eventId, tag)
              .catch(err => console.error(err));
          });
        })
        .catch(err => console.error(err));
      
      this.onClear();
      this.createNotification('addEvent')
      setTimeout(function(){window.location.reload(true);},1000);
    } else {
      window.alert("Event is not valid");
    }
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false);

    this.getFriends(this.props.appState.current_user.id)
    .then(res => {
      const friendsIdArray = res.map(friend => friend.id);
      this.setState({ friends: res, friendsIdArray: friendsIdArray })
    })
    .catch(err => console.error(err));

    if (this.state.selectedFriend) {
      console.log("Getting friend's events");
      this.getFriendEvents(this.state.selectedFriend.id)
        .then(res => {
          this.setState({ selectedEvents: res.data, pageLoadEvents: res.data });
          this.getTagsForEvents(res.data);
        })
        .catch(err => console.error(err));
    } else {
      console.log("Getting all events");
      this.getAllEvents(this.props.appState.current_user.gym_id)
        .then(res => {
          this.setState({ selectedEvents: res.data, pageLoadEvents: res.data });
          this.getTagsForEvents(res.data);
        })
        .catch(err => console.error(err));
    }
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  // Renders the popup with forms/buttons
  renderPopUp() {
    return(
      <div>
        <div style={{display:'none'}} id='popupBackground'>
        </div>
        <div ref={node => this.node = node} style={{display:'none'}} id='popup'>
          <h1 id="popuptitle">Create an Event</h1>
          <h3>Description</h3>
          <form>
          <textarea name='eventDescription' id='eventDescription' placeholder='Event description...'/>
          </form>
          <Select
            onChange={this.addTag}
            className='tagform'
            closeMenuOnSelect={false}
            components={makeAnimated()}
            isMulti
            options={tagOptions}
            styles={colourStyles}
          />
          <div id='timeRangeMenu'>
            <TimeRange
              sameIsValid={false}
              startMoment={this.state.startTime}
              endMoment={this.state.endTime}
              onChange={this.changeTime}
            />
            <div className='checkbox'>
              <input id='publicCheckbox'type='checkbox' name='public' value='public'/>Public Event
            </div>
          </div>
          <div id='eventButtonMenu'>
            <button id='confirmButton' className='eventButton' onClick={this.createEvent}>Confirm</button>
            <button id='cancelButton' className='eventButton' onClick={this.onClear}>Cancel</button>
          </div>
        </div>
      </div>
      )
  }

  chooseFriend = (event) => {
    const thisFriend = JSON.parse(event.target.getAttribute('data-thisfriend'));
    this.setState({ selectedFriend: thisFriend })
    
    this.getFriendEvents(thisFriend.id)
      .then(res => {
        if (this.state.selectedTag) {
          const filteredTagArray = this.state.eventTagsArray.filter((event) => {
            return event.tags.includes(this.state.selectedTag.label);
          })
          .map((event) => {
            return event = event.event_id;
          });

          let filteredEvents;

          filteredEvents = res.data.filter((event) => {
            return filteredTagArray.includes(event.id);
          });

          this.setState({ selectedEvents: filteredEvents, friendsSelectedEvents: res.data });
        } else {
          this.setState({ selectedEvents: res.data, friendsSelectedEvents: res.data });
        }
      })
      .catch(err => console.error(err));
  }

  clearChosenFriend = () => {
    this.setState({ selectedFriend: '' })

    if (this.state.selectedTag) {
      const filteredTagArray = this.state.eventTagsArray.filter((event) => {
        return event.tags.includes(this.state.selectedTag.label);
      }).map((event) => {
        return event = event.event_id;
      });

      let filteredEvents;

      filteredEvents = this.state.pageLoadEvents.filter((event) => {
        return filteredTagArray.includes(event.id);
      });

      this.setState({ selectedEvents: filteredEvents, friendsSelectedEvents: '' });
    } else {
      this.setState({ selectedEvents: this.state.pageLoadEvents, friendsSelectedEvents: '' });
    }
  }

  chooseTag = (event) => {
    const thisTag = JSON.parse(event.target.getAttribute('data-thistag'));

    this.setState({ selectedTag: thisTag });

    const filteredTagArray = this.state.eventTagsArray.filter((event) => {
      return event.tags.includes(thisTag.label);
    }).map((event) => {
      return event = event.event_id;
    });

    let filteredEvents;
    
    if (this.state.selectedFriend) {
      filteredEvents = this.state.friendsSelectedEvents.filter((event) => {
        return filteredTagArray.includes(event.id);
      });
    } else {
      filteredEvents = this.state.pageLoadEvents.filter((event) => {
        return filteredTagArray.includes(event.id);
      });
    }

    this.setState({ selectedEvents: filteredEvents, tagsSelectedEvents: filteredEvents })

  }

  clearChosenTag = () => {
    this.setState({ selectedTag: '' });

    if (this.state.friendsSelectedEvents) {
      this.setState({ selectedEvents: this.state.friendsSelectedEvents, tagsSelectedEvents: '' });
    } else {
      this.setState({ selectedEvents: this.state.pageLoadEvents, tagsSelectedEvents: '' })
    }
  }

  // Renders Calendar Header
  renderHeader() {
    const dateFormat = 'MMMM YYYY';

    let currentTagButton = <button className="dropbtn">All Tags</button>;
    let currentFriendButton = <button className="dropbtn">All Friends</button>;

    if (this.state.selectedFriend) {
      currentFriendButton = <button className="dropbtn">{this.state.selectedFriend.first_name} {this.state.selectedFriend.last_name}</button>;
    }
    if (this.state.selectedTag) {
      currentTagButton = <button className="dropbtn">{this.state.selectedTag.label}</button>;
    }
    return (
      <div className='header row flex-middle'>
        <div className='col col-start'>
          <div className='icon' onClick={this.prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="dropdown">
          {currentTagButton}
          <div className="dropdown-content">
            <ul id="dropdownList">
              <TagList clearChosenTag={this.clearChosenTag} chooseTag={this.chooseTag} appState={this.props.appState}/>
            </ul>
          </div>
        </div>
        <div className="col col-center">
          <span className="calendar-header-month">{dateFns.format(this.state.currentMonth, dateFormat)}</span>
        </div>
        <div className="dropdown">
          {currentFriendButton}
          <div className="dropdown-content">
            <ul id="dropdownList">
              <FriendList clearChosenFriend={this.clearChosenFriend} chooseFriend={this.chooseFriend} appState={this.props.appState}/>
            </ul>
          </div>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "dddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells(filteredEvents) {
    const { currentMonth, selectedDate } = this.state;
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {

        const dayEventsArray = [];

        for (let j = 0; j < filteredEvents.length; j++) {
          let eventStartDate = moment(filteredEvents[j].time_begin).format('YYYYMMDD');
          let calendarDate = moment(day).format('YYYYMMDD');
          
          let friendStatus = '';
          if (this.state.friendsIdArray) {
            const eventCreatorId = filteredEvents[j].user_id;
            if (filteredEvents[j].public === false && this.state.friendsIdArray.includes(eventCreatorId)) {
              friendStatus = true;
            }
          }

          if (eventStartDate >= this.state.currentTime && eventStartDate === calendarDate && ((filteredEvents[j].public === true || filteredEvents[j].user_id === this.props.appState.current_user.id || friendStatus ))) { //  || this.state.friends.findIndex(friend => friend.friend_id === filteredEvents[j].user_id)
            dayEventsArray.push(<EventBubble showEventDataModal={this.showEventDataModal} thisEvent={filteredEvents[j]} key={filteredEvents[j].id} />)
          }
        }

        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div className={`col cell ${!dateFns.isSameMonth(day, monthStart) ? "disabled" : dateFns.isSameDay(day, selectedDate) ? "selected" : ""}`} key={day} >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
            <div className="add-event-button" onClick={() => this.onDateClick(dateFns.parse(cloneDay))}>+</div>
            <ul className="day-event-container">
              {dayEventsArray}
            </ul>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  }

  // On clicking a day, gets the popup information to show, sets the state.
  onDateClick = (day) => {
    this.setState({
      selectedDate: day
    });
    document.getElementById("popup").style = "display: show";
    document.getElementById("popupBackground").style = "display: show";
  };

  nextMonth = () => {
    this.setState({
      currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
    });
  };

  prevMonth = () => {
    this.setState({
      currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
    });
  };

  render() {
    if (this.props.appState.isLoggedIn !== true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        {this.renderPopUp()}
        <div className="calendar">
          {this.renderHeader()}
          {this.renderDays()}
          {this.renderCells(this.state.selectedEvents)}
        </div>
        <EventDataModal currentUser={this.props.appState.current_user} currentEventRequests={this.state.currentEventRequests} currentEvent={this.state.currentEvent} tags={this.state.currentEventTags} showEventModal={this.state.showEventModal} requestToJoin={this.requestToJoin} handleClose={this.hideEventDataModal} />
        <NotificationContainer/>
      </div>
    );
  }
}

export default Calendar;