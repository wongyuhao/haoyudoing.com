import React from "react"
import {Link} from 'gatsby'

import HeaderAlt from '../components/HeaderAlt'
import Footer from '../components/Footer'
import MainCard from '../components/MainCard'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Slide} from 'react-reveal';

const App = ()=>{
  
  return (
   <div>
      <div>
        <HeaderAlt />
        <div className="container">
 
        <Slide bottom duration={400}>
          <MainCard/>
        </Slide>
      </div>
      </div>
    <Footer />
    </div>
      
  )
}

export default App