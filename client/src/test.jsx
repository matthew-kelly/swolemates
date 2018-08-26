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
  constructor(props) {
    super(props);
  }

  onSelect(date){
    console.log(date);
    alert(date);
  }


  render() {
    return (
      <div>
      <InfiniteCalendar
        onSelect={this.onSelect}
        Component={MultipleDatesCalendar}
        interpolateSelection={defaultMultipleDateInterpolation}
        selected={[new Date(2018, 7, 1), new Date(2018, 7, 18), new Date()]}
        width={1280}
        height={630}
        disabledDays={[]}
        min={new Date(2018, 0, 1)}
        max={new Date(2019, 0, 1)}
        displayOptions={{
        layout: 'landscape',
        showOverlay: false,
        shouldHeaderAnimate: false
        }}
      />
      </div>
    );
  }
}

export default Calendar1;
