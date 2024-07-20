import React from 'react'
import photographyData from '../../data/photographyData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';
import Head from 'next/head';

export default function Page({ params }) {
    const photo = photographyData[Number(params.sampleId)];
    const pageTitle = photo ? `Photography - ${photo.title}` : 'Photography';
    const pageDescription = photo ? `Detailed view of ${photo.title} from our photography collection.` : "Detailed view of a photography from our collection.";

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={photo ? photo.src : '/default-image.jpg'} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.jonahdavies.com/photography/${params.sampleId}`} />
                <link rel="canonical" href={`https://www.jonahdavies.com/photography/${params.sampleId}`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, photography, photo gallery, artistic photography, photo collection" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "ImageObject",
                          "name": "${photo ? photo.title : 'Photography'}",
                          "image": "${photo ? photo.src : '/default-image.jpg'}",
                          "description": "${pageDescription}",
                          "author": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          },
                          "url": "https://www.jonahdavies.com/photography/${params.sampleId}"
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                {photo ? (
                    <ThroughPage projectData={photographyData} sampleId={params.sampleId} arrowLink={"/photography"} />
                ) : (
                    <div className="flex flex-grow items-center justify-center">
                        <p className="text-xl">No photo found for ID {params.sampleId}</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}
