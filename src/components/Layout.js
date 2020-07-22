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
          <title>{props.helmetTitle ? `Haoyudoing?  |  ${props.helmetTitle}`: 'Haoyudoing?'}</title>
        </Helmet>
      <div className='pb-3' >
        <Header />
        <Container>
        {props.children}
        </Container>
      </div>
    <Footer />
    </div>
  )
}