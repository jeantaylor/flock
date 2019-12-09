/// Import Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dock extends Component {
  state = {
    username: "julio",
    userId: "5de334179e70eb23286d8b3e"
  };

  render() {
    return (
      <div className='dock'>
        <div className='dock__hero'>
          <div className='dock__heroTitle'>Flock</div>
          <div className='dock__heroSplashTxt'>
            where your ideas come together
          </div>
        </div>
        <div className='dock__welcome'>
          <div className='dock__welcome--txtWrapper'>
            <div className='dock__welcome--greeting'>Ready to go</div>
            <div className='dock__welcome--user'>{this.state.username}?</div>
          </div>
          <Link to='/todos/5de334179e70eb23286d8b3e/restaurant'>
            <button className='dock__enterCta'>
              I'm ready!
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
