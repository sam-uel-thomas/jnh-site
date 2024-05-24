import React from 'react'
import animationData from '../animationData'
import ImageCard from '../../components/ImageCard'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ArrowLink from '../../components/ArrowLink';
import Link from 'next/link'
import ProjectScroll from '../../components/ProjectScroll'
import Image from 'next/image'

export default function page({ params }) {
    const sample = animationData[Number(params.sampleId)];

    if (!sample) {
        return <h1>No fabric sample found for id {params.sampleId}</h1>;
    }

    return (
        <>
            <div className='bg-white flex flex-col min-h-screen'>
                <Navbar />
                <ArrowLink href="/animation" width={100} height={100} top={20} left={10} />
                <div className="pl-32 mt-12 flex items-start justify-start">
                    <div className='w-[28rem] h-auto mr-8'>
                        <ImageCard src={sample.src} alt={sample.alt}/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <span className='text-black font-semibold text-4xl mb-8'>{sample.title}</span>
                        {sample.description.map((desc, index) => (
                            <span key={index} className='text-black font-semibold mb-4 text-2xl'>{desc}</span>
                        ))}
                    </div>
                </div>
                <div className='flex flex-row mx-8 mt-12 justify-center'>
                    {animationData.map((item, index) => {
                        if (index !== Number(params.sampleId)) {
                            return (
                                <div key={index} className='w-[28rem] h-auto mr-8'>
                                    <Link href={`/animation/${index}`}>
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