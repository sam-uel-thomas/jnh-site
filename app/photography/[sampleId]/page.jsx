// page.jsx
import React from 'react'
import photographyData from '../../data/photographyData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';
import Head from 'next/head';

export default function page({ params }) {
    const photo = photographyData[Number(params.sampleId)];
    const pageTitle = photo ? `Photography - ${photo.title}` : 'Photography';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Detailed view of a photography from our collection." />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content="Detailed view of a photography from our collection." />
                <meta property="og:image" content={photo ? photo.src : ''} />
                <meta property="og:type" content="website" />
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={photographyData} sampleId={params.sampleId} arrowLink={"/photography"}/>
            </div>
            <Footer />
        </>
    )
}