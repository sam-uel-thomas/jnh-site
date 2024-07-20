'use client';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageCard from '../components/ImageCard';
import ProjectScroll from '../components/ProjectScroll';
import Link from 'next/link';
import fabricSamplesData from '../data/fabricSamplesData';
import ArrowLink from '../components/ArrowLink';
import Head from 'next/head';

const FabricSamples = () => {
    const [chunkSize, setChunkSize] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 800) {
                setChunkSize(2); // mobile screens
            } else {
                setChunkSize(3); 
            }
        };

        handleResize(); // Set initial chunk size
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Map fabric samples data to include unique indices
    const indexedData = fabricSamplesData.map((sample, index) => ({
        ...sample,
        index,
    }));

    const chunkArray = (array, size) => {
        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };

    const rails = chunkArray(indexedData, chunkSize);

    return (
        <div>
            <Head>
                <title>Fabric Samples</title>
                <meta name="description" content="Browse our collection of fabric samples." />
                <meta property="og:title" content="Fabric Samples" />
                <meta property="og:description" content="Browse our collection of fabric samples." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jonahdavies.com/fabricSamples" />
                <meta property="og:image" content="https://www.jonahdavies.com/images/fabric-samples-og-image.jpg" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, fabric samples, fabric collection, bespoke fabric, artistic fabrics" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.jonahdavies.com/fabricSamples" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "CollectionPage",
                          "name": "Fabric Samples",
                          "description": "Browse our collection of fabric samples.",
                          "url": "https://www.jonahdavies.com/fabricSamples",
                          "image": "https://www.jonahdavies.com/images/fabric-samples-og-image.jpg",
                          "publisher": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          }
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <div className="space-y-24 md:space-y-32 mb-24">
                    <ArrowLink href={"/"} width={70} height={70} top={0} left={0} className="absolute md:hidden" />
                    <ArrowLink href={"/"} width={100} height={100} top={0} left={0} className="absolute hidden md:block" />
                    {rails.map((rail, railIndex) => (
                        <div key={railIndex} className={`relative w-full ${railIndex % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}>
                            <img src="/fabricSample/rail.png" alt="Clothesline" className="absolute w-full scale-110" />
                            <div className="flex justify-between w-full px-4 md:px-12 lg:px-24 flex-wrap">
                                {rail.map((sample) => (
                                    <div key={sample.index} className="w-1/2 md:w-1/3 lg:w-1/4 -mt-4 p-2">
                                        <Link href={`/fabricSamples/${sample.index}`}>
                                            <ImageCard src={sample.src} alt={`Fabric Sample ${sample.index + 1}`} />
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10 mt-auto">
                    <ProjectScroll />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FabricSamples;
