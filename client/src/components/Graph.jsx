import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2'


class Graph extends Component {
  constructor(props){
    super(props)
  }

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
      {
        label: 'Events Joined',
        backgroundColor:['#ff6a6a','#ffaa5d','#fced6c', '#8affb2', '#a6d3ff', '#cf93ff', '#ff93fd'],
        borderColor: '#ffffff',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [21, 17, 11, 4, 20, 22, 13]
      }
    ]
  };
    return (
      <div>
      <Doughnut responsive={false} data={dataCreated}/>
      </div>
    );
  }
}

export default Graph