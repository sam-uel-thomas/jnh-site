import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import shopData from './shopData'
import Link from 'next/link'

const shop = () => {
    return (
        <div>
            <div className='bg-white flex flex-col justify-between min-h-[100dvh]'>
                <Navbar />
                <div className="relative flex flex-col justify-end items-center w-full pt-0 md:pt-0 mb-5 z-10">
                    <div className="grid grid-cols-2 gap-6 md:gap-12 p-6 md:p-16 justify-center">
                        {shopData.length > 0 ? (
                            shopData.map((sample, index) => (
                                <Link href={`/shop/${index}`} key={index} className='flex justify-center items-center'>
                                    <div className="w-1/2 h-auto">
                                        <ImageCard src={sample.src} alt={sample.alt} title={`${index+1}: ${sample.title}`} />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default shop