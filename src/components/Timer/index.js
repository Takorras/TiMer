import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from 'muicss/lib/react/button'
import moment from 'moment'
import config from '../../config'

const Wrapper = styled.div`
  color: ${config.color.text};
  text-align: center;
`

const TimerCell = styled.h2`
  font-size: 1.6em;
  margin-top: 0;
  margin-bottom: 0;
`

function Cell(props) {
  return (
    <TimerCell>{moment.unix(props.start).format('HH:mm:ss')} - {moment.unix(props.end).format('HH:mm:ss')} {props.end - props.start}</TimerCell>
  )
}

class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      history: [],
      counting: false,
      period: null
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.state.counting ? this.state.history.push({start: this.state.period, end: this.props.now}) : this.setState({period: this.props.now})
    this.setState({
      counting: !this.state.counting
    })
  }

  render() {
    const raps = this.state.history.map((element, index) => {
      return(
        <li key={index}>
          {Cell(element)}
        </li>
      )
    })

    return (
      <Wrapper>
        <Button size="large" onClick={this.handleClick}>
          {this.state.counting ? 'Stop' : 'Start'}
        </Button>
        <ol>{raps}</ol>
      </Wrapper>
    )
  }
}

Timer.propTypes = {
  now: PropTypes.number.isRequired
}

export default Timer
