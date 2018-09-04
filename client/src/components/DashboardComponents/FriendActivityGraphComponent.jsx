import React, {Component} from 'react'
import FriendGraph from './FriendGraph.jsx'


class FriendActivityGraphComponent extends Component{

  render(){
    return(
        <div id="activity" className="tile">
        <FriendGraph/>
        </div>
    )
  }
}

export default FriendActivityGraphComponent