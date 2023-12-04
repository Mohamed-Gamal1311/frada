"use client"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Rating } from 'react-simple-star-rating'
export default function ProductName() {


    return (
        <div>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title> حذاء فرادا</Card.Title>

                </Card.Body>
                <ListGroup className="list-group-flush" style={{ display: 'flex', justifyContent: 'space-between' }}>

                    <ListGroup.Item> fA2dgg</ListGroup.Item>
                    <ListGroup.Item> <Rating

                        initialRating={4}
                        readonly
                    />
                        <p>تقييم 15</p>
                    </ListGroup.Item>


                </ListGroup>

            </Card>
        </div>
    )



}