import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
export default function Navbars() {
  return (
<>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-5">
           
            <img alt="logo" src={logo}
                   width="90" height="90"/>
              
                <a class="navbar-brand" href="#!">ACM IIT ROORKEE</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/">Home</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/About">About</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/Blogs">Blogs</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/Project">Projects</Link></li>
                        {/* <li class="nav-item"><Link class="nav-link" to="/Events">Events</Link></li> */}
                        <li class="nav-item"><Link class="nav-link" to="/Team">Team</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
</>
  );
}


