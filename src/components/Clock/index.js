import React from 'react'
import moment from 'moment'
import styled from 'styled-components'

class Clock extends React.Component {

  render(){

    const m = moment()

    const Wrapper = styled.div`
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

    return (
      <Wrapper>
        <Dating>{m.format("YYYY-MM-DD")}</Dating>
        <Day>{m.format("dddd")}</Day>
        <Time>{m.format("HH:mm:ss")}</Time>
      </Wrapper>
    )
  }
}

export default Clock
