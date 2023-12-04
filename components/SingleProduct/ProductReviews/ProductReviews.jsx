import { useState } from 'react';
import { Card, ListGroup, Pagination } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./ProductReviews.css"

const ProductReviews = () => {
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = 3; // Adjust this based on how many items you want to show per page

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    // Example data for reviews
    const reviews = [
        {
            id: 1,
            user: 'زياد اشرف',
            username: 'ziyadazab',
            rating: 3,
            comment: 'تعليق جامد',
        },
        {
            id: 2,
            user: 'أحمد محمد',
            username: 'ahmadmoh',
            rating: 5,
            comment: 'منتج رائع وجودة عالية',
        },
        {
            id: 3,
            user: 'سارة علي',
            username: 'saraali',
            rating: 4,
            comment: 'أحببته كثيراً',
        },
        {
            id: 4,
            user: 'سارة علي',
            username: 'saraali',
            rating: 4,
            comment: 'أحببته كثيراً',
        },
        {
            id: 5,
            user: 'سارة علي',
            username: 'saraali',
            rating: 4,
            comment: 'أحببته كثيراً',
        },
        {
            id: 6,
            user: 'سارة علي',
            username: 'saraali',
            rating: 4,
            comment: 'أحببته كثيراً',
        },
        // Add more reviews as needed
    ];

    // Calculate the range of items to display based on the active page
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the array of reviews based on the active page
    const displayedReviews = reviews.slice(startIndex, endIndex);

    return (
        <section style={{ border: '0 !important' }} className="px-5 d-flex flex-column justify-content-center border-0 align-items-center py-5">
            <Card style={{ border: 'none', textAlign: 'center' }} className="w-75">
                <Card.Title style={{ fontWeight: 700, fontSize: 'medium' }}>
                    التقييمات والتعليقات على المنتج
                </Card.Title>
            </Card>

            <ListGroup as="ol" className="w-75" style={{ border: 'none !important' }}>
                {displayedReviews.map((review) => (
                    <ListGroup.Item
                        key={review.id}
                        as="li"
                        className="d-flex border-0 flex-row-reverse justify-content-between align-items-start pb-1"
                        style={{ border: '0 !important' }}
                    >
                        <div className="d-flex flex-row-reverse w-100 me-2" style={{ textAlign: 'right' }}>
                            <div className="ms-5 me-2 d-flex flex-column align-items-end">
                                <h6 className="fw-bold d-flex flex-row-reverse mx-0 my-0 mt2">{review.user}</h6>
                                <div>{review.username}</div>
                                <div className="stars" style={{ height: '30%' }}>
                                    <Rating value={review.rating} readOnly />
                                </div>
                            </div>
                            <div style={{ width: '75%' }}>
                                <Card className="h-100">
                                    <Card.Body>
                                        <Card.Text style={{ color: '#d17a52', fontWeight: 'bold' }}>{review.comment}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {/* Pagination */}
            <div className="mt-3 border-0">
                <Pagination>
                    {[...Array(Math.ceil(reviews.length / itemsPerPage)).keys()].map((page) => (
                        <Pagination.Item
                            key={page + 1}
                            active={page + 1 === activePage}
                            onClick={() => handlePageChange(page + 1)}
                        >
                            {page + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
            </div>
        </section>
    );
};

export default ProductReviews;
