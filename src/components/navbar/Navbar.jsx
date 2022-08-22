import React from 'react'
import{
    Link
  } from "react-router-dom";
import './Navbar.css'



const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <h3>OpenAgent</h3>
    <div class="collapse navbar-collapse link-container" id="navbarTogglerDemo01">
      
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 link-list">
      <li class="nav-item">
          <Link className='nav-routes' to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-routes' to="/Login">Login</Link>
        </li>
        <li class="nav-item">
          <Link className='nav-routes' to="/SignUp">SignUp</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar