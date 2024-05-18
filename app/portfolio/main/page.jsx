'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const images = Array.from({ length: 28 }, (_, i) => `/portfolio/main/${i + 1}.jpg`);

const Page = () => {
    const [imageNumber, setImageNumber] = useState(0);

    const goPrevImage = () => setImageNumber(Math.max(imageNumber - 1, 0));
    const goNextImage = () => setImageNumber(Math.min(imageNumber + 1, images.length - 1));

    return (
        <div>
            <div className='bg-white flex flex-col items-center min-h-[100dvh]'>
                <Navbar />
                <div className="flex items-center justify-center mx-auto mt-12">
                    <button 
                        className={`w-24 h-24 mx-8 animate-bobbing-left ${imageNumber === 0 ? 'opacity-50 cursor-default' : ''}`} 
                        onClick={imageNumber > 0 ? goPrevImage : undefined}
                    >
                        <img src="/portfolio/leftHand.png" alt="Previous" className="w-full h-full object-contain" />
                    </button>
                    <img src={images[imageNumber]} className="w-2/3" alt="Page" />
                    <button 
                        className={`w-24 h-24 mx-8 animate-bobbing-right ${imageNumber === images.length - 1 ? 'opacity-50 cursor-default' : ''}`} 
                        onClick={imageNumber < images.length - 1 ? goNextImage : undefined}
                    >
                        <img src="/portfolio/rightHand.png" alt="Next" className="w-full h-full object-contain" />
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Page;