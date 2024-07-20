import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectScroll from '../components/ProjectScroll'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const Portfolio = () => {
    return (
        <div>
            <Head>
                <title>Jonah Davies - Portfolio</title>
                <meta name="description" content="Explore the main and print portfolios of Jonah Davies. Discover unique fashion designs and artistic prints." />
                <meta property="og:title" content="Jonah Davies - Portfolio" />
                <meta property="og:description" content="Explore the main and print portfolios of Jonah Davies. Discover unique fashion designs and artistic prints." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jonahdavies.com/portfolio" />
                <meta property="og:image" content="https://www.jonahdavies.com/images/portfolio-og-image.jpg" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, portfolio, fashion design, print portfolio, artistic prints, bespoke fashion" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "WebPage",
                          "name": "Jonah Davies - Portfolio",
                          "description": "Explore the main and print portfolios of Jonah Davies. Discover unique fashion designs and artistic prints.",
                          "url": "https://www.jonahdavies.com/portfolio",
                          "publisher": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          }
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col justify-between min-h-screen overflow-x-hidden'>
                <Navbar />
                <div className='w-full mb-5 z-10'>
                    <div className="relative flex flex-col items-center w-full mb-5 z-10">
                        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 items-center">
                            <div className="w-auto h-auto relative">
                                <Link href={`/portfolio/portfolioPage?portfolio=main`}>
                                    <div className='hover:scale-105 transition-transform duration-500 ease-in-out flex items-center justify-center'>
                                        <Image src="/portfolio/mainButton.png" alt="Main Portfolio" height={400} width={400} />
                                    </div>
                                </Link>
                            </div>
                            <div className="w-auto h-auto relative">
                                <Link href={`/portfolio/portfolioPage?portfolio=printSamples`}>
                                    <div className='hover:scale-105 transition-transform duration-500 ease-in-out flex items-center justify-center'>
                                        <Image src="/portfolio/printSamplesButton.png" alt="Print Samples Portfolio" height={400} width={400} />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
                    <ProjectScroll/>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio
