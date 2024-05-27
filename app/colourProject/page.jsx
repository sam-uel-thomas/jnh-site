import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SlidePage from '../components/SlidePage';
import colourProjectData from '../data/colourProjectData';

const ColourProjectPage = () => (
    <div className='bg-white flex flex-col items-center min-h-[100vh] overflow-x-hidden'>
        <Navbar />
        <SlidePage data={colourProjectData} link={"colourProject"} />
        <Footer />
    </div>
);

export default ColourProjectPage;