import React, {Component} from 'react';
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const today = new Date();
const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

class Calendar extends Component {
  render() {
    return (
      <InfiniteCalendar
    width={1355}
    height={630}
    selected={false}
    disabledDays={[]}
    minDate={2018, 0, 1}
    min={new Date(2018, 0, 1)}
    max={new Date(2019, 0, 1)}
    displayOptions={{
    layout: 'landscape',
    showOverlay: false,
    shouldHeaderAnimate: false
  }}
  />
    );
  }
}

export default Calendar;
