import React from 'react'

class ClientList extends React.Component {
  render() {
    return (
      <div>
        <div>client list</div>
        <br />
        <br />
        <div>
          <a href="/clients/autogenerated-id-goes-here">client one</a>
          <br />
          <br />
          <a href="/clients/beep-beep-boop-boop">client two</a>
        </div>
      </div>
    )
  }
}

export default ClientList
