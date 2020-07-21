import React from "react"



import MainCard from '../components/MainCard'
import Layout from '../components/Layout'
import {Container} from 'react-bootstrap'


import {Slide} from 'react-reveal';



const App = ()=>{

  return (


   
     <Layout>
        <Container>

        <Slide bottom duration={400}>
          <MainCard/>
        </Slide>
        
        </Container>
      </Layout>
   


      
  )
}

export default App