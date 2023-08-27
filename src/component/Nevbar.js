import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class Nevbar extends Component {
  render() {
    return (
        <>
  <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
  
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Top Headlines</h5>
        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
          <Link className="navbar-brand" to="/home"><button className="btn btn-primary " >Headlines</button></Link> </li>
          <li className="nav-item"> <Link className="navbar-brand" to="/business"><button className="btn btn-outline-warning " >Business</button></Link> </li>
          <li className="nav-item"><Link className="navbar-brand" to="/entertainment"><button className="btn btn-outline-warning " >Entertainment</button></Link> </li>
          <li className="nav-item"> <Link className="navbar-brand" to="/general"><button className="btn btn-outline-warning " >General</button></Link> </li>
          <li className="nav-item"> <Link className="navbar-brand" to="/health"><button className="btn btn-outline-warning" >Health</button></Link> </li>
          <li className="nav-item"><Link className="navbar-brand" to="/science"><button className="btn btn-outline-warning " >Science</button></Link> </li>
          <li className="nav-item"> <Link className="navbar-brand" to="/sports"><button className="btn btn-outline-warning " >Sports</button></Link> </li>
          <li className="nav-item"> <Link className="navbar-brand" to="/technology"><button className="btn btn-outline-warning" >Technology</button></Link> </li>
         
       
        
        </ul>
       
      </div>
    </div>
  </div>
</nav>
       
      </>
    );
  }
}

export default Nevbar;

