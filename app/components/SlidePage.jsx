'use client'
import React, { useState, useEffect } from 'react';
import ProjectScroll from '../components/ProjectScroll';
import ArrowLink from '../components/ArrowLink';
import Link from 'next/link';
import Image from 'next/image';
import LoadingScreen from '../components/LoadingScreen';

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
            <div className="flex items-center justify-center mx-auto flex-grow">
                <button 
                    className={`w-32 h-32 mx-8 animate-bobbing-left ${imageNumber === 0 ? 'opacity-0 cursor-default' : ''}`} 
                    onClick={imageNumber > 0 ? goPrevImage : undefined}
                >
                    <Image src="/portfolio/leftHand.png" alt="Previous" width={50} height={50} className="w-full h-full object-contain" />
                </button>
                <Link href={`/${link}/${imageNumber}`}>
                    <Image src={data[imageNumber].src} width={700} height={100} alt={data[imageNumber].alt} />
                </Link>               
                <button 
                    className={`w-32 h-32 mx-8 animate-bobbing-right ${imageNumber === data.length - 1 ? 'opacity-0 cursor-default' : ''}`} 
                    onClick={imageNumber < data.length - 1 ? goNextImage : undefined}
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
        </>
    );
}

export default SlidePage;