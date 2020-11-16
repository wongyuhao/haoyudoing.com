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
    border: 1px solid #dfdfdf;
    border-radius: 50px;

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
      updates(orderBy: updatedAt_DESC, first: 10) {
        content{
          markdown
        }
        date
      }
    }
  }
`)


return (
  
  <UpdatesList variant='flush' className='rounded' >
   
    {data.gcms.updates.map(
      update=> 
      <ListGroup.Item key={update.date} className='p-1'>
        <div className='d-flex flex-column'>
          <div className='w-100 pr-2 pl-1'style={{fontSize:'0.8rem', color:'#8c8e8f'}}><strong>{moment(update.date, "YYYY-MM-DD").format("DD MMM YYYY")}</strong></div>
          <ReactMarkdown 
            source={update.content.markdown}
            renderers={{
              paragraph: props => (
                <p className='mb-0 ml-0 p-1'  {...props} />
              )
            }}
          />
        </div>
        
        </ListGroup.Item>)}

  </UpdatesList>

 
)
}