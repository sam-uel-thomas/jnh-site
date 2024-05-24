import React from 'react'
import teamsProjectData from '../teamProjectData'
import ImageCard from '../../components/ImageCard'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link'
import ArrowLink from '../../components/ArrowLink'
import ProjectScroll from '../../components/ProjectScroll'

export default function page({ params }) {
    const sample = teamsProjectData[Number(params.sampleId)];

    if (!sample) {
        return <h1>No fabric sample found for id {params.sampleId}</h1>;
    }

    return (
        <>
            <div className='bg-white flex flex-col min-h-screen'>
                <Navbar />
                <ArrowLink href="/teamsProject" width={100} height={100} top={20} left={10} />
                <div className="pl-32 mt-12 flex items-start justify-start">
                    <div className='w-[28rem] h-auto mr-8'>
                        <ImageCard src={sample.src} alt={sample.alt}/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <span className='text-black font-semibold text-2xl'>{sample.title}</span>
                        <span className='text-black font-semibold text-xl'>{sample.description}</span>
                    </div>
                </div>
                <div className='flex flex-row mx-8 mt-12 justify-center'>
                    {teamsProjectData.map((item, index) => {
                        if (index !== Number(params.sampleId)) {
                            return (
                                <div key={index} className='w-[28rem] h-auto mr-8'>
                                    <Link href={`/teamsProject/${index}`}>
                                        <ImageCard src={item.src} alt={item.alt}/>
                                    </Link>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10 mt-auto">
                    <ProjectScroll/>
                </div>
            </div>
            <Footer />
        </>
    )
}