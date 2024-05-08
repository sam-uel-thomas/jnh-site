import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ImageCard from '../components/imageCard'

const tailoringProjectData = [];

const TailoringProject = () => {
    return (
        <div>
            <div className='bg-white flex flex-col justify-between min-h-[100dvh]'>
                <Navbar />
                <div className="relative flex flex-col justify-end items-center w-full pt-0 md:pt-8 mb-5 z-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-16 p-6 md:p-16">
                        {tailoringProjectData.length > 0 ? (
                            tailoringProjectData.map((sample, index) => (
                                <ImageCard key={index} src={sample.src} alt={sample.alt} title={sample.title} />
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TailoringProject