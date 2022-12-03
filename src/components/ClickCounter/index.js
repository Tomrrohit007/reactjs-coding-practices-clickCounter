import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div>
        <h1>
          The button has been clicked <span>{count}</span> times
        </h1>
        <p>Click the button increase the count</p>
        <button onClick={this.onIncrement} type="button">
          Click Me!
        </button>
      </div>
    )
  }
}

export default Counter
