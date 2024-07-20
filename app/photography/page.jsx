import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SlidePage from '../components/SlidePage';
import photographyData from '../data/photographyData';
import Head from 'next/head';

const PhotographyPage = () => (
    <>
        <Head>
            <title>Jonah Davies - Photography Collection</title>
            <meta name="description" content="Explore the extensive photography collection by Jonah Davies. Discover captivating images that showcase artistic expression through the lens." />
            <meta property="og:title" content="Jonah Davies - Photography Collection" />
            <meta property="og:description" content="Explore the extensive photography collection by Jonah Davies. Discover captivating images that showcase artistic expression through the lens." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.jonahdavies.com/photography" />
            <meta property="og:image" content="https://www.jonahdavies.com/images/photography-og-image.jpg" />
            <meta name="robots" content="index, follow" />
            <meta name="keywords" content="Jonah Davies, photography, photography collection, artistic photography, photo gallery" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="canonical" href="https://www.jonahdavies.com/photography" />
            <script type="application/ld+json">
                {`
                    {
                      "@context": "http://schema.org",
                      "@type": "ImageGallery",
                      "name": "Jonah Davies - Photography Collection",
                      "description": "Explore the extensive photography collection by Jonah Davies. Discover captivating images that showcase artistic expression through the lens.",
                      "url": "https://www.jonahdavies.com/photography",
                      "image": "https://www.jonahdavies.com/images/photography-og-image.jpg",
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
            <SlidePage data={photographyData} link={"photography"} />
        </div>
        <Footer />
    </>
);

export default PhotographyPage;
