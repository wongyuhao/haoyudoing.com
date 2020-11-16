import React from 'react';
import {useStaticQuery} from 'gatsby'
import ReactPlayer from 'react-player/lazy';
import styled from 'styled-components';
import {Container, Col, Row, Card} from 'react-bootstrap';

export default () => {
  const {gcms: {podcast}} = useStaticQuery(graphql`
  query PodQuery {
    gcms{
    podcast(where: {id: "ckh22odx406wn0a83jzrgt1g7"}) {
      id
      sourceUrl
      linkdump
      publishedAt
      description
      title
      episodeNumber
    }
  }
  }`)

  return (
    <Container>
      {console.log()}
      
       
        <Col>
        <h1>{podcast.title}</h1>
        <h3>Episode {podcast.episodeNumber}</h3>
          <ReactPlayer
            url={podcast.sourceUrl}
            controls
            width='100%'
            />
        </Col>
        <Col>
        <Card className='border-0 shadow rounded mb-3'><Card.Body><Card.Text>
        {podcast.description}
        </Card.Text></Card.Body></Card>

        <Card className='border-0 shadow rounded '><Card.Body>
          <Card.Title>
          More interesting stuff:
          <hr/>
          </Card.Title>
          <Card.Text className='d-flex flex-column'>
            {podcast.linkdump.links.map(
              (link,i) => (
              <a href={link.url} key={i}>{link.title}</a>
              )
            )}
          </Card.Text>
        
        </Card.Body></Card>
        </Col>






    </Container>



  )
}