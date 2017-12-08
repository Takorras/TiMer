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

  let v = `${moment.unix(props.start).format('HH:mm:ss')} to
  ${props.end ? moment.unix(props.end).format('HH:mm:ss') : '--:--:--'}
  ${props.end ? props.end - props.start : '-'}`

  return (
    <TimerCell>{v}</TimerCell>
  )
}

Cell.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number
}

class Timer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      histories: [],
      counting: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    if (!this.state.counting) {
      this.state.histories.push({start: this.props.now, end: null,})
    } else {
      let stateCopy = this.state.histories.slice()
      stateCopy[stateCopy.length - 1].end = this.props.now
      this.setState({histories: stateCopy})
    }

    this.setState({
      counting: !this.state.counting
    })
  }

  renderCell(i) {
    const history = this.state.histories[i]
    let value = `${moment.unix(history.start).format('HH:mm:ss')} -
    ${history.end ? moment.unix(history.end).format('HH:mm:ss') : moment.unix(this.props.now).format('HH:mm:ss')}
    ${history.end ? history.end - history.start : this.props.now - history.start}`
    return (
      <TimerCell>{value}</TimerCell>
    )
  }

  render() {
    return (
      <Wrapper>
        <Button size="large" onClick={this.handleClick}>
          {this.state.counting ? 'Stop' : 'Start'}
        </Button>
        <ol>{this.state.histories.map((element, index) => {
          return (
            <li key={index}>
              {this.renderCell(index)}
            </li>
          )
        })}</ol>
      </Wrapper>
    )
  }
}

Timer.propTypes = {
  now: PropTypes.number.isRequired
}

export default Timer
