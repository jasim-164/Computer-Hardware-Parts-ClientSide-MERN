import React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';

const HardwareComponents = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('https://radiant-inlet-73945.herokuapp.com/products').then(res => res.json()))
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