'use client'
import React, { useState, useEffect } from 'react'
import shopData from '../shopData'
import ImageCard from '../../components/ImageCard'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link'
import ArrowLink from '../../components/ArrowLink'
import ProjectScroll from '../../components/ProjectScroll'
import Image from 'next/image'
import Head from 'next/head'

export default function Page({ params }) {
    const sample = shopData[Number(params.sampleId)];
    const [photoIndex, setPhotoIndex] = useState(0);
    const pageTitle = sample ? `Shop - ${sample.title}` : 'Shop';

    if (!sample) {
        return <h1>No fabric sample found for id {params.sampleId}</h1>;
    }

    const handleNextPhoto = () => {
        setPhotoIndex((prevIndex) => (prevIndex + 1) % sample.photos.length);
    };

    const handlePrevPhoto = () => {
        setPhotoIndex((prevIndex) => (prevIndex - 1 + sample.photos.length) % sample.photos.length);
    };

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={`Detailed view of ${sample.title}, a custom-made garment from our shop.`} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={`Detailed view of ${sample.title}, a custom-made garment from our shop.`} />
                <meta property="og:image" content={sample ? sample.photos[photoIndex] : ''} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.jonahdavies.com/shop/${params.sampleId}`} />
                <link rel="canonical" href={`https://www.jonahdavies.com/shop/${params.sampleId}`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, custom garment, fashion design, bespoke fashion, unique clothing, fashion shop" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "Product",
                          "name": "${sample.title}",
                          "image": "${sample.photos[photoIndex]}",
                          "description": "${sample.description.join(' ')}",
                          "brand": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          },
                          "offers": {
                            "@type": "Offer",
                            "priceCurrency": "USD",
                            "availability": "http://schema.org/InStock",
                            "url": "https://www.jonahdavies.com/shop/${params.sampleId}"
                          }
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ArrowLink href={"/shop"} width={70} height={70} top={0} left={0} className="md:hidden" />
                <ArrowLink href={"/shop"} width={100} height={100} top={0} left={0} className="hidden md:block" />
                <div className="px-8 md:pl-32 mt-12 mb-8 flex flex-col md:flex-row items-start justify-start w-full">
                    <div className='relative w-full md:w-[28rem] mb-4 md:mb-0'>
                        <Image 
                            key={photoIndex} 
                            src={sample.photos[photoIndex]} 
                            alt={`Custom garment by Jonah Davies - ${sample.alt}`}
                            layout="responsive"
                            width={80}
                            height={83} 
                        />
                        <button onClick={handlePrevPhoto} className="bg-red-500 rounded-full w-12 h-12 absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></button>
                        <button onClick={handleNextPhoto} className="bg-red-500 rounded-full w-12 h-12 absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></button>
                    </div>
                    <div className='flex flex-col w-full md:w-1/2 ml-0 md:ml-8'>
                        <h1 className='text-black font-semibold text-xl md:text-4xl mb-4 md:mb-8'>{sample.title}</h1>
                        {sample.description.map((desc, index) => (
                            <p key={index} className='text-black font-semibold mb-2 md:mb-6 text-l md:text-2xl'>{desc}</p>
                        ))}
                    </div>
                </div>
                <div className="self-start mb-12 px-8">
                    <span className='font-semibold text-s mb-4 text-left text-black'>MADE TO ORDER + ENQUIRE THROUGH INSTAGRAM</span>
                </div>
                <div className='grid grid-cols-3 md:grid-cols-none md:flex md:flex-row gap-4 mx-4 md:mx-8 mb-16'>
                    {shopData.map((item, index) => {
                        if (index !== Number(params.sampleId)) {
                            return (
                                <div key={index} className='w-full h-auto'>
                                    <Link href={`/shop/${index}`}>
                                        <ImageCard src={item.src} alt={item.alt}/>
                                    </Link>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10 mt-auto">
                    <ProjectScroll/>
                </div>
            </div>
            <Footer />
        </>
    )
}
