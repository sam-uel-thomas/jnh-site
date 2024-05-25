'use client'
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectScroll from '../components/ProjectScroll';
import ArrowLink from '../components/ArrowLink';
import Link from 'next/link';
import Image from 'next/image';

const Page = () => {
    const images = Array.from({ length: 5 }, (_, i) => `/balenciagaProject/${i + 1}.png`);
    const [imageNumber, setImageNumber] = useState(0);

    const goPrevImage = () => setImageNumber(Math.max(imageNumber - 1, 0));
    const goNextImage = () => setImageNumber(Math.min(imageNumber + 1, images.length - 1));

    return (
        <div>
            <div className='bg-white flex flex-col items-center min-h-[100vh] overflow-x-hidden'>
                <Navbar />
                <div className="flex items-center justify-center mx-auto flex-grow">
                    <ArrowLink href="/portfolio" style={{ top: '100px', left: '20px' }} /> 
                    <button 
                        className={`w-32 h-32 mx-8 animate-bobbing-left ${imageNumber === 0 ? 'opacity-0 cursor-default' : ''}`} 
                        onClick={imageNumber > 0 ? goPrevImage : undefined}
                    >
                        <Image src="/portfolio/leftHand.png" alt="Previous" width={50} height={50} className="w-full h-full object-contain" />
                    </button>
                    <Link href={`/balenciagaMuseumProject/${imageNumber + 1}`}>
                            <Image src={images[imageNumber]} width={700} height={100} alt="Page" />
                    </Link>               
                    <button 
                        className={`w-32 h-32 mx-8 animate-bobbing-right ${imageNumber === images.length - 1 ? 'opacity-0 cursor-default' : ''}`} 
                        onClick={imageNumber < images.length - 1 ? goNextImage : undefined}
                    >
                        <Image src="/portfolio/rightHand.png" alt="Next" width={50} height={50} className="w-full h-full object-contain" />
                    </button>
                </div>
                <div className="self-start">
                    <span className='font-semibold text-s mb-4 ml-8 text-left text-orange'>PHOTOGRAPHY : BANDINI3000</span>
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
                    <ProjectScroll/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;