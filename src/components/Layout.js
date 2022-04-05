import React from 'react'
import Header from './Header'
import Footer from './Footer'

import {Helmet} from 'react-helmet'
import {Container} from 'react-bootstrap'
import SimpleReactLightbox from 'simple-react-lightbox'
import ScrollToTop from "react-scroll-to-top";
import AngleUp from '../images/angle-up-solid.svg'


export  default function Layout(props){
  return (
   
    <SimpleReactLightbox>
    <ScrollToTop smooth component={<img src={AngleUp} alt={'scroll-to-top'}/>} />
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
    </SimpleReactLightbox>
  
  )
}