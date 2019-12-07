// Import Libraries
import React, { Component } from "react";

export default class PomoTimer extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      tracking: "",
      earnedPomos: 0,
      pomoLimit: this.props.preferences.shrtPerLng,
      shrtBreak: this.props.preferences.shrtBreak,
      lngBreak: this.props.preferences.lngBreak,
      minutes: this.props.preferences.wrkDur,
      seconds: 0
    }; 
    this.startPomo = this.startPomo.bind(this); 
  }


 

  startPomo() {
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
    }, 1000);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div className='pomo'>
        <div>Pomo Here!</div>
        <p>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <button type='button' onClick={this.startPomo}>Start!</button>
      </div>
    );
  }
}
