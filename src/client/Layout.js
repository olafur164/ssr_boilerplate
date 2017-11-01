import React from 'react'
import { withRouter } from 'react-router-dom'
import FlashMessageContainer from './components/FlashMessageContainer'
import NavBar from './components/NavBar'
import { element, object } from 'prop-types'

const Layout = ({ children, location }) => (
  <div>
    <FlashMessageContainer />
    <NavBar />
    {children}
  </div>
)

Layout.propTypes = {
  children: element,
  location: object
}

export default withRouter(Layout)
