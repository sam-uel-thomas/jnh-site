import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import ProjectScroll from '../components/ProjectScroll'
import Link from 'next/link'
import fabricSamplesData from './fabricSamplesData'

const fabricSamples = () => {
    return (
        <div>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                {/* <div className="relative flex flex-col justify-end items-center w-full md:w-2/3 pt-0 md:pt-0 mb-5 z-10 pr-8 md:pl-32">
                    <div className="grid grid-cols-1 gap-6 md:gap-12 p-6 md:p-16">
                        {fabricSamplesData.map((sample, index) => (
                            <Link href={`/fabricSamples/${index}`} key={index}>
                                <div className="w-2/3 h-auto">
                                    <ImageCard src={sample.src} alt={sample.alt} title={index+1} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div> */}
                <div className="mt-12 relative w-full h-64 mb-64 rotate-2">
                    <img src="/fabricSample/rail.png" alt="Clothesline" className="absolute w-full" />
                    <div className="flex justify-between w-full px-4 -mt-4">
                        <div className="w-1/5">
                            <ImageCard src="/fabricSample/1.png" alt="Photo 1"/>
                        </div>
                        <div className="w-1/5">
                            <ImageCard src="/fabricSample/2.png" alt="Photo 2"/>
                        </div>
                        <div className="w-1/5">
                            <ImageCard src="/fabricSample/3.png" alt="Photo 3"/>
                        </div>
                        <div className="w-1/5">
                            <ImageCard src="/fabricSample/4.png" alt="Photo 4"/>
                        </div>
                    </div>
                </div>
                <div className="mt-24 relative w-full h-64 mb-64 -rotate-2">
                    <img src="/fabricSample/rail.png" alt="Clothesline" className="absolute w-full" />
                    <div className="flex justify-between w-full px-4 -mt-4">
                        <div className="w-1/5">
                            <ImageCard src="/fabricSample/5.png" alt="Photo 1"/>
                        </div>
                        <div className="w-1/5">
                            <ImageCard src="/fabricSample/6.png" alt="Photo 2"/>
                        </div>
                        <div className="w-1/5">
                            <ImageCard src="/fabricSample/7.png" alt="Photo 3"/>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10 mt-auto">
                    <ProjectScroll/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default fabricSamples