'use client'
import React from 'react';
import { useSearchParams } from 'next/navigation';
import printPortfolioData from '../../data/printPortfolioData';
import mainPortfolioData from '../../data/mainPortfolioData';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import SlidePage from '@/app/components/SlidePage';
import Head from 'next/head';

const Page = () => {
    const searchParams = useSearchParams();
    const portfolio = searchParams.get('portfolio');

    const data = portfolio === 'main' ? mainPortfolioData : printPortfolioData;
    const pageTitle = portfolio === 'main' ? 'Main Portfolio' : 'Print Portfolio';
    const pageDescription = portfolio === 'main' ? 'Explore our main portfolio.' : 'Explore our print portfolio.';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
            </Head>
            <div className='bg-white flex flex-col items-center min-h-[100svh] overflow-x-hidden'>
                <Navbar />
                <SlidePage data={data} isImageClickable={false} />
            </div>
            <Footer />
        </>
    );
}

export default Page;