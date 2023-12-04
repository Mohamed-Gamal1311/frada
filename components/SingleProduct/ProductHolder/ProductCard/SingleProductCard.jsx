
import ImagesHolder from './ImagesHolder/ImagesHolder'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductName from './ProductDetails/ProductName/ProductName'

export default function ProductCard() {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'center'
        }}>
            <ImagesHolder />
            <ProductDetails />
        </div>
    )
}


