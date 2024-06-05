import React from 'react';
import ImageCard from './ImageCard';
import Link from 'next/link';
import ArrowLink from './ArrowLink';
import ProjectScroll from './ProjectScroll';

export default function ThroughPage({ projectData, sampleId, arrowLink, imageWidth = 32}) {
    const sample = projectData[Number(sampleId)];

    if (!sample) {
        return <h1>No fabric sample found for id {sampleId}</h1>;
    }

    return (
        <>
            <ArrowLink href={arrowLink} width={70} height={70} top={0} left={0} className="md:hidden" />
            <ArrowLink href={arrowLink} width={100} height={100} top={0} left={0} className="hidden md:block" />
            <div className="px-8 md:pl-36 mt-12 flex flex-col md:flex-row items-start justify-start z-10">
                <div className={`w-full mb-4 md:mb-0 md:mr-8 md:hidden`}>
                    <ImageCard src={sample.src} alt={sample.alt}/>
                </div>
                <div className={`hidden md:block w-[${imageWidth}rem] mb-4 md:mb-0 md:mr-8`}>
                    <ImageCard src={sample.src} alt={sample.alt}/>
                </div>
                <div className='flex flex-col w-full md:w-1/2'>
                    <span className='text-black font-semibold text-2xl'>{sample.title}</span>
                    {sample.description && sample.description.map((desc, index) => (
                        <span key={index} className='text-black font-semibold text-xl'>{desc}</span>
                    ))}
                </div>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-none md:flex md:flex-row gap-4 mx-4 md:mx-8 mt-12'>
                {projectData.map((item, index) => {
                    if (index !== Number(sampleId)) {
                        return (
                            <div key={index} className='w-full h-auto'>
                                <Link href={`${arrowLink}/${index}`}>
                                    <ImageCard src={item.src} alt={item.alt} />
                                </Link>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10 mt-auto">
                <ProjectScroll />
            </div>
        </>
    );
}
