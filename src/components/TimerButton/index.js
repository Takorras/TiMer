import React from 'react'
import styled from 'styled-components'
import Button from 'muicss/lib/react/button'

const Wrapper = styled.div`
  text-align: center;
`

const TimerButton = (props) => (
  <Wrapper>
    <Button onClick = {props.onClick} >
      {props.counting ? 'Stop' : 'Start'}
    </Button>
  </Wrapper>
)

export default TimerButton
