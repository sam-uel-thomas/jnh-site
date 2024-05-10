import React from 'react';
import ProjectScroll from './ProjectScroll';
import Navbar from './Navbar';
import Footer from './Footer';

const LandingPage = () => {
    return (
        <>
            <div className='flex flex-col justify-between h-[100dvh]'>
                <Navbar />
                <div className="h-full object-cover mt-4 relative">
                    <img src="/animation/jnhWalking.gif" alt="JNH Rectangle" className="absolute w-full h-full object-contain object-center -z-2 md:hidden px-2" />
                    <img src="/animation/8.gif" alt="JNH Rectangle" className="absolute h-full object-contain object-center -z-2 hidden md:block" />
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