/*
The <a> element is used to create a hyperlink, in which
href is an attribute that specifies the URL to which the
link should navigate

The <ul> element is used to create an unordered list.
While <li> is used to define list items

TO DO LIST:
- Fix Hamburger Menu (Currently has no functionality)
*/

import React, { Component } from 'react'

class NavBar extends Component {
  state = {  } 
  render() { 
    return (
      <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Skyline Boat Club</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">About</a>
            </li>
            <li class="nav-item dropdown">

              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/about">About</a>
                <a class="dropdown-item" href="/Login">Login</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="/register">Register</a>
              </div>
            </li>
          </ul>

          <div>
            <a class="nav-link" href="/login">
              <button class="btn btn-outline-primary" type="button">Login</button>
            </a>
          </div>
          <div>
            <a class="nav-link" href="/registration">
              <button class="btn btn-sm btn-outline-secondary" type="button">Register</button>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
 
export default NavBar;