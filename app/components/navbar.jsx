'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const shopImg = '/logos/shop.png';
    const portfolioImg = '/logos/portfolio.png';
    const aboutImg = '/logos/about.png';
    const instagramImg = '/logos/instagram.png';
    const logoImg = '/logos/logoAnimated.gif';

    const imgBackgroundClasses = "absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full object-contain -z-1";
    const iconClasses = "z-10 w-16 md:w-28 h-16 md:h-28 cursor-pointer hover:scale-105 transition-transform duration-500 ease-in-out";
    const logoClasses = "w-full h-full z-20";
    const navLinksClasses = "flex z-10 hidden md:flex justify-between w-1/2 items-center";
    const navLinkClasses = "text-black font-bold text-xl uppercase no-underline";

    return (
        <div className={"w-full mt-4 px-8 flex items-center justify-between text-white z-50 sticky"}>
            <ul className={navLinksClasses}>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out'>
                    <Link href="/shop">
                        <Image src={shopImg} alt="Shop" width={150} height={150} />
                    </Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out'>
                    <Link href="/portfolio">
                        <Image src={portfolioImg} alt="Portfolio" width={150} height={150} />
                    </Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out'>
                    <Link href="/about">
                        <Image src={aboutImg} alt="About" width={150} height={150} />
                    </Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out'>
                    <Link href="https://www.instagram.com/jonahdavies.2/" target="_blank" rel="noopener noreferrer" className={navLinkClasses}>
                        <Image src={instagramImg} alt="Instagram" width={150} height={150} />
                    </Link>
                </li>
            </ul>

            <Link href="/" className={iconClasses}>
                <Image src={logoImg} alt="JNH Logo" width={150} height={125} />
            </Link>
        </div>
    );
}