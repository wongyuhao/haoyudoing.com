import React from 'react'

import {Link} from 'gatsby'
import {Card} from 'react-bootstrap'

export default (props) =>(
  <Card className='text-center'>
    <Card.Body>
      <Card.Text>
        {props.page} page coming soon! {' '}
        <Link to='/'>Return to the homepage</Link>
      </Card.Text>
    </Card.Body>
  </Card>


)