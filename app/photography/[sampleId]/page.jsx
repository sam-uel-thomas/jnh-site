// page.jsx
import React from 'react'
import photographyData from '../../data/photographyData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function page({ params }) {
    return (
        <>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                <ThroughPage projectData={photographyData} sampleId={params.sampleId} arrowLink={"/photography"} />
            </div>
            <Footer />
        </>
    )
}