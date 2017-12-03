import React from 'react'
import Header from '../Header'
import Clock from '../Clock'
import Button from 'muicss/lib/react/button'
import Container from 'muicss/lib/react/container'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Clock />
        </Container>
      </div>
    )
  }
}

export default App
