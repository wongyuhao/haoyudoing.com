import React from 'react'
import Header from './Header'
import Footer from './Footer'



export  default function Layout(props){
  return (
    <div>
      <div>
        <Header />
        {props.children}
      </div>
    <Footer />
    </div>
  )
}