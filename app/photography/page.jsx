import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SlidePage from '../components/SlidePage';
import photographyData from '../data/photographyData';
import Head from 'next/head';

const PhotographyPage = () => (
    <>
        <Head>
            <title>Photography Collection</title>
            <meta name="description" content="Explore our extensive collection of photography." />
            <meta property="og:title" content="Photography Collection" />
            <meta property="og:description" content="Explore our extensive collection of photography." />
            <meta property="og:type" content="website" />
        </Head>
        <div className='bg-white flex flex-col items-center min-h-[100svh] overflow-x-hidden'>
            <Navbar />
            <SlidePage data={photographyData} link={"photography"} />
        </div>
        <Footer />
    </>
);

export default PhotographyPage;