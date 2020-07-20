import React from 'react'
import {Card, ListGroup, Col, Row} from 'react-bootstrap'

export default ()=>(
  <Card>
    <Card.Header>
      <strong>Find me on other platforms:</strong>
    </Card.Header>
    <ListGroup>
      <Row>
      <Col className=' m-0 pr-0' >
      <ListGroup.Item action as='a' href='https://github.com/wongyuhao' target='_blank'>
        GitHub
      </ListGroup.Item>

      <ListGroup.Item action as='a' href='https://www.linkedin.com/in/yu-hao-wong-b21901194/' target='_blank'>
        Linkedin
      </ListGroup.Item>
      </Col>
      <Col className=' m-0 pl-0'>
      <ListGroup.Item action disabled as='a' href='https://github.com/wongyuhao' target='_blank'>
        Instagram
      </ListGroup.Item>

      <ListGroup.Item action disabled as='a' href='https://www.linkedin.com/in/yu-hao-wong-b21901194/' target='_blank'>
        Twitter
      </ListGroup.Item>
      </Col>
      </Row>

    </ListGroup>


  </Card>


)