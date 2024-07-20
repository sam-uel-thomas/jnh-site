import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCard from '../components/ImageCard';
import ProjectScroll from '../components/ProjectScroll';
import shopData from './shopData';
import Link from 'next/link';
import Head from 'next/head';

const Shop = () => {
    return (
        <div>
            <Head>
                <title>Jonah Davies - Custom Garment Shop</title>
                <meta name="description" content="Browse and purchase custom-made garments by Jonah Davies. Discover unique fashion pieces crafted with exceptional artistry." />
                <meta property="og:title" content="Jonah Davies - Custom Garment Shop" />
                <meta property="og:description" content="Browse and purchase custom-made garments by Jonah Davies. Discover unique fashion pieces crafted with exceptional artistry." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jonahdavies.com/shop" />
                <meta property="og:image" content="https://www.jonahdavies.com/images/shop-og-image.jpg" />
                <link rel="canonical" href="https://www.jonahdavies.com/shop" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, custom garments, bespoke fashion, fashion designer, unique fashion pieces, custom-made clothing, fashion shop" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "WebPage",
                          "name": "Jonah Davies - Custom Garment Shop",
                          "description": "Browse and purchase custom-made garments by Jonah Davies. Discover unique fashion pieces crafted with exceptional artistry.",
                          "url": "https://www.jonahdavies.com/shop"
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col justify-between min-h-[100dvh] overflow-x-hidden'>
                <Navbar />
                <main className="relative flex flex-col justify-end items-center w-full pt-0 md:pt-8 px-4 md:px-12 mb-5 z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-12 row-gap-6 gap-y-8 md:gap-y-12 mt-8 justify-center">
                        {shopData.length > 0 ? (
                            shopData.map((sample, index) => (
                                <Link href={`/shop/${index}`} key={index} className='flex justify-center items-center'>
                                    <div className="w-full h-auto">
                                        <ImageCard src={sample.src} alt={`Custom garment by Jonah Davies - ${sample.alt}`} title={sample.title} className={"font-semibold"}/>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                </main>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
                    <ProjectScroll />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Shop;
