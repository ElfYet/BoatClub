/*
The <a> element is used to create a hyperlink, in which
href is an attribute that specifies the URL to which the
link should navigate

The <ul> element is used to create an unordered list.
While <li> is used to define list items
*/

import React, { useState } from 'react'

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <a className="navbar-brand" href="/">Skyline Boat Club</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item dropdown">

            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/about">About</a>
              <a className="dropdown-item" href="/Login">Login</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/register">Register</a>
            </div>
          </li>
        </ul>

        <div>
          <a className="nav-link" href="/login">
            <button className="btn btn-outline-primary" type="button">Login</button>
          </a>
        </div>
        <div>
          <a className="nav-link" href="/registration">
            <button className="btn btn-sm btn-outline-secondary" type="button">Register</button>
          </a>
        </div>
      </div>
    </nav>
  );
}
 
export default NavBar;