import React, {Component} from 'react';
import { render } from 'react-dom';
import InfiniteCalendar, {
  Calendar,
  defaultMultipleDateInterpolation,
  withMultipleDates,
} from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css';

const MultipleDatesCalendar = withMultipleDates(Calendar);
const today = new Date();
const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

class Calendar1 extends Component {

  render() {
    return (
      <InfiniteCalendar
        Component={MultipleDatesCalendar}
        interpolateSelection={defaultMultipleDateInterpolation}
        selected={[new Date(2018, 7, 1), new Date(2018, 7, 18), new Date()]}
        width={1280}
        height={630}
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

export default Calendar1;
