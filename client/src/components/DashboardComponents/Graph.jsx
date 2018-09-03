import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2'


class Graph extends Component {

  render () {
    const dataCreated = {
      labels: ['Back', 'Biceps', 'Calisthenics', 'Cardio', 'Chest', 'Core', 'HIT', 'Legs', 'ORM', 'Shoulders', 'Sprints', 'Stretching', 'Traps', 'Triceps', 'Yoga'],
      datasets: [
      {
        label: 'Events Created',
        backgroundColor:['#ff6a6a', '#ffaa5d', '#5243AA', '#fae747', '#a6d3ff', '#5effab', '#253858', '#cf93ff', '#6d6fc3', '#ff93fd', '#e84b85', '#7fb378', '#929292', '#017eff', '#b9bc7f'],
        borderColor: '#ffffff',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#ffffff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [15, 30, 10, 40, 15, 20, 15, 10, 1, 11, 7, 4, 3, 2, 0]
      },
    ]
  };

  const tagOptions = [
        { value: 'back', label: 'Back', color: '#ff6a6a'},
        { value: 'biceps', label: 'Biceps', color: '#ffaa5d'},
        { value: 'calisthenics', label: 'Calisthenics', color: '#5243AA'},
        { value: 'cardio', label: 'Cardio', color: '#fae747'},
        { value: 'chest', label: 'Chest', color: '#a6d3ff'},
        { value: 'core', label: 'Core', color: '#5effab'},
        { value: 'hIT', label: 'HIT', color: '#253858'},
        { value: 'legs', label: 'Legs', color: '#cf93ff'},
        { value: 'oRM', label: 'ORM', color: '#6d6fc3'},
        { value: 'shoulders', label: 'Shoulders', color: '#ff93fd'},
        { value: 'sprints', label: 'Sprints', color: '#e84b85'},
        { value: 'stretching', label: 'Stretching', color: '#7fb378'},
        { value: 'traps', label: 'Traps', color: '#929292'},
        { value: 'triceps', label: 'Triceps', color: '#017eff'},
        { value: 'yoga', label: 'Yoga', color: '#b9bc7f'}
      ]


  const options = {
        cutoutPercentage: 35,
        legend: {
          display: true,
          position: 'left',
          labels: {
                padding: 6,
                boxWidth: 50
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    }
    return (
      <div>
        <div className="dashboardComponentHeader">
          <span>Activity</span>
          <i className="fas fa-chart-bar"></i>
        </div>
        <div className="dashboardComponentContent">
          <Doughnut maintainAspectRatio={true} height={140} options={options}data={dataCreated}/>
        </div>
      </div>
    );
  }
}

export default Graph
