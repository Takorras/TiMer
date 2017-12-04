import React from 'react'
import Option from 'muicss/lib/react/option'
import Select from 'muicss/lib/react/select'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

function Header() {
  return (
    <Wrapper>
      <Select defaultValue="JST">
        <Option value="JST" label="JST" />
      </Select>
    </Wrapper>
  )
}

export default Header
