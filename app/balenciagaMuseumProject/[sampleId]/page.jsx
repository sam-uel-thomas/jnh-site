// page.jsx
import React from 'react'
import Head from 'next/head'
import balenciagaMuseumProjectData from '../../data/balenciagaMuseumProjectData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function page({ params }) {
    const sample = balenciagaMuseumProjectData[params.sampleId];
    const pageTitle = sample ? `Balenciaga Museum Project - ${sample.title}` : 'Balenciaga Museum Project';
    const pageDescription = sample ? `Details about the Balenciaga Museum Project: ${sample.title}` : 'Balenciaga Museum Project details';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={balenciagaMuseumProjectData} sampleId={params.sampleId} arrowLink={"/balenciagaMuseumProject"} />
            </div>
            <Footer />
        </>
    )
}