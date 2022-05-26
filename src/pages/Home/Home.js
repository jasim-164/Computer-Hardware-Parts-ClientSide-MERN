import React from 'react';
import { useQuery } from 'react-query';
import Product from '../HardwareComponents/Product';
import Navbar from '../Shared/Navbar';
import Banner from './Banner';
import Info from './Info';
import Review from './Review';
import StatePage from './StatePage';
import ExtraSection from './ExtraSection/ExtraSection'
import DealSection from './DealSection/DealSection'
import ContactSection from './ContactSection/ContactSection';

const Home = () => {
    const { data: products, isLoading } = useQuery('products', () => fetch('https://radiant-inlet-73945.herokuapp.com/products').then(res => res.json()))
    return (
        <div>
            <Banner/>
            <Info/>
            <div className=' grid-cols-3 grid mb-16'>
            {
                products?.slice(0,6).map(product =>{
                    return <Product key={product._id} product={product} />
                }
                     
                )
            }
        </div>
        <StatePage/>
        <Review/>
        <ExtraSection/>
        <DealSection/>
        <ContactSection/>
        </div>
    );
};

export default Home;