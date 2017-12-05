import React from 'react'
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

function Clock(props){
  return (
    <Wrapper>
      <Dating>{props.now}</Dating>
      <Day>{props.now}</Day>
      <Time>{props.now}</Time>
    </Wrapper>
  )
}

export default Clock
