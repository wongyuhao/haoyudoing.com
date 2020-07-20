import React from 'react'
import Layout from '../components/Layout'


import AboutCard from '../components/AboutCard'

import {ListGroup, Container} from 'react-bootstrap'
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