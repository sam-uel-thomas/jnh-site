'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const shopImg = '/logos/shop.png';
    const portfolioImg = '/logos/portfolio.png';
    const aboutImg = '/logos/about.png';
    const instagramImg = '/logos/instagram.png';
    const logoImg = '/logos/logoAnimated.gif';

    const logoClasses = "mt-4 mt:0 md:w-32 md:h-32 z-20 ml-4 md:ml-0"; // Adjust the logo size here
    const navLinksClasses = "flex z-10 justify-between w-full md:w-1/2 items-center";
    const navLinkClasses = "text-black font-bold text-xl uppercase no-underline";

    return (
        <div className={"w-full mt-0 md:mt-4 pl-2 md:pl-8 pr-8 flex items-center justify-between text-white z-50 sticky"}>
            <ul className={navLinksClasses}>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out mx-2'> {/* Add mx-2 for horizontal margin */}
                    <Link href="/shop">
                        <Image src={shopImg} alt="Shop" width={150} height={150} />
                    </Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out mx-2'> {/* Add mx-2 for horizontal margin */}
                    <Link href="/portfolio">
                        <Image src={portfolioImg} alt="Portfolio" width={150} height={150} />
                    </Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out mx-2 md:block hidden'> {/* Add mx-2 for horizontal margin */}
                    <Link href="/about">
                        <Image src={aboutImg} alt="About" width={150} height={150} />
                    </Link>
                </li>
                <li className='hover:scale-110 transition-transform duration-500 ease-in-out mx-2'> {/* Add mx-2 for horizontal margin */}
                    <Link href="https://www.instagram.com/jonahdavies.2/" target="_blank" rel="noopener noreferrer" className={navLinkClasses}>
                        <Image src={instagramImg} alt="Instagram" width={150} height={150} />
                    </Link>
                </li>
            </ul>

            <Link href="/" className={logoClasses}>
                <Image src={logoImg} alt="JNH Logo" width={128} height={128} /> {/* Adjust the logo size here */}
            </Link>
        </div>
    );
}
