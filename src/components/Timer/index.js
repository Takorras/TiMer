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
        const start = history.start
        const end = history.end
        const now = props.now

        const value = `${moment.unix(start).format('HH:mm:ss')} -
        ${end ? moment.unix(end).format('HH:mm:ss') : moment.unix(now).format('HH:mm:ss')} -
        ${end ? moment.unix(end - start - 32400).format('HH:mm:ss') : moment.unix(now - start - 32400).format('HH:mm:ss')}`

        return (
          <li key = {index}>
            <TimerCell> {value} </TimerCell>
          </li>
        )
      })}
    </ol>
  </Wrapper>
)

Timer.propTypes = {
  now: PropTypes.number,
  histories: PropTypes.array,
}

export default Timer
