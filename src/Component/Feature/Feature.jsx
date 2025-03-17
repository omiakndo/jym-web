import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='items-center flex mb-3 '>
             <CheckIcon className="size-6 text-white ms-4" />
            <span className='ps-1 font-bold mb-2 '>{feature}</span>
        </div>
    );
};

export default Feature;