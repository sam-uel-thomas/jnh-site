import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SlidePage from '../components/SlidePage';
import photographyData from '../data/photographyData';

const PhotographyPage = () => (
    <>
        <div className='bg-white flex flex-col items-center min-h-[100svh] overflow-x-hidden'>
            <Navbar />
            <SlidePage data={photographyData} link={"photography"} />
        </div>
        <Footer />
    </>
);

export default PhotographyPage;