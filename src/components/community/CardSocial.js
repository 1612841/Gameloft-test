import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
     CardHeader
  } from 'reactstrap';
import './CardSocial.css';

function CardSocial(props) {
    return (
        <div key={props.key}>
            <Card className=" cardsocial">
                <CardHeader className="cardsocialhead">
                    <CardImg className="cardsocialimg" src="/images/facebook.png" alt="logo" />
                    <CardImg className="cardsocialimgs" src="/images/share.png" alt="logo" />
                </CardHeader>
                <CardBody className='cardbody'>
                    <CardImg className="cardbodyimg" src="/images/Moun2.png" alt="logo" />
                    <CardText className="cardtext">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardSocial;
