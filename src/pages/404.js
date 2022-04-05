import React from 'react'

import {Card} from 'react-bootstrap'
import {Link} from 'gatsby'



export default () =>(
    <Card>
      
      <Card.Body className = 'text-center'>
      <Card.Title>
        <strong>404</strong>
      </Card.Title>
        There's nothing here! <br/>
        <Link to='/'>Return to the homepage</Link>
        
      </Card.Body>
    </Card>


)