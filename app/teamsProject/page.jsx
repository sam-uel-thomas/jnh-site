import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import ProjectScroll from '../components/ProjectScroll'
import teamProjectData from './teamProjectData'
import Link from 'next/link'

const teamProject = () => {
    return (
        <div>
            <div className='bg-white flex flex-col justify-between min-h-[100dvh] overflow-x-hidden'>
                <Navbar />
                <div className="relative flex flex-col justify-end items-center w-full md:w-2/3 pt-0 md:pt-0 mb-5 z-10 pr-8 md:pl-32">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-12 p-6 md:p-16">
                        {teamProjectData.length > 0 ? (
                            teamProjectData.map((sample, index) => (
                                <Link href={`/teamsProject/${index}`} key={index}>
                                    <div className="w-2/3 h-auto">
                                        <ImageCard src={sample.src} alt={sample.alt} title={index+1} />
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

export default teamProject