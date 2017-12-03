import React from 'react'
import Appbar from 'muicss/lib/react/appbar'

class Header extends React.Component {
  render() {

    const s1 = {
      verticalAlign: 'middle',
      color: 'white'
    }

    return (
      <div className="mui--bg-accent" style={{backgroundColor: '#3498db'}}>
        <Appbar>
        <table width="100%">
          <tbody>
            <td style={s1}>App</td>
          </tbody>
        </table>
        </Appbar>
      </div>
    )
  }
}

export default Header
