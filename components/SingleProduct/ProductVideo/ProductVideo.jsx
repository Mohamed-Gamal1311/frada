import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductVideo(props) {
    return (
        <div></div>
        // <section className='d-flex justify-content-center px-5 py-5'>
        //     <Card className="d-flex flex-row-reverse w-100" style={{ textAlign: "right", border: "1px solid #d17a52" }} >
        //         <Card.Body className='w-50'>
        //             <Card.Title style={{ color: "#d17a52", textDecoration: 'underline', fontSize: '2.2em' }}>{props.title}</Card.Title>
        //             <Card.Text className='pe-2 pt-2' style={{ textAlign: "right", lineHeight: '2em' }} >
        //                 <span style={{ textAlign: 'justify', fontSize: '1.2em' }}>
        //                     {props.desc !== null ? props.desc : ''}
        //                 </span>
        //             </Card.Text>
        //             <div className='d-flex '>
        //                 <Button className="button-product-video" style={{ textAlign: "left", marginTop: '5%', backgroundColor: "#d17a52", border: 'none', fontWeight: 'bold' }} variant="primary">اعرف المزيد</Button>
        //             </div>
        //         </Card.Body>
        //         <Card.Body className='w-50' >
        //             {/* <iframe width="100%" height="100%"
        //                 src={`${props.url}`}>
        //             </iframe> */}
        //         </Card.Body>

        //     </Card>
        // </section>
    );
}

export default ProductVideo;