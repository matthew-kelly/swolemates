import React, {Component} from 'react';


class Tile extends Component{
  constructor(props){
    super(props)
  }

  render(){

    const tileData = this.props.tileData

    return(
      <div className="tileComponent">
        <div className="tileBreadCrumbs">
          <i className="fas fa-edit"></i>
        </div>
        <div className="tileHeader">
        </div>
        <div className="tileContent">
        {tileData}
        </div>
      </div>
    )
  }
}

export default Tile