"use client"
import { useParams } from 'next/navigation'
import AdContainer from './Ads/AdContainer'
import ProductHolder from './ProductHolder/ProductHolder'
import Info from './ProductInfo/Info'
import ProductReviews from './ProductReviews/ProductReviews'
import ProductVideo from './ProductVideo/ProductVideo'
import { useEffect, useState } from 'react'

export default function SingleProduct() {



  const params = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {

    // {{URL}}/getProductsBySub/1
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://www.fradaksa.com/api/getProduct/${params.ProductID}`);
        const data = await response.json();

        setProduct(data.data);



        if (product.Sizes == undefined) {
          setSizes(false)
        }


        setSelectedColorID(data.data.Colors[0].ColorID);
        setImages(data.data.Colors[0].Images)
        setMain(data.data.MainPhoto)

      } catch (error) {
        console.error('Error fetching products:', error);

      }
    };


    fetchProducts();

  }, [params.ProductID]);





  return (




    <section>

      <ProductHolder />
      <AdContainer />
      <Info desc={product.Description} info={product.AdditionalInfo} />
      <ProductVideo title={product.Videos && product.Videos.length > 0 ? product.Videos[0].VideoTitle : ''} desc={product.Videos && product.Videos.length > 0 ? product.Videos[0].VideoDescription : ''} url={product.Videos && product.Videos.length > 0 ? product.Videos[0].VideoURL : ''} />
      <AdContainer />
      <ProductReviews reviews={product.Reviews} />
    </section>
  )
}

