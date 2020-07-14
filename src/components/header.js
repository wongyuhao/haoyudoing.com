import React from 'react'
import {Link} from 'gatsby'

export default function Header(){
  return (
    <div>
      <h1> This is a header </h1>
      <p> bla bla bla I'm part of the header</p>
      <Link >tic tac toe</Link>
    </div>
  )
}