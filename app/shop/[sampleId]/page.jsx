'use client'
import React, { useState, useEffect } from 'react'
import shopData from '../shopData'
import ImageCard from '../../components/ImageCard'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link'
import ArrowLink from '../../components/ArrowLink'

export default function Page({ params }) {
    const sample = shopData[Number(params.sampleId)];
    const [photoIndex, setPhotoIndex] = useState(0);
    
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
            <div className='bg-white flex flex-col min-h-screen'>
                <Navbar />
                <ArrowLink href="/shop" width={100} height={100} top={20} left={10} />
                <div className="pl-32 my-28 flex items-start justify-start">
                    <div className='relative w-[28rem] h-auto mr-8'>
                        <ImageCard src={sample.photos[photoIndex]} alt={sample.alt}/>
                        <button onClick={handlePrevPhoto} className="bg-red-500 rounded-full w-12 h-12 absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></button>
                        <button onClick={handleNextPhoto} className="bg-red-500 rounded-full w-12 h-12 absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></button>
                    </div>
                    <div className='flex flex-col ml-8 w-1/2 mt-16'>
                        <span className='text-black font-semibold text-4xl mb-8'>{sample.title}</span>
                        {sample.description.map((desc, index) => (
                            <span key={index} className='text-black font-semibold mb-4 text-2xl'>{desc}</span>
                        ))}
                    </div>
                </div>
                <div className='flex flex-row mx-8 mb-16 justify-center'>
                    {shopData.map((item, index) => {
                        if (index !== Number(params.sampleId)) {
                            return (
                                <div key={index} className='w-[28rem] h-auto mr-8'>
                                    <Link href={`/shop/${index}`}>
                                        <ImageCard src={item.src} alt={item.alt}/>
                                    </Link>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}