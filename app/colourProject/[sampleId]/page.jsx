import React from 'react'
import colourProjectData from '../../data/colourProjectData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function page({ params }) {
    return (
        <>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={colourProjectData} sampleId={params.sampleId} arrowLink={"/colourProject"} imageWidth={32}/>
            </div>
            <Footer />
        </>
    )
}