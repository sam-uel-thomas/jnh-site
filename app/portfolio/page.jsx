import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Portfolio = () => {
    return (
        <div>
            <div className='bg-white flex flex-col justify-between min-h-[100dvh]'>
                <Navbar />
                <div className="relative flex flex-col justify-end items-center w-full pt-0 md:pt-8 mb-5 z-10">
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio