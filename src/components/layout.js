import React from 'react'
import Header from './header'
import Footer from './footer'

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