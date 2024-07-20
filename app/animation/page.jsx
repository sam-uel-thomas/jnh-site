import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import animationData from '../data/animationData'
import ProjectScroll from '../components/ProjectScroll'
import Link from 'next/link'

const AnimationPage = () => {
    return (
        <>
            <Head>
                <title>Jonah Davies - Animation Page</title>
                <meta name="description" content="Explore the animation projects by Jonah Davies. Discover a variety of creative and unique animation works." />
                <meta property="og:title" content="Jonah Davies - Animation Page" />
                <meta property="og:description" content="Explore the animation projects by Jonah Davies. Discover a variety of creative and unique animation works." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jonahdavies.com/animation" />
                <meta property="og:image" content="https://www.jonahdavies.com/images/animation-og-image.jpg" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, animation, animation projects, creative animation, unique animation works" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.jonahdavies.com/animation" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "ImageGallery",
                          "name": "Jonah Davies - Animation Page",
                          "description": "Explore the animation projects by Jonah Davies. Discover a variety of creative and unique animation works.",
                          "url": "https://www.jonahdavies.com/animation",
                          "image": "https://www.jonahdavies.com/images/animation-og-image.jpg",
                          "publisher": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          }
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col justify-between min-h-[100dvh] overflow-x-hidden'>
                <Navbar />
                <main className="relative flex flex-col justify-end items-center w-full pt-0 md:pt-0 mb-5 z-10">
                    <div className="grid grid-cols-2 gap-6 md:gap-12 p-6 md:p-16 justify-center">
                        {animationData.length > 0 ? (
                            animationData.map((sample, index) => (
                                <Link href={`/animation/${index}`} key={index} className='flex justify-center items-center'>
                                    <div className="w-full h-auto">
                                        <ImageCard 
                                            src={sample.staticSrc} 
                                            hoverSrc={sample.src}
                                            alt={sample.alt} 
                                            title={`${index+1}: ${sample.title}`} 
                                        />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                </main>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
                    <ProjectScroll />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AnimationPage;
