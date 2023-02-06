import React, { useEffect, useState } from 'react';
import Product from './Product';
import './Products.css';

const Products = ({title}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
    },[])

    return (
        <div className='products'>
            {products.map((product,i) => {
                return(
                <Product key={i} title={product.title} price={product.price} description={product.description} image={product.image}/>
                )
            })}
        </div>
    )
}

export default Products;