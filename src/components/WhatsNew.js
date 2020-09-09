import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'
import {ListGroup} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
import moment from 'moment'

import styled from 'styled-components'

const UpdatesList = styled(ListGroup)`
  &{
    overflow: auto;
    max-height: 200px;
    

  }

  @media (max-width: 576px) {
    &{
      max-height:35vh;
    }
  }
`


export default  ()=>{
  const data= useStaticQuery(graphql`
  query MyQuery {
    gcms {
      updates(orderBy: updatedAt_DESC) {
        content{
          markdown
        }
        date
      }
    }
  }
`)


return (
  
  <UpdatesList  className='rounded' >
   
    {data.gcms.updates.map(
      update=> 
      <ListGroup.Item key={update.createdAt} className='p-1'>
        <div className='d-flex flex-column'>
          <div className='w-100 pr-2 pl-1'style={{fontFamily:'monospace', fontSize:'0.8rem'}}><strong>{moment(update.date, "YYYY-MM-DD").format("DD MMM'YY")}</strong></div>
          <ReactMarkdown 
            source={update.content.markdown}
            renderers={{
              paragraph: props => (
                <p className='mb-0 ml-1 p-1' {...props} />
              )
            }}
          />
        </div>
        
        </ListGroup.Item>)}

  </UpdatesList>

 
)
}