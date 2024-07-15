import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SlidePage from '../components/SlidePage';
import balenciagaMuseumProjectData from '../data/balenciagaMuseumProjectData';

const Page = () => {
    return (
        <>
            <Head>
                <title>Balenciaga Museum Project</title>
                <meta name="description" content="Explore the Balenciaga Museum Project. A collection of unique designs and concepts inspired by the Balenciaga Museum." />
            </Head>
            <div className='bg-white flex flex-col items-center min-h-[100dvh] overflow-x-hidden'>
                <Navbar />
                <SlidePage data={balenciagaMuseumProjectData} link={"balenciagaMuseumProject"} />
            </div>
            <Footer />
        </>
    );
}

export default Page;