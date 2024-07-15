import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SlidePage from '../components/SlidePage';
import colourProjectData from '../data/colourProjectData';

const ColourProjectPage = () => (
    <>
        <Head>
            <title>Colour Project</title>
            <meta name="description" content="Explore the Colour Project. A collection of unique designs and concepts inspired by different colours." />
        </Head>
        <div className='bg-white flex flex-col items-center min-h-[100dvh] overflow-x-hidden'>
            <Navbar />
            <SlidePage data={colourProjectData} link={"colourProject"} />
        </div>
        <Footer />
    </>
);

export default ColourProjectPage;