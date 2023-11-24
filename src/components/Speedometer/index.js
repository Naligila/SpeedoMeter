import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  speedDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(state => ({speed: state.speed - 10}))
    }
  }

  onSpeedIncrement = () => {
    const {speed} = this.state
    console.log({speed})
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-count">Speed is {speed}mph</h1>
        <p className="caption">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-button"
            type="button"
            onClick={this.onSpeedIncrement}
          >
            Accelerate
          </button>
          <button className="brake" type="button" onClick={this.speedDecrement}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
