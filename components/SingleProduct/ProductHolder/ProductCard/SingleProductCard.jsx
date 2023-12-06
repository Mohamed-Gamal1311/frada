
import ImagesHolder from './ImagesHolder/ImagesHolder'
import ProductDetails from './ProductDetails/ProductDetails'
import ProductName from './ProductDetails/ProductName/ProductName'

export default function ProductCard() {


    return (
        <div style={{

            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            background: 'white'

        }}>
            <ImagesHolder />
            <ProductDetails />
        </div>
    )
}


