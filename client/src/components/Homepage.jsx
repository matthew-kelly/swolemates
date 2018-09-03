import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Homepage extends Component {

  render() {
    if (this.props.appState.isLoggedIn !== true) {
      return(
        <div id="homepageContainer">
        <nav className="navbar">
          <span><a href='/login'><i className="far fa-user-circle"></i>Login</a></span>
          <span><a href='/register'><i className="far fa-calendar"></i>Register</a></span>
        </nav>
        <div id="homepageLogoContainer">
            <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='481.482' height='481.482' viewBox='0 0 481.482 481.482'><g id='_x31_7_51_'>
            <path d='M187.383,112.446c23.751,0,43.003-19.252,43.003-42.999c0-23.746-19.252-42.998-43.003-42.998 c-23.745,0-42.997,19.252-42.997,42.998C144.386,93.194,163.637,112.446,187.383,112.446z'
            />
            <path d='M201.427,168.63c14.601,25.078,28.466,50.598,41.783,76.393c-19.684,10.062-42.975,27.699-54.849,37.328 c-11.874,9.63-34.012,58.849-45.395,82.382c-12.228,25.272,27.115,43.604,39.298,18.438 c10.041-20.741,26.951-62.021,36.794-70.124c9.843-8.104,42.155-30.97,66.806-39.557c1.213-0.424,2.317-0.928,3.364-1.488 c30.175,38.297,89.277,56.387,139.688,26.928c26.562-15.524,2.536-53.799-24.104-38.228 c-36.924,21.593-75.352-6.017-92.753-40.587c-17.402-34.571-29.732-58.904-43.838-83.386c27.547-8.786,52.733-0.761,72.54,26.978 c16.108,22.568,53.787,0.927,37.495-21.908c-38.337-53.687-95.5-67.011-152.731-33.035c-2.378,1.413-13.122,7.333-15.543,8.77 c-35.576,21.12-68.637,17.116-93.326-17.468c-16.12-22.57-53.791-0.929-37.487,21.903 C110.668,166.094,154.895,182.887,201.427,168.63z'
            />
            <path d='M461.989,416.046H72.901L42.228,240.731h77.229c10.767,0,19.494-8.728,19.494-19.494s-8.728-19.493-19.494-19.493H19.493 C8.727,201.744,0,210.472,0,221.237v2.657c0,1.126,0.098,2.25,0.291,3.359l37.028,211.646 c1.633,9.328,9.732,16.134,19.202,16.134h405.468c10.766,0,19.493-8.728,19.493-19.493 C481.482,424.773,472.755,416.046,461.989,416.046z'
            />
          </g>
        </svg>
        <div id="homepageTitle">
          <h1>SWOLE<br/>MATES</h1>
        </div>
        </div>
      </div>
      );
    }
    return <Redirect to='/dashboard'/>
  }
}

export default Homepage;


