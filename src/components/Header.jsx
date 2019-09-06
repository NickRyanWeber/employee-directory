import React, { useEffect } from 'react'
import M from 'materialize-css'

const Header = () => {
  useEffect(() => {
    M.AutoInit()
  }, [])
  return (
    <nav>
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo">
          Rabble House
        </a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/directory">Employee Directory</a>
          </li>
          <li>
            <a href="/new-employee">Add New Employee</a>
          </li>
        </ul>
        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="/directory">Employee Directory</a>
          </li>
          <li>
            <a href="/new-employee">Add New Employee</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
