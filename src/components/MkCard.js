import React from 'react';
import {navigate} from 'gatsby';
import {Card, Row, Col} from 'react-bootstrap';
import AutoFitImage from 'react-image-autofit-frame';

export default (props)=>{

    return (
        <Card 
        onClick={()=>navigate(`/mk/${props.slug}`)}
        className='m-2'
        style={{cursor:'pointer'}}
        >
            <Row>
            <Col className='p-5'>
            <Card.Title>
                <strong className=''>{props.boardName}</strong>
            </Card.Title>
            <Card.Text >
                <em className='text-muted'>
                {
                    props.desc.length < 100 ? props.desc : props.desc.substring(0,50) +"..." 
                }
                </em>
            </Card.Text>
            </Col>
            <Col>
                <AutoFitImage frameWidth='100%' frameHeight='300px' imgSrc ={props.imgsrc}/>
            </Col>
            </Row>
        </Card>
    )
}