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
                <meta name="description" content="Explore the Balenciaga Museum Project by Jonah Davies. A collection of unique designs and concepts inspired by the Balenciaga Museum." />
                <meta property="og:title" content="Balenciaga Museum Project" />
                <meta property="og:description" content="Explore the Balenciaga Museum Project by Jonah Davies. A collection of unique designs and concepts inspired by the Balenciaga Museum." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jonahdavies.com/balenciagaMuseumProject" />
                <meta property="og:image" content="https://www.jonahdavies.com/images/balenciaga-museum-project-og-image.jpg" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, Balenciaga Museum Project, Balenciaga designs, artistic concepts, bespoke designs" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.jonahdavies.com/balenciagaMuseumProject" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "ImageGallery",
                          "name": "Balenciaga Museum Project",
                          "description": "Explore the Balenciaga Museum Project by Jonah Davies. A collection of unique designs and concepts inspired by the Balenciaga Museum.",
                          "url": "https://www.jonahdavies.com/balenciagaMuseumProject",
                          "image": "https://www.jonahdavies.com/images/balenciaga-museum-project-og-image.jpg",
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
                <SlidePage data={balenciagaMuseumProjectData} link={"balenciagaMuseumProject"} />
            </div>
            <Footer />
        </>
    );
}

export default Page;
