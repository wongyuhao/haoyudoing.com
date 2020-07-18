import React from "react"
import {Link} from 'gatsby'

import Layout from '../components/Layout'
import MainCard from '../components/MainCard'

import 'bootstrap/dist/css/bootstrap.min.css'
import {Slide, Rotate} from 'react-reveal';

const App = ()=>{
  window.pageExitTime = 10000000
  return (
    <Layout>
      <div className="container">
 
        <Slide bottom duration={400}>
          <MainCard/>
        </Slide>
      </div>{/*end container */}

    </Layout>
  )
}

export default App