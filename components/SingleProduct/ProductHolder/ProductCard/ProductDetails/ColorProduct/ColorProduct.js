import './ColorProduct.css'


export default function ColorProduct() {
    return (
        <div className="ColorProduct"  >
            <p>اختر اللون</p>
            <div className=" image-color"
            >
                <div className="image" style={{ width: 'calc(100%/6)' }}><img src="https://i.ibb.co/VTjkqx7/7.jpg" /></div>
                <div className="image" style={{ width: 'calc(100%/6)' }}><img src="https://i.ibb.co/VTjkqx7/7.jpg" /></div>
                <div className="image" style={{ width: 'calc(100%/6)' }}><img src="https://i.ibb.co/VTjkqx7/7.jpg" /></div>
                <div className="image" style={{ width: 'calc(100%/6)' }}><img src="https://i.ibb.co/VTjkqx7/7.jpg" /></div>
                <div className="image" style={{ width: 'calc(100%/6)' }}><img src="https://i.ibb.co/VTjkqx7/7.jpg" /></div>
                <div className="image" style={{ width: 'calc(100%/6)' }}><img src="https://i.ibb.co/VTjkqx7/7.jpg" /></div>
            </div>
        </div>
    )
}