import React from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.png';



export default function Events()  {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container px-5">
           
            <img alt="logo" src={logo}
                   width="90" height="90"/>
              
                <a class="navbar-brand" href="#!">ACM IIT ROORKEE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item"><a class="nav-link active" aria-current="page" href="/">Home</a></li>
                    <li class="nav-item"><Link class="nav-link" to="/About">About</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/Blogs">Blogs</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/Project">Projects</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/Events">Events</Link></li>
                        <li class="nav-item"><Link class="nav-link" to="/Team">Team</Link></li>
                    </ul>
                </div>
            </div>
        </nav>

            
        
    )
  }
