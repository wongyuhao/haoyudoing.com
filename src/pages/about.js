import React from 'react'
import Layout from '../components/Layout'


import AboutCard from '../components/AboutCard'

import {Container} from 'react-bootstrap'
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