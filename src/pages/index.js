import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'

import MainCard from '../components/MainCard'
import AboutCard from '../components/AboutCard'
import ProfilesCard from '../components/ProfilesCard'

import {motion} from 'framer-motion'





export default  ()=>(

 <motion.div>
      <AboutCard/>
      <MainCard/>
      <ProfilesCard/>
 </motion.div>
)
  
