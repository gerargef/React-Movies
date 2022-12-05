import React from 'react'

function Header() {
  return (
    <nav className='deep-purple lighten-1'>
    <div className="nav-wrapper ">
      <a href="#" className="brand-logo center">React Movies</a>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="!#">Repo</a></li>
      </ul>
    </div>
  </nav>
  )
}

export default Header