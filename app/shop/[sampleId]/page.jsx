import React from 'react'
import shopData from '../shopData'
import ImageCard from '../../components/ImageCard'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link'

export default function page({ params }) {
    const sample = shopData[Number(params.sampleId)];

    if (!sample) {
        return <h1>No fabric sample found for id {params.sampleId}</h1>;
    }

    return (
        <>
            <div className='bg-white flex flex-col min-h-screen'>
                <Navbar />
                <div className="pl-32 mt-12 flex items-start justify-start">
                    <div className='w-[28rem] h-auto mr-8'>
                        <ImageCard src={sample.src} alt={sample.alt}/>
                    </div>
                    <div className='flex flex-col w-1/2 mt-16'>
                        <span className='text-black font-semibold text-2xl mb-4'>{sample.title}</span>
                        {sample.description.map((desc, index) => (
                            <span key={index} className='text-black font-semibold text-l'>{desc}</span>
                        ))}
                    </div>
                </div>
                <div className='flex flex-row mx-8 mt-12 justify-center'>
                    {shopData.map((item, index) => {
                        if (index !== Number(params.sampleId)) {
                            return (
                                <div key={index} className='w-[28rem] h-auto mr-8'>
                                    <Link href={`/shop/${index}`}>
                                        <ImageCard src={item.src} alt={item.alt}/>
                                    </Link>
                                </div>
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}