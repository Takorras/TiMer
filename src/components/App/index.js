import React from 'react'
import Header from '../Header'
import Clock from '../Clock'
import Timer from '../Timer'
import styled from 'styled-components'
import config from '../../config'

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
  render() {
    return (
      <Wrapper>
        <Clock />
        <Timer />
      </Wrapper>
    )
  }
}

export default App
