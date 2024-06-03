'use client'
import React, { useState, useEffect } from 'react';
import ProjectScroll from '../components/ProjectScroll';
import Link from 'next/link';
import Image from 'next/image';
// import LoadingScreen from '../components/LoadingScreen'; // Commented out since it's not used

const SlidePage = ({ data, link }) => {
    const [imageNumber, setImageNumber] = useState(0);
    const [loading, setLoading] = useState(true);

    const goPrevImage = () => setImageNumber(Math.max(imageNumber - 1, 0));
    const goNextImage = () => setImageNumber(Math.min(imageNumber + 1, data.length - 1));

    useEffect(() => {
        const preloadImages = async () => {
            const imagePromises = data.map((item) => {
                return new Promise((resolve) => {
                    const img = new window.Image();
                    img.src = item.src;
                    img.onload = resolve;
                });
            });
            await Promise.all(imagePromises);
            setLoading(false);
        };

        preloadImages();
    }, [data]);

    // if (loading) {
    //     return <LoadingScreen />;
    // }

    return (
        <>
            <div className="flex flex-col px-4 items-center justify-center mx-auto flex-grow md:flex-row md:items-center">
                <div className="md:hidden flex flex-row justify-center mt-4 order-3">
                    <button 
                        className={`w-28 h-28 mx-8 animate-bobbing-left ${imageNumber === 0 ? 'opacity-0 cursor-default' : ''}`} 
                        onClick={imageNumber > 0 ? goPrevImage : undefined}
                    >
                        <Image src="/portfolio/leftHand.png" alt="Previous" width={50} height={50} className="w-full h-full object-contain" />
                    </button>
                    <button 
                        className={`w-28 h-28 mx-8 animate-bobbing-right ${imageNumber === data.length - 1 ? 'opacity-0 cursor-default' : ''}`} 
                        onClick={imageNumber < data.length - 1 ? goNextImage : undefined}
                    >
                        <Image src="/portfolio/rightHand.png" alt="Next" width={50} height={50} className="w-full h-full object-contain" />
                    </button>
                </div>
                <div className="order-1 md:order-2">
                    <Link href={`/${link}/${imageNumber}`} className="block">
                        <Image src={data[imageNumber].src} width={700} height={100} alt={data[imageNumber].alt} />
                    </Link>
                </div>
                <div className="hidden md:flex md:order-1 md:flex-shrink-0">
                    <button 
                        className={`w-32 h-32 mx-8 animate-bobbing-left ${imageNumber === 0 ? 'opacity-0 cursor-default' : ''}`} 
                        onClick={imageNumber > 0 ? goPrevImage : undefined}
                    >
                        <Image src="/portfolio/leftHand.png" alt="Previous" width={50} height={50} className="w-full h-full object-contain" />
                    </button>
                </div>
                <div className="hidden md:flex md:order-3 md:flex-shrink-0">
                    <button 
                        className={`w-32 h-32 mx-8 animate-bobbing-right ${imageNumber === data.length - 1 ? 'opacity-0 cursor-default' : ''}`} 
                        onClick={imageNumber < data.length - 1 ? goNextImage : undefined}
                    >
                        <Image src="/portfolio/rightHand.png" alt="Next" width={50} height={50} className="w-full h-full object-contain" />
                    </button>
                </div>
            </div>
            <div className="self-start">
                <span className='font-semibold text-s mb-4 ml-8 text-left text-orange'>PHOTOGRAPHY : BANDINI3000</span>
            </div>
            <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
                <ProjectScroll />
            </div>
        </>
    );
}

export default SlidePage;
