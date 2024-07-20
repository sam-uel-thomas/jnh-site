import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SlidePage from '../components/SlidePage';
import colourProjectData from '../data/colourProjectData';

const ColourProjectPage = () => (
    <>
        <Head>
            <title>Jonah Davies - Colour Project</title>
            <meta name="description" content="Explore the Colour Project by Jonah Davies. A collection of unique designs and concepts inspired by different colours." />
            <meta property="og:title" content="Jonah Davies - Colour Project" />
            <meta property="og:description" content="Explore the Colour Project by Jonah Davies. A collection of unique designs and concepts inspired by different colours." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.jonahdavies.com/colourProject" />
            <meta property="og:image" content="https://www.jonahdavies.com/images/colour-project-og-image.jpg" />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="Jonah Davies, Colour Project, colour designs, artistic concepts, bespoke designs" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href="https://www.jonahdavies.com/colourProject" />
            <script type="application/ld+json">
                {`
                    {
                      "@context": "http://schema.org",
                      "@type": "ImageGallery",
                      "name": "Jonah Davies - Colour Project",
                      "description": "Explore the Colour Project by Jonah Davies. A collection of unique designs and concepts inspired by different colours.",
                      "url": "https://www.jonahdavies.com/colourProject",
                      "image": "https://www.jonahdavies.com/images/colour-project-og-image.jpg",
                      "publisher": {
                        "@type": "Person",
                        "name": "Jonah Davies"
                      }
                    }
                `}
            </script>
        </Head>
        <div className='bg-white flex flex-col items-center min-h-[100dvh] overflow-x-hidden'>
            <Navbar />
            <SlidePage data={colourProjectData} link={"colourProject"} />
        </div>
        <Footer />
    </>
);

export default ColourProjectPage;
