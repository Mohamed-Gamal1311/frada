import ButtonsProduct from "./ButtonsProduct/ButtonsProduct";
import ColorProduct from "./ColorProduct/ColorProduct";
import ProductName from "./ProductName/ProductName";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import ProductSize from "./ProductSize/ProductSize";








export default function ProductDetails() {
    return (
        <div style={{ width: '50%' }} >
            <ProductName />
            <ColorProduct />
            <ProductSize />
            <ProductQuantity />
            <ButtonsProduct />
        </div>
    )

}