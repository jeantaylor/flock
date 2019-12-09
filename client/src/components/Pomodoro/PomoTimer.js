// Import Libraries
import React, { Component } from "react";

export default class PomoTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pomoToggleOff: this.props.pomoToggleOff,
      tracking: false,
      onBreak: false,
      earnedPomos: 0,
      collectingPomo: false,
      pomoLimit: this.props.preferences.shrtPerLng,
      shrtBreak: this.props.preferences.shrtBreak,
      lngBreak: this.props.preferences.lngBreak,
      wrkDur: this.props.preferences.wrkDur,
      minutes: 1,
      seconds: 0
    };
    this.startPomo = this.startPomo.bind(this);
    this.collectPomo = this.collectPomo.bind(this);
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
      console.log("tick");
      if (minutes === 0 && seconds === 0) {
        clearInterval(this.interval);
        this.setState({ collectingPomo: true, minutes: this.state.wrkDur, tracking: false });
      }
    }, 1000);
  }

  collectPomo() {
    this.setState({ collectingPomo: false, earnedPomos: this.state.earnedPomos + 1 });
    if (this.state.earnedPomos <= this.state.pomoLimit) {
      this.setState({ minutes: this.state.shrtBreak })
    } else {
      this.setState({ minutes: this.state.lngBreak })
    };

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
      console.log("tick");
      if (minutes === 0 && seconds === 0) {
        clearInterval(this.interval);
        this.setState({ minutes: this.state.wrkDur });
      }
    }, 1000);
  }

  render() {
    const { minutes, seconds } = this.state;
    return (
      <div className='pomo' >
        <div>Pomo Here!</div>
        {
          !this.state.tracking
          &&
          <>
            {!this.state.collectingPomo
              ?
              <>
                <div>Want to track?</div>
                <button type='button' onClick={this.startPomo}>Yee</button>
                <button type='button' onClick={this.state.pomoToggleOff}>Nuu</button>
              </>
              :
              <>
                <div>Time to collect your pomodoro!</div>
                <button type='button' onClick={this.collectPomo}>Hoorah!</button>
              </>
            }
          </>
        }
        {
          this.state.tracking
          &&
          <p>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </p>
        }
      </div >
    );
  }
}
