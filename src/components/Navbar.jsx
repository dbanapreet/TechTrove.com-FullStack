import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <>

    <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>

      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <h1 className="navbar-brand" href="#" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.title}</h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

       <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{ marginLeft: '1050px' }}>
  <li className="nav-item">
    <NavLink className="nav-link active" aria-current="page" to="/" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Home</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/service" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Services</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to="/contact" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Contact</NavLink>
  </li>
</ul>

<div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ marginLeft: '140px' }}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark</label>
</div>

  </div>
  </div>
   </nav>
   </div>
   </div>
   </div>

    </>
  )
}

export default Navbar
