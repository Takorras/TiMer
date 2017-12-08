import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import config from '../../config'
import Clock from '../Clock'
import Timer from '../Timer'

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
    }
  }

  compnentWillMount() {
    this.setState = {
      now: moment().unix()
    }
  }

  componentDidMount() {
    setInterval(() => { this.setState({now: this.state.now + 1})}, 1000)
  }

  render() {
    return (
      <Wrapper>
        {Clock(this.state.now)}
        <Timer now={this.state.now}/>
      </Wrapper>
    )
  }
}

export default App
