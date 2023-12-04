"use client"
import AdContainer from './Ads/AdContainer'
import ProductHolder from './ProductHolder/ProductHolder'
import Info from './ProductInfo/Info'
import ProductReviews from './ProductReviews/ProductReviews'
import ProductVideo from './ProductVideo/ProductVideo'

export default function SingleProduct() {
  return (
    <section>

      <ProductHolder />
      <AdContainer />
      <Info />
      <ProductVideo />
      <AdContainer />
      <ProductReviews />
    </section>
  )
}

