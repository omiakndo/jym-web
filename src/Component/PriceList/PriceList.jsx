import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>
            <h2 className='text-5xl font-bold bg-purple-300 text-center mt-36'>
                Awesome Affordable Prices
            </h2>
            <div className='grid md:grid-cols-3 gap-10 mt-10 '>
                {
                    prices.map(price => <PriceCard key={price.id} price={price}></PriceCard>)
                }
            </div>

        </div>
    );
};

export default PriceList;