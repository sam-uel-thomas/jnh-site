import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import ProjectScroll from '../components/ProjectScroll'
import shopData from './shopData'
import Link from 'next/link'
import Head from 'next/head'

const shop = () => {
    return (
        <div>
            <Head>
                <title>Shop</title>
                <meta name="description" content="Browse our collection of fabric samples in our shop." />
                <meta property="og:title" content="Shop" />
                <meta property="og:description" content="Browse our collection of fabric samples in our shop." />
                <meta property="og:type" content="website" />
            </Head>
            <div className='bg-white flex flex-col justify-between min-h-[100dvh] overflow-x-hidden'>
                <Navbar />
                <div className="relative flex flex-col justify-end items-center w-full pt-0 md:pt-8 px-4 md:px-12 mb-5 z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-12 row-gap-6 gap-y-8 md:gap-y-12 mt-8 justify-center">
                        {shopData.length > 0 ? (
                            shopData.map((sample, index) => (
                                <Link href={`/shop/${index}`} key={index} className='flex justify-center items-center'>
                                    <div className="w-full h-auto">
                                        <ImageCard src={sample.src} alt={sample.alt} title={`${sample.title}`} className={"font-semibold"}/>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
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

export default shop