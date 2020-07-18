import React from 'react'
import footerStyles from '../styles/footerStyles.module.scss'

export default function Footer (){
  return (
    
    <footer className= "fixed-bottom text-muted" >
      <p className ={footerStyles.footer}>Yu Hao Wong © 2020</p>
    </footer>

  )
}