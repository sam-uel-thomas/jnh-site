import React from 'react'
import Head from 'next/head'
import colourProjectData from '../../data/colourProjectData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function page({ params }) {
    const sample = colourProjectData[params.sampleId];
    const pageTitle = sample ? `Colour Project - ${sample.title}` : 'Colour Project';
    const pageDescription = sample ? `Details about the Colour Project: ${sample.title}` : 'Colour Project details';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={colourProjectData} sampleId={params.sampleId} arrowLink={"/colourProject"} imageWidth={48}/>
            </div>
            <Footer />
        </>
    )
}