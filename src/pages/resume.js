import React from 'react';
import {graphql} from 'gatsby';
import moment from 'moment';
import {faFileAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default({data:{gcms:{asset}}})=>{
    return (
        <div>
            <div  style={{fontSize:'1.5rem'}} className='mb-4'>
            <FontAwesomeIcon icon={faFileAlt} className='mr-3'/>
          <strong >
            My Resume
          </strong>
          <em style={{'fontSize':'0.8em', paddingLeft:'1em'}} className='text-muted'>
            Last Updated {moment(asset.publishedAt, "YYYY-MM-DD").format("DD MMM YYYY")}
          </em>
          </div>
            <iframe title='resume-pdf' className='mt-1' src={asset.url} style={{height:'90vh', width:'100%'}}/>
          <a href={asset.url} target='_blank' rel="noopener noreferrer">
            PDF not displaying correctly? View here
          </a>
        </div>
    )
}

export const pageQuery = graphql`
  query ResumeQuery{
    gcms {
      asset(where: {id: "cklfx112w6wtb0985iou91oym"}) {
        id
        url
        publishedAt
      }
    }
  }
`