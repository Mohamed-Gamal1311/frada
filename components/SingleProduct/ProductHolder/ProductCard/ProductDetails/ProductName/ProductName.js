"use client"

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { Rating } from 'react-simple-star-rating'
export default function ProductName() {


    return (
        <div>
            <Card style={{ width: '18rem', textAlign: 'right' }}>

                <Card.Body>
                    <Card.Title style={{ fontSize: "4em" }}> حذاء فرادا</Card.Title>

                </Card.Body>
                <ListGroup className="list-group-flush" style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row-reverse', alignItems: 'center' }}>

                    <ListGroup.Item> fA2dgg</ListGroup.Item>
                    <ListGroup.Item style={{
                        display: 'flex',
                        justifyContent: "space-between",
                        alignItems: 'center',
                        flexDirection: 'row-reverse'
                    }}> <Rating

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