import { useContext, useEffect, useState } from 'react';
import { SizeContext } from '../../../../SizeContext/SizeContext';
import ProductCard from './ProductCard/ProductCard';
import { useParams } from 'next/navigation';
import Pagination from 'react-bootstrap/Pagination';
import './ProductCard/ProductCard.css'
import Spinner from 'react-bootstrap/Spinner';
export default function CategoryProducts() {
    const params = useParams();

    const { selectedSize, selectedTrademark, maxPrice, setMaxPrice, minPrice, setMinPrice } = useContext(SizeContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 18;

    async function fetchProducts(params) {
        try {
            const response = await fetch(`https://back.fradaksa.net/api/getProducts/${params.CategoryID}`);
            const data = await response.json();
            setProducts(data.data.Products);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    async function getProductsBySub(params) {
        try {
            const response = await fetch(`https://back.fradaksa.net/api/getProductsBySub/${params.SubcategoryID}`);
            const data = await response.json();
            setProducts(data.data.Products);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    function handlePageChange(newPage) {
        setCurrentPage(newPage);
    }

    useEffect(() => {
        setLoading(true);
        if (params.CategoryID && !params.SubcategoryID) {
            fetchProducts(params);
        } else {
            getProductsBySub(params);
        }
    }, [params.CategoryID, params.SubcategoryID]);

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = products
        .filter((product) =>
            !selectedSize || (product.Sizes && product.Sizes[0] === selectedSize) &&
            (!selectedTrademark || product.Trademark?.TrademarkName === selectedTrademark) &&
            product.Price >= minPrice && product.Price <= maxPrice
        )
        .slice(startIndex, endIndex);

    return (
        <div className='cards-holder ms-2 ms-lg-5 ms-xl-5 ms-md-5' style={{ fontSize: '15px' }}>
            {loading ? (
                <Spinner animation="border" style={{ color: '#D17A52' }} />
            ) : displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                    <ProductCard
                        key={product.ProductID}
                        id={product.ProductID}
                        name={product.Name}
                        colorid={product.Colors.length > 0 && product.Colors[0].ColorID}
                        code={product.Barcode}
                        price={Number(product.Price)}
                        discount={Number(product.Discount)}
                        mainphoto={product.MainPhoto && product.MainPhoto.Image}
                        colornum={Number(product.NumOfColors)}
                        photocolors={product.Colors}
                    />
                ))
            ) : (
                <p>No products found.</p>
            )}
            <Pagination style={{ position: 'absolute', bottom: '10px' }} className='pagnition-product'>
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={currentPage === index + 1}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            </Pagination>
        </div>
    );
}