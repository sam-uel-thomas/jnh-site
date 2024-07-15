import React from 'react';
import ImageCard from './ImageCard';
import Link from 'next/link';
import ArrowLink from './ArrowLink';
import ProjectScroll from './ProjectScroll';
import Image from 'next/image';

export default function ThroughPage({ projectData, sampleId, arrowLink, imageWidth = 32}) {
    const sample = projectData[Number(sampleId)];

    if (!sample) {
        return <h1>No fabric sample found for id {sampleId}</h1>;
    }

    return (
        <main aria-label="Fabric sample details">
            <ArrowLink href={arrowLink} width={70} height={70} top={0} left={0} className="md:hidden" />
            <ArrowLink href={arrowLink} width={100} height={100} top={0} left={0} className="hidden md:block" />
            <section className="px-8 md:pl-36 mt-12 flex flex-col md:flex-row items-start justify-start z-10">
                <div className={`w-full mb-4 md:mb-0 md:mr-8 md:hidden`}>
                    <Image src={sample.src} alt={sample.alt} width={32} height={64} layout="responsive" objectFit="cover"/> {/* Replace ImageCard with Image */}
                </div>
                <div 
                    className={`hidden md:block mb-4 md:mb-0 md:mr-8`}
                    style={{ width: `${imageWidth}rem` }} // Use the style prop to set the width dynamically
                >
                    <Image src={sample.src} alt={sample.alt} width={32} height={64} layout="responsive" objectFit="cover"/> {/* Replace ImageCard with Image */}
                </div>
                <div className='flex flex-col w-full md:w-1/2'>
                    <h2 className='text-black font-semibold text-xl md:text-4xl mb-4 md:mb-8'>{sample.title}</h2>
                    {sample.description && sample.description.map((desc, index) => (
                        <p key={index} className='text-black font-semibold text-l md:text-xl mb-2 md:mb-6'>{desc}</p>
                    ))}
                </div>
            </section>
            <section className='grid grid-cols-3 md:grid-cols-none md:flex md:flex-row gap-4 mx-4 md:mx-8 mt-12'>
                {projectData.map((item, index) => {
                    if (index !== Number(sampleId)) {
                        return (
                            <article key={index} className='w-full h-auto'>
                                <Link href={`${arrowLink}/${index}`} aria-label={`Go to ${item.alt}`}>
                                    <ImageCard src={item.src} alt={item.alt} />
                                </Link>
                            </article>
                        );
                    }
                    return null;
                })}
            </section>
            <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10 mt-auto">
                <ProjectScroll />
            </div>
        </main>
    );
}