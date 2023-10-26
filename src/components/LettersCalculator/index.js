import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeEvent = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="container">
        <div className="one">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="img-size"
            alt="letters calculator"
          />
        </div>
        <div className="two">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="label-input">
            <label htmlFor="res" className="para">
              Enter the phrase
            </label>
            <input
              id="res"
              type="text"
              className="input-size"
              placeholder="Enter the phrases"
              onChange={this.onChangeEvent}
            />
          </div>
          <div className="noOfLetters">
            <p>No.of letters: {count}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
