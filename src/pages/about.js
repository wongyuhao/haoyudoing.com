import React, {useState} from 'react'
import {graphql} from 'gatsby';
import AboutCard from '../components/AboutCard'
import {Card} from 'react-bootstrap';
import {Collapse} from 'react-collapse';
import moment from 'moment'
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from '@fortawesome/free-solid-svg-icons';
const StyledCardTitle = styled.div`
&{
  font-size:1.2em;
  display:flex; 
  flex-direction:flex-row;
  align-items:center;
  justify-content: space-between;
}

`

export default ({data:{gcms:{asset}}}) =>{
  const [resumeOpen, setResumeOpen] = useState(false);

  const toggleResumeOpen = () => {
    setResumeOpen(!resumeOpen);
  }
  return(
    <div>
      <AboutCard/>
      <Card className='p-4 my-3 shadow-lg'>
        <StyledCardTitle 
          style={{'cursor':'pointer'}}
          onClick={()=>toggleResumeOpen()}
        >
          <div>
          <strong>
            My Resume
          </strong>
          <em style={{'fontSize':'0.8em', paddingLeft:'1em'}} className='text-muted'>
            Last Updated {moment(asset.publishedAt, "YYYY-MM-DD").format("DD MMM YYYY")}
          </em>
          </div>
          <div>
            {
            resumeOpen
            ?<FontAwesomeIcon icon={faChevronUp}/>
            :<FontAwesomeIcon icon={faChevronDown}/>
            }
          </div>
        </StyledCardTitle>
        
        <Collapse isOpened={resumeOpen}>
          <iframe title='resume-pdf' className='mt-2' src={asset.url} style={{height:'71vh', width:'100%'}}/>
          <a href={asset.url} target='_blank' rel="noopener noreferrer">
            PDF not displaying correctly? View here
          </a>
        </Collapse>
      </Card>
    </div>
    )
}

export const pageQuery = graphql`
  query AboutPageQuery{
    gcms {
      asset(where: {id: "cklfx112w6wtb0985iou91oym"}) {
        id
        url
        publishedAt
      }
    }
  }
`