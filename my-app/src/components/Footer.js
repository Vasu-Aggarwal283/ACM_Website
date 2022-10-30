import React from 'react'
import insta from './insta.png';
import git from './git.png';
import dc from './dc.png';
export default function Footer() {
  return (
    <footer class="py-5 bg-dark">
      <div class="container px-5" align='center'>
        <span>
        <a href="#" class='m-2'>
         <img alt="Qries" src={git}
         width="35" height="35"/>
      </a></span>
      <span>
      <a href="#" class='m-2'>
         <img alt="Qries" src={dc}
         width="35" height="35"/>
      </a></span>
      <span>
      <a href="#" class='m-2'>
         <img alt="insta" src={insta}
         width="35" height="35"/>
      </a></span>
        <p class="m-0 text-center text-white m-2">
        The IIT Roorkee ACM Student Chapter is an official open student body under the aegis of the Student Technical Council, IIT Roorkee.<br></br>
   Made with ♥ by Vasu
        </p>
        </div>
    </footer>

  )
}