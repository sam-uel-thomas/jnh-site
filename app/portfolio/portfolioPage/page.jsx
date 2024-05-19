'use client'
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProjectScroll from '../../components/ProjectScroll';
import { useSearchParams } from 'next/navigation';

const Page = () => {
    const searchParams = useSearchParams();
    const portfolio = searchParams.get('portfolio');
    const imageCount = portfolio === 'main' ? 28 : 16;
    const images = Array.from({ length: imageCount }, (_, i) => `/portfolio/${portfolio}/${i + 1}.jpg`);
    const [imageNumber, setImageNumber] = useState(0);

    const goPrevImage = () => setImageNumber(Math.max(imageNumber - 1, 0));
    const goNextImage = () => setImageNumber(Math.min(imageNumber + 1, images.length - 1));

    return (
        <div>
            <div className='bg-white flex flex-col items-center min-h-[100vh] overflow-x-hidden'>
                <Navbar />
                <div className="flex items-center justify-center mx-auto flex-grow">
                    <button 
                        className={`w-32 h-32 mx-8 animate-bobbing-left ${imageNumber === 0 ? 'opacity-0 cursor-default' : ''}`} 
                        onClick={imageNumber > 0 ? goPrevImage : undefined}
                    >
                        <img src="/portfolio/leftHand.png" alt="Previous" className="w-full h-full object-contain" />
                    </button>
                    <img src={images[imageNumber]} className="w-2/3" alt="Page" />
                    <button 
                        className={`w-32 h-32 mx-8 animate-bobbing-right ${imageNumber === images.length - 1 ? 'opacity-0 cursor-default' : ''}`} 
                        onClick={imageNumber < images.length - 1 ? goNextImage : undefined}
                    >
                        <img src="/portfolio/rightHand.png" alt="Next" className="w-full h-full object-contain" />
                    </button>
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