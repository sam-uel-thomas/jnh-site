import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'

const balenciagaMuseumProjectData = [];

const BalenciagaMuseumProject = () => {
    return (
        <div>
            <div className='bg-white flex flex-col justify-between min-h-[100dvh]'>
                <Navbar />
                <div className="relative flex flex-col justify-end items-center w-full pt-0 md:pt-8 mb-5 z-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-16 p-6 md:p-16">
                        {balenciagaMuseumProjectData.length > 0 ? (
                            balenciagaMuseumProjectData.map((sample, index) => (
                                <ImageCard key={index} src={sample.src} alt={sample.alt} title={sample.title} />
                            ))
                        ) : (
                            <span>No data available</span>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BalenciagaMuseumProject