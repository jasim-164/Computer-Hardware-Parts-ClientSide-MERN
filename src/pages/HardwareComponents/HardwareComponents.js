import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const HardwareComponents = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('http://localhost:8000/products').then(res => res.json()))
    console.log(products);
    return (
        <div className=' grid-cols-3 grid'>
            {
                products?.map(product =>{
                    return <Product key={product._id} product={product} />
                }
                     
                )
            }
        </div>
    );
};

export default HardwareComponents;