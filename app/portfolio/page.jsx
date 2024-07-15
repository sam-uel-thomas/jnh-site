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
                <title>Portfolio</title>
                <meta name="description" content="Explore our main and print portfolios." />
                <meta property="og:title" content="Portfolio" />
                <meta property="og:description" content="Explore our main and print portfolios." />
                <meta property="og:type" content="website" />
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