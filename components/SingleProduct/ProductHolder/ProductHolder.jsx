
import SingleProductCard from './ProductCard/SingleProductCard'
import './ProductHolder.css'
export default function ProductHolder() {
    return (

        <div className='d-flex flex-row-reverse justify-content-start py-5 single-parent' style={{ backgroundColor: "#f6f6f6", flexWrap: 'wrap', padding: '0 !important' }}>

            <SingleProductCard />
        </div>


    )
}


