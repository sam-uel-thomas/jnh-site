import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import ProjectScroll from '../components/ProjectScroll'
import shopData from './shopData'
import Link from 'next/link'

const shop = () => {
    return (
        <div>
            <div className='bg-white flex flex-col justify-between min-h-[100dvh] overflow-x-hidden'>
                <Navbar />
                <div className="relative flex flex-col justify-end items-center w-full pt-0 md:pt-8 md:px-12 mb-5 z-10">
                    <div className="grid grid-cols-2 gap-x-0 row-gap-6 md:gap-y-12 justify-center">
                        {shopData.length > 0 ? (
                            shopData.map((sample, index) => (
                                <Link href={`/shop/${index}`} key={index} className='flex justify-center items-center'>
                                    <div className="w-3/4 h-auto">
                                        <ImageCard src={sample.src} alt={sample.alt} title={`${index+1}: ${sample.title}`} />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
                    <ProjectScroll/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default shop