import React from 'react';
import ProjectScroll from './ProjectScroll';
import Navbar from './Navbar';
import Footer from './Footer';
import Image from 'next/image';

const LandingPage = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main className='flex flex-col justify-between h-[100dvh]'>
                <div className="h-full object-cover mt-4 relative">
                    <Image src="/logos/logoAnimated.gif" alt="Animated JNH Logo" width={1000} height={1000} className="absolute w-full h-full object-contain object-center -z-2 md:hidden px-2" />
                    <Image src="/animation/7.GIF" alt="JNH Animation" width={2000} height={2000} className="absolute w-full object-contain object-center -z-2 hidden md:block" />
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
                    <ProjectScroll/>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default LandingPage;