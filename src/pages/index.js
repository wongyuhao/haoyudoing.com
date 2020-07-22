import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'

import MainCard from '../components/MainCard'
import AboutCard from '../components/AboutCard'
import ProfilesCard from '../components/ProfilesCard'
import Layout from '../components/Layout'




import {Slide} from 'react-reveal';



const App = ()=>{

  return (


   
     <Layout helmetTitle='Home'>
       
        <Slide bottom duration={1000}>
          <AboutCard/>
          <MainCard/>
          <ProfilesCard/>
        </Slide>
        
      </Layout>
   


      
  )
}

export default App