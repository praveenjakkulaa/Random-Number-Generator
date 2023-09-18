import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNum: 0}

  genRandomNum = () => {
    this.setState({
      randomNum: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {randomNum} = this.state
    return (
      <div className="app-container">
        <div className="random-number-generator-container">
          <h1 className="heading"> Random Number </h1>
          <p> Generate a random number in the range of 0 to 100 </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.genRandomNum}
          >
            Generate
          </button>
          <p className="random-number"> {randomNum} </p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
