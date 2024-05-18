import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectScroll from '../components/ProjectScroll'
import Link from 'next/link'
import Image from 'next/image'

const Portfolio = () => {
    return (
        <div>
            <div className='bg-white flex flex-col justify-between min-h-screen'>
                <Navbar />
                <div className='w-full mb-5 z-10'>
                    <div className="relative flex flex-col items-center w-full mb-5 z-10">
                        <div className="flex flex-col md:flex-row space-x-4 items-center">
                            <div className="w-auto h-auto relative">
                                <Link href="/portfolio/mini.pdf">
                                    <div className='hover:scale-105 transition-transform duration-500 ease-in-out flex items-center justify-center'>
                                        <Image src="/logos/portfolioShape1.png" alt="Mini Portfolio" height={400} width={400} />
                                        <span className='text-black font-semibold absolute'>MINI PORTFOLIO</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-auto h-auto relative">
                                <Link href="/portfolio/main">
                                    <div className='hover:scale-105 transition-transform duration-500 ease-in-out flex items-center justify-center'>
                                        <Image src="/logos/portfolioShape2.png" alt="Main Portfolio" height={500} width={500} />
                                        <span className='text-black font-semibold absolute'>MAIN PORTFOLIO</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="w-auto h-auto relative">
                                <Link href="/portfolio/print.pdf">
                                    <div className='hover:scale-105 transition-transform duration-500 ease-in-out flex items-center justify-center'>
                                        <Image src="/logos/portfolioShape3.png" alt="Print Portfolio" height={400} width={400}/>
                                        <span className='text-black font-semibold absolute'>PRINT PORTFOLIO</span>
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