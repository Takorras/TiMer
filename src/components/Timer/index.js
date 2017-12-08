import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
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

const Timer = (props) => (
  <Wrapper>
    <ol>
      {props.histories.map((history, index) => {

        const value = `${moment.unix(history.start).format('HH:mm:ss')} -
        ${history.end ? moment.unix(history.end).format('HH:mm:ss') : '----'} -
        ${history.end ? history.end - history.start : ''}`

        return (
          <li key = {index}>
            <TimerCell>{value}</TimerCell>
          </li>
        )
      })}
    </ol>
  </Wrapper>
)

Timer.propTypes = {
  histories: PropTypes.array,
}

export default Timer
