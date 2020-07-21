import React from 'react'
import Layout from '../components/Layout'


import AboutCard from '../components/AboutCard'

<<<<<<< HEAD
import {Container} from 'react-bootstrap'
=======
import {ListGroup, Container} from 'react-bootstrap'
>>>>>>> b797655cd1ff5065df844159549370ddddb4acb5
import ProfilesCard from '../components/ProfilesCard'



const about = ()=>(
  <div>
    <Layout>
      <Container>
        <AboutCard/>
        <ProfilesCard/>

      </Container>

    </Layout>
  </div>
)

export default about