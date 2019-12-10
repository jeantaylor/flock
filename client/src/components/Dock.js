/// Import Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/// Import Assets 
import Birb from '../assets/images/birb.svg';

export default class Dock extends Component {
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
            <div className='dock__welcome--user'>{this.props.user}?</div>
            <Link to='/todos/5de334179e70eb23286d8b3e/restaurant'>
              <button className='dock__enterCta'>
                <img className='dock__birb' src={Birb} alt='Welcome Birb!' />
              </button>
            </Link>
          </div>

        </div>
      </div>
    );
  }
}
