import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-gray-500 rounded-lg pt-3 pb-3 mx-10 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-500'>{price.price}</span>
                <span className='text-1xl font-bold'>/mon</span>
            </h2>
          <h1 className='font-extrabold text-3xl text-center'>  {price.name}</h1>
          <p className='text-white underline ms-2 mt-4 font-bold'>Feature:</p>
          {
        price.features.map((feature , idx) => <Feature key={idx} feature={feature}></Feature>)
          }
          <button className='w-4/5 ms-12 bg-purple-400 rounded-lg text-white hover:bg-green-300 font-bold mt-auto p-3 '>Buy Now</button>
        </div>
    );
};

export default PriceCard;