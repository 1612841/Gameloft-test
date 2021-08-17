import React from 'react';
import './Card.css';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function CardSlide (props) {
    return (
        <div className='link-social'>
            <Link key={props.key} to='abc' className=' text-decoration-none' target='_blank'>
                <Card className='cards__items'>
                    <CardImg className='card-img' top src={props.image} alt="image" />
                    <CardBody>
                        <CardTitle className='title ' tag="h4">Short Title</CardTitle>
                    </CardBody>
                 </Card>
            </Link>
        </div>
    );
}
export default CardSlide;


export function Cards() {
    return (
        <div>
            
        </div>
    )
}

