import React from 'react'
import PropTypes from 'prop-types'
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

const Clock = (props) => (
  <Wrapper>
    <Dating>{moment.unix(props.now).format('YYYY-MM-DD')}</Dating>
    <Day>{moment.unix(props.now).format('dddd')}</Day>
    <Time>{moment.unix(props.now).format('HH:mm:ss')}</Time>
  </Wrapper>
)

Clock.propTypes = {
  now: PropTypes.number.isRequired
}

export default Clock
