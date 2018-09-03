import React, {Component} from 'react'
import Graph from './Graph.jsx'


class ActivityGraphComponent extends Component{

  render(){
    return(
        <div id="activity" className="tile">
        <Graph/>
        </div>
    )
  }
}

export default ActivityGraphComponent