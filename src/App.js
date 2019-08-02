import React from 'react';
import './App.css';
import beep from './beep-01a.wav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    React.createRef()
    this.audio = React.createRef()

    this.state = {
      breakLength: 5,
      sessionLength: 25,
      minutes: 25,
      seconds: 0,
      timer: null,
      inSession: true,
      paused: true
      };
  }

  decrementBreak = () => {
    if (this.state.breakLength !== 1) {
      this.setState({breakLength: this.state.breakLength - 1});
    }
    if (!this.state.inSession) {
      if (this.state.minutes !== 1) {
        this.setState({minutes: this.state.minutes - 1});
      }
    }
  }

  // Decrement session length with min value set to 1 min
  decrementSession = () => {
    if (this.state.sessionLength !== 1) {
      this.setState({sessionLength: this.state.sessionLength - 1});
    }
    if (this.state.inSession) {
      if (this.state.minutes !== 1) {
        this.setState({minutes: this.state.minutes - 1});
      }
    }
  }

  incrementBreak = () => {
    if (this.state.breakLength !== 60) {
      this.setState({breakLength: this.state.breakLength + 1});
    }
  }

  incrementSession = () => {
    if (this.state.sessionLength !== 60) {
      this.setState({sessionLength: this.state.sessionLength + 1});
    }
    if (this.state.inSession && this.state.minutes !== 60) {
      this.setState({minutes: this.state.minutes + 1});
    }
  }

  tick() {
    // reached end of the timer, switch to other timer
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      //console.log("end of session");

      this.beep = new Audio(beep);
      this.beep.play();
      if (this.state.inSession) {
        //console.log("set break session");
        // set break session
        this.setState({minutes: this.state.breakLength,
        inSession: false});
      }
      else {
        //console.log("set session length");
        this.setState({minutes: this.state.sessionLength,
        inSession: true});
      }
    }

    // decrement minutes after seconds reaches 0
    // needs to be before decrementing the second
    if (this.state.seconds === 0) {
      console.log("sec = 0");
      this.setState({minutes: this.state.minutes - 1});
      this.setState({seconds: 60});
    }

    this.setState({seconds: this.state.seconds - 1});
  }

  toggleStart = () => {
    if (this.state.paused) {
      // resume timer
      let timer = setInterval(this.tick, 1000);
      this.setState({timer});
      this.setState({paused: false});    
    }
    else {
      // pause timer
      clearInterval(this.state.timer);
      this.setState({paused: true});
    }
  }

  startTimer = () => {
    let timer = setInterval(this.tick, 1000);
    this.setState({timer});
    this.setState({paused: false});
    this.audio.current.play();
  }

  pauseTimer = () => {
    clearInterval(this.state.timer);
    this.setState({paused: true});
  }

  // Reset all counters back to default values
  reset = () => {
    // stop timer if running
    if (!this.state.paused) {
      clearInterval(this.state.timer);
      this.setState({paused: true});
    }
    // reset values to default
    this.setState({
      breakLength: 5, 
      sessionLength: 25,
      minutes: 25,
      seconds: 0,
      inSession: true
    });
  }

  formatSeconds = () => {
    if (this.state.seconds === 60) {
      return "00";
    }
    if (this.state.seconds < 10) {
      return "0" + this.state.seconds;
    }
    else {
      return this.state.seconds;
    }
  }

  render() {
    let startPauseBtn = (this.state.paused) ?
    <img src="./play.svg" id="start_stop" alt="play-pause" style={{'maxWidth': '100px'}}
      onClick={this.toggleStart} /> :
    <img src="./pause.svg" id="start_stop" alt="play-pause" style={{'maxWidth': '100px'}} 
      onClick={this.toggleStart} /> 

  return (
    <div id="container">
      <div id="title">Pomodoro Clock</div>
      <div id="timer-settings">
        <div className="break-container">
          <div id="break-label" className="text-label">
            Break Length
          </div>
          <div className="timer-control">
            <button
              id="break-decrement"
              className="length-btn"
              onClick={this.decrementBreak}
            >
              -
            </button>
            <span id="break-length" className="length-text">
              {this.state.breakLength}
            </span>
            <button
              id="break-increment"
              className="length-btn"
              onClick={this.incrementBreak}
            >
              +
            </button>
          </div>
        </div>
        <div className="break-container">
          <div id="session-label" className="text-label">
            Session Length
          </div>
          <div className="timer-control">
            <button
              id="session-decrement"
              className="length-btn"
              onClick={this.decrementSession}
            >
              -
            </button>
            <span id="session-length" className="length-text">
              {this.state.sessionLength}
            </span>
            <button
              id="session-increment"
              className="length-btn"
              onClick={this.incrementSession}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div id="timer-container">
        <div id="timer-label">
          {this.state.inSession ? "Session" : "Break"}
        </div>
        <div id="time-left">
          {this.state.minutes}:{this.formatSeconds()}
        </div>
        <div id="control-container">
          {startPauseBtn}
          <img
            src="./reset.svg"
            id="reset"
            alt="reset"
            style={{ 'maxWidth': '100px' }}
            onClick={this.reset}
          />
        </div>
      </div>
      <audio
        id="beep"
        ref={this.audio}
        src="https://www.soundjay.com/clock/alarm-clock-01.wav"
      />
    </div>
  );
  }
}

export default App;
