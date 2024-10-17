import React from 'react';
import Head from 'next/head';
import ProjectScroll from './components/ProjectScroll';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Image from 'next/image';

const LandingPage = () => {
    return (
        <div className="bg-white flex flex-col justify-between relative overflow-x-hidden min-h-screen">
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
                          "description": "Explore the portfolio of Jonah Davies, a renowned fashion designer and artist. Discover unique fashion designs and contemporary art pieces."
                        }
                    `}
                </script>
            </Head>
            <Navbar />
            <main className="flex-grow flex flex-col justify-between">
                <div className="relative w-full h-[calc(100vh-220px)] overflow-hidden">
                    <Image 
                        src="/logos/logoAnimated.gif" 
                        alt="Jonah Davies Logo Animation" 
                        layout="fill"
                        objectFit="cover"
                        className="md:hidden"
                    />
                    <Image 
                        src="/background.png" 
                        alt="Main Animation of Jonah Davies' Work" 
                        layout="fill"
                        objectFit="cover"
                        className="hidden md:block"
                    />
                </div>
                <div className="w-full mt-auto mb-8">
                    <ProjectScroll />
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default LandingPage;