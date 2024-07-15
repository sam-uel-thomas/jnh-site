import React from 'react'
import printsData from '../../data/printsData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';
import Head from 'next/head';

export default function page({ params }) {
    const print = printsData[Number(params.sampleId)];
    const pageTitle = print ? `Prints - ${print.title}` : 'Prints';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Detailed view of a print from our collection." />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content="Detailed view of a print from our collection." />
                <meta property="og:image" content={print ? print.src : ''} />
                <meta property="og:type" content="website" />
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={printsData} sampleId={params.sampleId} arrowLink={"/prints"} imageWidth={24}/>
            </div>
            <Footer />
        </>
    )
}