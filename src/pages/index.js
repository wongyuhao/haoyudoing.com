import React from "react"
import {Link} from 'gatsby'

import HeaderAlt from '../components/HeaderAlt'
import Footer from '../components/Footer'
import MainCard from '../components/MainCard'

import Layout from '../components/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Slide} from 'react-reveal';

const App = ()=>{
  
  return (
   <div>
     <Layout>
        <div className="container">
 
        <Slide bottom duration={400}>
          <MainCard/>
        </Slide>
        </div>
      </Layout>
    </div>


      
  )
}

export default App