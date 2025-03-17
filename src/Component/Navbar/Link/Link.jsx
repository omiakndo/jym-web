import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-14 hover:bg-purple-400'>
          <a href={route.path}>{route.name}</a>  
        </li>
    );
};

export default Link;