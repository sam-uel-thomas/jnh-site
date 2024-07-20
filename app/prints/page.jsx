'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import ProjectScroll from '../components/ProjectScroll'
import printsData from '../data/printsData'
import Link from 'next/link'
import SlidePage from '../components/SlidePage'
import Head from 'next/head'

const predefinedPositions = [
    { left: '50%', top: '38%' }, //1
    { left: '30%', top: '70%' }, //2
    { left: '68%', top: '10%' }, //3
    { left: '70%', top: '70%' }, //4
    { left: '32%', top: '10%' }, //5
    { left: '90%', top: '80%' }, //6
    { left: '12%', top: '65%' }, //7
    { left: '10%', top: '15%' }, //8
    { left: '87%', top: '20%' }, //9
];

const Prints = () => {
    const initialPositions = printsData.map(() => ({
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`
    }));

    const [positions, setPositions] = useState(initialPositions);
    const [clicked, setClicked] = useState(printsData.map(() => false));

    const handleImageClick = (event, index) => {
        if (!clicked[index]) {
            event.preventDefault();

            const newPositions = [...positions];
            const newPosition = predefinedPositions[index % predefinedPositions.length];
            newPositions[index] = { ...newPosition, transform: 'translate(-50%, -50%)' };
            setPositions(newPositions);

            const newClicked = [...clicked];
            newClicked[index] = true;
            setClicked(newClicked);
        }
    };

    return (
        <div>
            <Head>
                <title>Jonah Davies - Print Collection</title>
                <meta name="description" content="Explore the unique print collection by Jonah Davies. Discover artistic expressions through bespoke prints." />
                <meta property="og:title" content="Jonah Davies - Print Collection" />
                <meta property="og:description" content="Explore the unique print collection by Jonah Davies. Discover artistic expressions through bespoke prints." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jonahdavies.com/prints" />
                <meta property="og:image" content="https://www.jonahdavies.com/images/prints-og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Jonah Davies - Print Collection" />
                <meta name="twitter:description" content="Explore the unique print collection by Jonah Davies. Discover artistic expressions through bespoke prints." />
                <meta name="twitter:image" content="https://www.jonahdavies.com/images/prints-og-image.jpg" />
                <link rel="canonical" href="https://www.jonahdavies.com/prints" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, prints, print collection, bespoke prints, artistic prints, art prints" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "CollectionPage",
                          "name": "Jonah Davies - Print Collection",
                          "description": "Explore the unique print collection by Jonah Davies. Discover artistic expressions through bespoke prints.",
                          "url": "https://www.jonahdavies.com/prints",
                          "image": "https://www.jonahdavies.com/images/prints-og-image.jpg",
                          "publisher": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          }
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col justify-between h-screen overflow-x-hidden'>
                <Navbar />
                <div className="block md:hidden">
                    <SlidePage data={printsData} link={"prints"} />
                </div>
                <div className="hidden md:block relative w-full h-full mt-24">
                    {printsData.length > 0 ? (
                        printsData.map((sample, index) => (
                            <Link href={`/prints/${index}`} key={index}>
                                <div
                                    className="absolute transition-all duration-500 ease-in-out cursor-pointer w-[14rem]"
                                    style={positions[index]}
                                    onClick={(event) => handleImageClick(event, index)}
                                >
                                    <ImageCard src={sample.src} alt={`Print by Jonah Davies - ${sample.alt}`} />
                                </div>
                            </Link>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
                <div className="hidden md:flex relative flex-col justify-end items-center w-full mb-5 z-10">
                    <ProjectScroll />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Prints;
