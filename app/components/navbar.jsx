'use client'
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [shopImg, setShopImg] = useState('/links/shop/jnhShop.png');
    const [portfolioImg, setPortfolioImg] = useState('/links/portfolio/jnhPortfolio.png');
    const [contactImg, setContactImg] = useState('/links/contact/jnhContact.png');
    const [instagramImg, setInstagramImg] = useState('/links/instagram/jnhInstagram.png');

    const imgBackgroundClasses = "absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-contain -z-1";
    const iconClasses = "z-10 w-16 md:w-24 h-16 md:h-24 cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out";
    const logoClasses = "w-full h-full z-20";
    const navLinksClasses = "flex space-x-8 z-10 hidden md:flex";
    const navLinkClasses = "text-black font-bold text-xl uppercase no-underline";

    return (
        <div className={"w-full mt-4 px-8 flex items-center justify-between text-white z-50 sticky"}>
            <img src="/jnhFooterShape.png" alt="JNH Rectangle" className={imgBackgroundClasses} />

            <ul className={navLinksClasses}>
                <li className='hover:scale-105 transition-transform duration-500 ease-in-out'>
                    <Link href="/shop">
                        <span className={navLinkClasses}>SHOP</span>
                        {/* <img 
                            src={shopImg} 
                            onMouseOver={() => setShopImg('/links/shop/jnhShopUnderline.png')} 
                            onMouseOut={() => setShopImg('/links/shop/jnhShop.png')}
                            className='w-auto h-8'
                        /> */}
                    </Link>
                </li>
                <li className='hover:scale-105 transition-transform duration-500 ease-in-out'>
                    <Link href="/portfolio">
                        <span className={navLinkClasses}>PORTFOLIO</span>
                        {/* <img 
                            src={portfolioImg} 
                            onMouseOver={() => setPortfolioImg('/links/portfolio/jnhPortfolioUnderline.png')} 
                            onMouseOut={() => setPortfolioImg('/links/portfolio/jnhPortfolio.png')}
                            className='w-auto h-8'
                        /> */}
                    </Link>
                </li>
                <li className='hover:scale-105 transition-transform duration-500 ease-in-out'>
                    <Link href="/contact">
                        <span className={navLinkClasses}>CONTACT</span>
                        {/* <img 
                            src={contactImg} 
                            onMouseOver={() => setContactImg('/links/contact/jnhContactUnderline.png')} 
                            onMouseOut={() => setContactImg('/links/contact/jnhContact.png')}
                            className='w-auto h-8'
                        /> */}
                    </Link>
                </li>
                <li className='hover:scale-105 transition-transform duration-500 ease-in-out'>
                    <Link href="https://www.instagram.com/___j_n_h___/" target="_blank" rel="noopener noreferrer" className={navLinkClasses}>
                        <span className={navLinkClasses}>INSTAGRAM</span>
                        {/* <img 
                            src={instagramImg} 
                            onMouseOver={() => setInstagramImg('/links/instagram/jnhInstagramUnderline.png')} 
                            onMouseOut={() => setInstagramImg('/links/instagram/jnhInstagram.png')}
                            className='w-auto h-8'
                        /> */}
                    </Link>
                </li>
            </ul>

            <Link href="/" className={iconClasses}>
                <img src="/jnhIconBlack.png" alt="JNH Logo" className={logoClasses} />
            </Link>
        </div>
    );
}