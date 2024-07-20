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
    const pageDescription = portfolio === 'main' ? 'Explore our main portfolio featuring the latest designs and collections.' : 'Explore our print portfolio showcasing artistic and bespoke prints.';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.jonahdavies.com/portfolio/portfolioPage?portfolio=${portfolio}`} />
                <meta property="og:image" content={`https://www.jonahdavies.com/images/${portfolio}-portfolio-og-image.jpg`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={`Jonah Davies, ${portfolio === 'main' ? 'main portfolio, fashion design, latest designs' : 'print portfolio, artistic prints, bespoke prints'}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href={`https://www.jonahdavies.com/portfolio/portfolioPage?portfolio=${portfolio}`} />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "WebPage",
                          "name": "${pageTitle}",
                          "description": "${pageDescription}",
                          "url": "https://www.jonahdavies.com/portfolio/portfolioPage?portfolio=${portfolio}",
                          "publisher": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          }
                        }
                    `}
                </script>
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
