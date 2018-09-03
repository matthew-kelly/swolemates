import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2'


class Graph extends Component {

  render () {
    const dataCreated = {
      labels: ['Back', 'Arms', 'Cardio', 'Core', 'Chest', 'Legs', 'Shoulders'],
      datasets: [
      {
        label: 'Events Created',
        backgroundColor:['#ff6a6a','#ffaa5d','#fced6c', '#8affb2', '#a6d3ff', '#cf93ff', '#ff93fd'],
        borderColor: '#ffffff',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [15, 30, 10, 40, 15, 20, 15]
      },
    ]
  };
    return (
      <div>
      <Doughnut data={dataCreated}/>
      </div>
    );
  }
}

export default Graph