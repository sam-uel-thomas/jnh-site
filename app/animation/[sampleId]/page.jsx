// page.jsx
import React from 'react'
import animationData from '../../data/animationData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function page({ params }) {
    return (
        <>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={animationData} sampleId={params.sampleId} arrowLink={"/animation"} imageWidth={42}/>
            </div>
            <Footer />
        </>
    )
}