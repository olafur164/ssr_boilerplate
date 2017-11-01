import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <nav className='navbar navbar-toggleable-md navbar-inverse bg-inverse'>
        <button
          className='navbar-toggler navbar-toggler-right'
          type='button'
          role='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <Link to='/' className='navbar-brand'>React SSR Boilerplate</Link>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarNavAltMarkup'
        >
          <div className='navbar-nav'>
            <NavLink
              to='/signup'
              className='nav-item nav-link'
              activeClassName='active'
            >
              Signup
            </NavLink>
            <NavLink
              to='/login'
              className='nav-item nav-link'
              activeClassName='active'
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    )
  }
}
export default NavBar
