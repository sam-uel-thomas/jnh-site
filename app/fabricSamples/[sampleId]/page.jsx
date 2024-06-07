// page.jsx
import React from 'react'
import fabricSamplesData from '../../data/fabricSamplesData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function page({ params }) {
    return (
        <>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={fabricSamplesData} sampleId={params.sampleId} arrowLink={"/fabricSamples"} imageWidth={20}/>
            </div>
            <Footer />
        </>
    )
}