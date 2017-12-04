import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import config from '../../config'

const Wrapper = styled.div`
  color: ${config.color.accent};
  text-align: center;
`

const Dating = styled.h1`
  font-size: 4.8em;
  margin-bottom: 0;
`

const Day = styled.h1`
  font-size: 2.4em;
  margin: 0;
`

const Time = styled.h1`
  font-size: 7.2em;
  margin: 16px;
`

class Clock extends React.Component {

  componentWillMount(){
    this.setState({moment: moment()})
  }

  componentDidMount() {
    setInterval(() => {this.setState({moment: moment()})}, 1000)
  }

  render(){
    return (
      <Wrapper>
        <Dating>{this.state.moment.format("YYYY-MM-DD")}</Dating>
        <Day>{this.state.moment.format("dddd")}</Day>
        <Time>{this.state.moment.format("HH:mm:ss")}</Time>
      </Wrapper>
    )
  }
}

export default Clock
