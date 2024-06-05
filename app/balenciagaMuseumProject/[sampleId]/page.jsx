// page.jsx
import React from 'react'
import balenciagaMuseumProjectData from '../../data/balenciagaMuseumProjectData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function page({ params }) {
    return (
        <>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={balenciagaMuseumProjectData} sampleId={params.sampleId} arrowLink={"/balenciagaMuseumProject"} />
            </div>
            <Footer />
        </>
    )
}