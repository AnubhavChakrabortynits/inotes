import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
const history=useHistory()
const logout=()=>{
  localStorage.clear()
  history.push("/login")
}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">iNOTEBOOK</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/about">About</Link>
          </li>
         
          
        </ul>
        <Link className='btn btn-warning mx-2 my-2' to="/register">Sign Up</Link>
        <Link className='btn btn-warning mx-2 my-2' to="/login">Login</Link>
    
         
        <button className="btn btn-outline-warning bg-danger mx-lg-3 my-3 my-lg-0" type="button" onClick={logout}>LOG OUT</button>

      </div>
    </div>
  </nav>
  )
}
