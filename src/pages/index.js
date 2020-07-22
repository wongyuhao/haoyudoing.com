import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'

import MainCard from '../components/MainCard'
import AboutCard from '../components/AboutCard'
import ProfilesCard from '../components/ProfilesCard'
import Layout from '../components/Layout'
import {Container} from 'react-bootstrap'



import {Slide} from 'react-reveal';



const App = ()=>{

  return (


   
     <Layout>
        <Container>

        <Slide bottom duration={400}>
          <AboutCard/>
          <MainCard/>
          <ProfilesCard/>
        </Slide>
        
        </Container>
      </Layout>
   


      
  )
}

export default App