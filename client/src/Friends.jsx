import React, {Component} from 'react';

class Friends extends Component {
  render() {
    const response = this.props.response
    return (
     <div>
        <div className='textcontainer'>
        <img/>
        <h3> {response} </h3>
          <p className="textsummary">
          Hey thanks for the connection...
          </p>
        </div>
        <div className='textcontainer'>
        <img/>
        <h3> John With</h3>
          <p className="textsummary">
          Wanna work out...
          </p>
        </div>
        <div className='textcontainer'>
        <img/>
        <h3> John Lith </h3>
          <p className="textsummary">
          No thanks...
          </p>
        </div>
      </div>
      );
  }
}

export default Friends