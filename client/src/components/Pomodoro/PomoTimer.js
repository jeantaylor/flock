// Import Libraries
import React, { Component } from "react";

export default class PomoTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomoToggleOff: this.props.pomoToggleOff,
      tracking: false,
      earnedPomos: 0,
      pomoLimit: this.props.preferences.shrtPerLng,
      shrtBreak: this.props.preferences.shrtBreak,
      lngBreak: this.props.preferences.lngBreak,
      wrkDur: this.props.preferences.wrkDur,
      minutes: 1,
      seconds: 0
    };
    this.startPomo = this.startPomo.bind(this);
  }

  startPomo() {
    this.setState({ tracking: true });
    this.interval = setInterval(() => {
      const { minutes, seconds } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }))
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.startPomo)
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }))
        }
      }

      if (minutes === 0 && seconds === 0) {
        clearInterval(this.interval);
        this.setState({ tracking: false, minutes: this.state.wrkDur });
      }
    }, 1000);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div className='pomo'>
        <div>Pomo Here!</div>
        {
          !this.state.tracking
          &&
          <>
            <div>Want to track?</div>
            <button type='button' onClick={this.startPomo}>Yee</button>
            <button type='button' onClick={this.state.pomoToggleOff}>Nuu</button>
          </>
        }
        {
          this.state.tracking
          &&
          <p>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
        }
      </div>
    );
  }
}
