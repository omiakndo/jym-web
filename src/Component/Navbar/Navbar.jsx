import React, { useState } from 'react';
import Link from './Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
    ];

    const [open, setOpen] = useState(false)
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>{open === true ? <XMarkIcon className="size-9 text-blue-600" /> : <Bars3Icon className="size-9 text-blue-600" />}</span>

                


            </div>
            <ul className={`md:flex absolute md:static duration-500 ml-2 ${open ? 'top-10':'-top-36'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}>

                    </Link>)
                }
            </ul>
        </nav >
    );
};

export default Navbar;