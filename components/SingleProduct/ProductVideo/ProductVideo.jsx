import 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductVideo() {
    return (
        <section className='d-flex justify-content-center px-5'>
            <Card className="d-flex flex-row-reverse w-75" style={{ textAlign: "right", border: "2px solid #d17a52" }} >
                <Card.Body className='w-50'>
                    <Card.Title style={{ color: "#d17a52", textDecoration: 'underline' }}>حذاء فرادا شرقي</Card.Title>
                    <Card.Text style={{ textAlign: "right" }} >
                        <span style={{ textAlign: 'justify' }}>
                            ء ### code، يعتبر هذا الحذاء من أحدث التصاميم الحصرية والمميزة، وتم تصميمه خصيصاً لرجال الأعمال ومن أجل المقابلات الرسمية ، كما تم وضع المنتج خلال فترة اختبار وجودة، والاهتمام بفرادة التصميم عن غيره من التصاميم المتداولة بعناية شديدة من رواد التصميم والموضة بفريق عمل فرادا.

                            هذا الحذاء الشرقي مصنع بأحدث الأجهزة والمعدات التي تخدم راحة عملائنا، كما تم استخدام مواد وجلود عالية الجودة ولأننا نهتم بصحة عملائنا الكرام،  تم اختيار دعسه طبية وبطانة علوية مريحة جدا للقدم ، وحرصنا كل الحرص ان يكون وزن الحذاء خفيف لشعور بالراحة أثناء المش
                        </span>
                    </Card.Text>
                    <div className='d-flex '>
                        <Button className="button-product-video" style={{ textAlign: "left", marginTop: '5%', backgroundColor: "#d17a52", border: 'none', fontWeight: 'bold' }} variant="primary">اعرف المزيد</Button>
                    </div>
                </Card.Body>
                <Card.Body className='w-50' >
                    <iframe width="100%" height="100%"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </Card.Body>

            </Card>
        </section>
    );
}

export default ProductVideo;