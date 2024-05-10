import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

const Portfolio = () => {
    return (
        <div>
            <div className='bg-white flex flex-col min-h-screen'>
                <Navbar />
                <div className='justify-center items-center w-full pt-0 md:pt-8 mb-5 z-10'>
                    <div className="relative flex flex-col items-center w-full pt-0 md:pt-8 mb-5 z-10">
                        <div className="flex flex-row space-x-4">
                            <div>
                                <Link href="/portfolio/mini.pdf">
                                    <span className='text-black font-semibold'>MINI PORTFOLIO</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="/portfolio/main.pdf">
                                    <span className='text-black font-semibold'>MAIN PORTFOLIO</span>
                                </Link>
                            </div>
                            <div>
                                <Link href="/portfolio/print.pdf">
                                    <span className='text-black font-semibold'>PRINT PORTFOLIO</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio