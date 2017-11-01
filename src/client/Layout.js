import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FlashMessageContainer from './components/FlashMessageContainer'
import { element, object } from 'prop-types'
import Routes from './components/Router/Routes'

class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { children, location } = this.props
    return (
      <div>
        <FlashMessageContainer />
        {children}
      </div>
    )
  }
}

Layout.propTypes = {
  children: element,
  location: object
}

/*
const Layout = ({ children, location }) => (
  <div>
    <FlashMessageContainer />
    test
    {console.log("test")}
  </div>
)

Layout.propTypes = {
  children: element,
  location: object
}
*/

export default withRouter(Layout)