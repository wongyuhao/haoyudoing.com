import React from 'react'
import {Card, Table, Row , Col, Button} from 'react-bootstrap';
import AutoFitImage from 'react-image-autofit-frame';
import {graphql, navigate, Link} from 'gatsby'
import ReactMarkdown from 'react-markdown';
import { SRLWrapper } from "simple-react-lightbox";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'
import moment from 'moment'
import styled from 'styled-components'

const renderers = {
  image: ({alt,src,title,}) => (
    
    <div style={{width:'100%'}} className='d-flex justify-content-center py-4'>
      <Card className='border-0 shadow rounded'>
        <div className='text-center'>
          <img style={{maxHeight:'60vh',maxWidth:'100%'}} src ={src} alt={alt} title={title}/>
        </div>
        <Card.Body className='p-2 text-center'>  
          <div style={{fontFamily:'monospace'}} className='m-0'>{alt}</div>
        </Card.Body>
      </Card>
    </div>
    
  ),
  paragraph: props => <div className='px-sm-2 px-md-3 px-lg-4 px-xl-5' style={{fontSize:'1.15em'}} {...props} />,

};

const SoundtestButton = styled(Button)`
`

export default ({data:{gcms:{mk}}})=>{

  const soundtest = mk.soundtestLink ?
          <SoundtestButton 
            className='w-50 py-2' 
            variant='danger' 
            href={mk.soundtestLink} 
            target='_blank' 
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faYoutube} className='mr-2 ml-0'/>
            <strong>Sound Test</strong>
          </SoundtestButton>
          : <></>



  return(
   <>
  <SRLWrapper>
   <Card className='border-0 shadow' >
      <div style={{height:'40vh', width:'100%'}}>
        <AutoFitImage imgSrc={mk.displayImage.url}/>
      </div>
      
     <Card.Body className='pb-5 mb-5'>
      <Row>

      <Col className='col-12  col-lg-6 pb-3'>
        <Card.Title style={{fontWeight:700,fontSize:'3em', fontFamily:'monospace', marginBottom:'2px'}}>
          {mk.boardName}
          <p className='text-muted ' style={{fontFamily:'monospace',fontSize:'1rem'}}>{moment(mk.buildDate, "YYYY-MM-DD").format("DD MMM YYYY")}</p>
        </Card.Title> 
        <p className='pl-1'>{mk.description}</p>
        {soundtest}
      </Col>

      <Col >
        <Table variant='dark' className='shadow-sm' >
          <tbody>
            <tr>
              <th>Switches</th>
              <td>{mk.switches}</td>
            </tr>
            <tr>
              <th>Stabilizers</th>
              <td>{mk.stabilizers}</td>
            </tr>
            <tr>
              <th>Case</th>
              <td>{mk.case}</td>
            </tr>
            <tr>
              <th>Layout</th>
              <td>{mk.layout}</td>
            </tr>
          </tbody>
        </Table>
      </Col>

      </Row>

      <hr className='pb-3'/>
      
      <ReactMarkdown 
        source={mk.content}
        renderers={renderers}
      />

     </Card.Body>
   </Card>
   </SRLWrapper>
   </>
  )
}

export const pageQuery = graphql`
  query MkPageQuery($id: ID!){
    gcms{
      mk: mkbuildlog(where:{id: $id}){
        boardName
        buildDate
        case
        content
        description
        layout
        switches
        stabilizers
        soundtestLink
        displayImage{
          url
        }
        
      }
      
    }
  }
`