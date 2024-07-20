import React from 'react';
import Head from 'next/head';
import ProjectScroll from './components/ProjectScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';

const LandingPage = () => {
    return (
        <div className="bg-white flex flex-col justify-between relative overflow-x-hidden">
            <Head>
                <title>Jonah Davies - Fashion Designer & Artist Portfolio</title>
                <meta name="description" content="Explore the portfolio of Jonah Davies, a renowned fashion designer and artist. Discover unique fashion designs and contemporary art pieces." />
                <meta property="og:title" content="Jonah Davies - Fashion Designer & Artist Portfolio" />
                <meta property="og:description" content="Explore the portfolio of Jonah Davies, a renowned fashion designer and artist. Discover unique fashion designs and contemporary art pieces." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jonahdavies.com/" />
                <meta property="og:image" content="https://www.jonahdavies.com/images/og-image.jpg" />
                <link rel="canonical" href="https://www.jonahdavies.com/" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, fashion designer, artist, fashion portfolio, art portfolio, contemporary art, bespoke fashion design" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "WebSite",
                          "url": "https://www.jonahdavies.com/",
                          "name": "Jonah Davies - Fashion Designer & Artist Portfolio",
                          "description": "Explore the portfolio of Jonah Davies, a renowned fashion designer and artist. Discover unique fashion designs and contemporary art pieces.",
                          "sameAs": [
                            "https://www.facebook.com/jonahdavies",
                            "https://www.instagram.com/jonahdavies",
                            "https://www.twitter.com/jonahdavies"
                          ]
                        }
                    `}
                </script>
            </Head>
            <div className='flex flex-col justify-between h-[100dvh]'>
                <Navbar />
                <main className="h-full object-cover mt-4 relative">
                    <Image src="/logos/logoAnimated.gif" alt="Jonah Davies Logo Animation" width={1000} height={1000} className="absolute w-full h-full object-contain object-center -z-2 md:hidden px-2" />
                    <Image src="/animation/7.GIF" alt="Main Animation of Jonah Davies' Work" width={2000} height={2000} className="absolute w-full object-contain object-center -z-2 hidden md:block" />
                </main>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
                    <ProjectScroll />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;
