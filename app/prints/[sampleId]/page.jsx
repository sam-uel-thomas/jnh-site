import React from 'react'
import printsData from '../../data/printsData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function page({ params }) {
    return (
        <>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={printsData} sampleId={params.sampleId} arrowLink={"/prints"} imageWidth={24}/>
            </div>
            <Footer />
        </>
    )
}