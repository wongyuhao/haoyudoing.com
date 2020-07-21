import React from 'react'
import Header from './Header'
import Footer from './Footer'



export  default function Layout(props){
  return (
    <div>
<<<<<<< HEAD
      <div className='pb-3' >
=======
      <div>
>>>>>>> b797655cd1ff5065df844159549370ddddb4acb5
        <Header />
        {props.children}
      </div>
    <Footer />
    </div>
  )
}