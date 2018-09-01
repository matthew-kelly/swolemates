import React, {Component} from 'react'
import Graph from './Graph.jsx'


class ActivityGraphComponent extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
        <div id="activity" className="tile">
        <Graph/>
        </div>
    )
  }
}

export default ActivityGraphComponent