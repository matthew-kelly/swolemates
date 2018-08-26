import React, {Component} from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="container">
        <div id="image" className="tile">
          <img/>profile pic
        </div>
        <div id="bio" className="tile">
          <h1>About me</h1>
          <p>Decide where your cloud lives. Maybe he lives right in here. If I paint something, I don't want to have to explain what it is. Even trees need a friend. We all need friends. Fluff that up. What the devil. Be careful. You can always add more - but you can't take it away. Let's give him a friend too. Everybody needs a friend. That's the way I look when I get home late; black and blue. Mix your color marbly don't mix it dead.
          </p>
        </div>
        <div id="goals" className="tile">
          <h1>Goals</h1>
          <ul>
            <li> Be jacked </li>
            <li> Don't be unjacked </li>
          </ul>
        </div>
        <div id="calendar" className="tile">
          <p>calendar goes here </p>
        </div>
        <div id="activity" className="tile">
          <p>This is my activity graph</p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
