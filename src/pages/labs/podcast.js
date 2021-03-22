import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import ReactPlayer from 'react-player/lazy';
import moment from 'moment'
import {Container, Col, Row, Card} from 'react-bootstrap';




export default () => {
  const {gcms: {podcast}} = useStaticQuery(graphql`
  query PodQuery {
    gcms{
    podcast(where: {id: "ckh22odx406wn0a83jzrgt1g7"}) {
      id
      sourceUrl
      linkdump
      createdAt
      description
      title
      episodeNumber
    }
  }
  }`)

  console.log(podcast.linkdump.links);
  return (
    <Container>
      <Row>
        <Col className='col-12 col-md-7 col-lg-7'>
          <Card className='border-0 shadow rounded'>
            <div className='d-flex flex-row nowrap align-items-center justify-content-between px-3 py-3 '>
              <h3><strong>{podcast.title}</strong></h3>
              <h2>#{podcast.episodeNumber}</h2>
            </div>
          
            
          </Card>
        <Card>
          <ReactPlayer
            url={podcast.sourceUrl}
            controls
            width='100%'
            
            />
            <Card.Footer>
            <strong className='p-0 m-0 text-muted'>Recorded {moment(podcast.createdAt, "YYYY-MM-DD").format("DD MMMM 'YY")}</strong>
            </Card.Footer>
          </Card>
        </Col>
        
        <Col>
        <scrollDiv>
        <Card className='border-0 shadow rounded mb-3'><Card.Body><Card.Text>
        {podcast.description}
        </Card.Text></Card.Body></Card>

        <Card className='border-0 shadow rounded '><Card.Body>
          <Card.Title>
            <em>Read more:</em>
      
          </Card.Title>
          <Card.Body className='d-flex flex-column p-0 pb-2'>
            {podcast.linkdump.links.map(
              (link,i) => (
                <Card className='p-3 my-1 shadow-sm border-0' key={i}  >
                  <a href={link.url} target="_blank"  rel='noreferrer noopener' >{link.title}</a>
                </Card>
              )
            )}
          </Card.Body>
        
        </Card.Body></Card>
        </scrollDiv>
        </Col>
      </Row>
    </Container>



  )
}