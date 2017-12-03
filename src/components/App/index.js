import React from 'react'
import Header from '../Header'
import Clock from '../Clock'
import styled from 'styled-components'
import config from '../../config'

const Wrapper = styled.div`
  background: ${config.color.main};
`

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Clock />
      </Wrapper>
    )
  }
}

export default App
