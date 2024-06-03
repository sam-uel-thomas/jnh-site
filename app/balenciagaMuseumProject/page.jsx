import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SlidePage from '../components/SlidePage';
import balenciagaMuseumProjectData from '../data/balenciagaMuseumProjectData';

const Page = () => {
    return (
        <>
            <div className='bg-white flex flex-col items-center min-h-[100dvh] overflow-x-hidden'>
                <Navbar />
                <SlidePage data={balenciagaMuseumProjectData} link={"balenciagaMuseumProject"} />
            </div>
            <Footer />
        </>
    );
}

export default Page;