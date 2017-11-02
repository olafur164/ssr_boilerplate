import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class NavBar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light" role="navigation">
          <Link to='/' className='navbar-brand'>Pumba</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to='/' className='nav-link'>Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/students' className='nav-link'>Students</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/attendance' className='nav-link'>Attendance</NavLink>
            </li>
          </ul>
        </div>
      </nav> 
    )
  }
}
export default NavBar
