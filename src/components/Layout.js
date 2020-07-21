import React from 'react'
import Header from './Header'
import Footer from './Footer'



export  default function Layout(props){
  return (
    <div>
      <div className='pb-3' >
        <Header />
        {props.children}
      </div>
    <Footer />
    </div>
  )
}