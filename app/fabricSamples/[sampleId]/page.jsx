// page.jsx
import React from 'react'
import fabricSamplesData from '../../data/fabricSamplesData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';
import Head from 'next/head';

export default function page({ params }) {
    const sample = fabricSamplesData[Number(params.sampleId)];
    const pageTitle = sample ? `Fabric Sample - ${sample.title}` : 'Fabric Sample';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Detailed view of a fabric sample from our collection." />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content="Detailed view of a fabric sample from our collection." />
                <meta property="og:image" content={sample ? sample.src : ''} />
                <meta property="og:type" content="website" />
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={fabricSamplesData} sampleId={params.sampleId} arrowLink={"/fabricSamples"} imageWidth={20}/>
            </div>
            <Footer />
        </>
    )
}