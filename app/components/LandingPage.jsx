import React from 'react';
import Head from 'next/head';
import ProjectScroll from './ProjectScroll';
import Navbar from './Navbar';
import Footer from './Footer';
import Image from 'next/image';

const LandingPage = () => {
    return (
        <>
            <Head>
                <title>Landing Page</title>
                <meta name="description" content="Welcome to our landing page. Explore our projects and learn more about us." />
                <meta property="og:title" content="Landing Page" />
                <meta property="og:description" content="Welcome to our landing page. Explore our projects and learn more about us." />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://www.jonahdavies.com/" />
            </Head>
            <div className='flex flex-col justify-between h-[100dvh]'>
                <Navbar />
                <div className="h-full object-cover mt-4 relative">
                    <Image src="/logos/logoAnimated.gif" alt="Logo Animation" width={1000} height={1000} className="absolute w-full h-full object-contain object-center -z-2 md:hidden px-2" />
                    <Image src="/animation/7.GIF" alt="Main Animation" width={2000} height={2000} className="absolute w-full object-contain object-center -z-2 hidden md:block" />
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
                    <ProjectScroll/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LandingPage;