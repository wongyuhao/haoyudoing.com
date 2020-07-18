import React from 'react'
import cardStyles from '../styles/cardStyles.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard,faKeyboard, faPaperPlane,faCode,faUserFriends} from '@fortawesome/free-solid-svg-icons'

import {Fade} from 'react-reveal'

import {Link} from 'gatsby'
const MainCard = () =>(
  <div class="row justify-content-center ">
    <div class="col-md-5">
        <div class ='card h-100'>
          <div class="card-body">
            <p>
              Hey there! I'm Hao and welcome to my site! 
              <br/>
              <br/>
              Please forgive the white void everywhere as we are currently migrating from our old home.
              <br/>
              <br/>
              In the meantime, you can visit the old site <a href="https://wongyuhao.github.io">here</a>
            </p>
          </div>
        </div>
    </div>

  <div class="col-md-5">
    <div class="card col-auto mx-auto" >
      <div class="card-body ">
       
         <ul class="list-group list-group-flush">
           <li  className='list-group-item list-group-item-action'>
             <Link to="/about" ><FontAwesomeIcon icon={faAddressCard}/> About Me</Link>
           </li>
           <li  className='list-group-item list-group-item-action'>
             <Link to="/code" ><FontAwesomeIcon icon={faCode}/> Code</Link>
             </li>
           <li  className='list-group-item list-group-item-action'>
             <Link to="/events"><FontAwesomeIcon icon={faUserFriends}/> Events</Link>
             </li>
           <li  className='list-group-item list-group-item-action'>
             <Link to="/mk"><FontAwesomeIcon icon={faKeyboard}/> Mechanical Keyboards</Link>
             </li>
           <li  className='list-group-item list-group-item-action'>
             <Link to="/contact"><FontAwesomeIcon icon={faPaperPlane}/> Get in Touch</Link>
             </li>
         </ul>

      </div>
    </div> 
  </div>

  </div>
 

 
)

export default MainCard