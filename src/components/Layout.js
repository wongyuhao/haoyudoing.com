import React from 'react'
import Header from './Header'
import Footer from './Footer'

import {Helmet} from 'react-helmet'
import {Container} from 'react-bootstrap'


export  default function Layout(props){
  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Haoyudoing?</title>
        </Helmet>
      <div>
        <Header />
        <Container className='mt-sm-2 mt-4'>
        {props.children}
        </Container>
      </div>
    <Footer />
    </div>
  )
}