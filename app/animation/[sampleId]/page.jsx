// page.jsx
import React from 'react'
import Head from 'next/head'
import animationData from '../../data/animationData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function page({ params }) {
    const sample = animationData[params.sampleId];
    const pageTitle = sample ? `Animation - ${sample.title}` : 'Animation';
    const pageDescription = sample ? `Details about the animation project: ${sample.title}` : 'Animation project details';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={animationData} sampleId={params.sampleId} arrowLink={"/animation"} imageWidth={42}/>
            </div>
            <Footer />
        </>
    )
}