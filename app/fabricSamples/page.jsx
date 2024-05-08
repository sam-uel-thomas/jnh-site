import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import Link from 'next/link'
import fabricSamplesData from './fabricSamplesData'

const fabricSamples = () => {
    return (
        <div>
            <div className='bg-white flex flex-col justify-between min-h-screen'>
                <Navbar />
                <div className="relative flex flex-col justify-end items-center w-2/3 pt-0 md:pt-0 mb-5 z-10 pl-32">
                    <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-16 p-6 md:p-16">
                        {fabricSamplesData.map((sample, index) => (
                            <Link href={`/fabricSamples/${index}`} key={index}>
                                <ImageCard src={sample.src} alt={sample.alt} title={index+1} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default fabricSamples