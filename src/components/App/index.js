import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import config from '../../config'
import Clock from '../Clock'
import Timer from '../Timer'
import TimerButton from '../TimerButton'

const Wrapper = styled.div`
  background: ${config.color.main};
  justify-content: center;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      now: moment().unix(),
      histories: [],
      counting: false,
    }
  }

  componentDidMount() {
    setInterval(() => { this.setState({now: this.state.now + 1})}, 1000)
  }

  handleClick(){
    this.setState({counting: !this.state.counting})

    if (this.state.counting) {
      let stateCopy = this.state.histories.slice()
      stateCopy[this.state.histories.length - 1].end = this.state.now
      this.setState({histories: stateCopy})
    } else {
      this.state.histories.push({
        start: this.state.now,
        end: null,
      })
    }
  }

  render() {
    return (
      <Wrapper>
        {Clock(this.state)}
        <TimerButton counting = {this.state.counting} onClick = {() => this.handleClick()} />
        {Timer(this.state)}
      </Wrapper>
    )
  }
}

export default App
