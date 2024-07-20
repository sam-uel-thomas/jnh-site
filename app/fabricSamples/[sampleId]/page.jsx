import React from 'react'
import fabricSamplesData from '../../data/fabricSamplesData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';
import Head from 'next/head';

export default function Page({ params }) {
    const sample = fabricSamplesData[Number(params.sampleId)];
    const pageTitle = sample ? `Fabric Sample - ${sample.title}` : 'Fabric Sample';
    const pageDescription = sample ? `Detailed view of ${sample.title}, a fabric sample from our collection.` : "Detailed view of a fabric sample from our collection.";

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={sample ? sample.src : '/default-image.jpg'} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.jonahdavies.com/fabricSamples/${params.sampleId}`} />
                <link rel="canonical" href={`https://www.jonahdavies.com/fabricSamples/${params.sampleId}`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, fabric sample, fabric collection, bespoke fabric, artistic fabrics" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "VisualArtwork",
                          "name": "${sample ? sample.title : 'Fabric Sample'}",
                          "image": "${sample ? sample.src : '/default-image.jpg'}",
                          "description": "${pageDescription}",
                          "author": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          },
                          "url": "https://www.jonahdavies.com/fabricSamples/${params.sampleId}"
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                {sample ? (
                    <ThroughPage projectData={fabricSamplesData} sampleId={params.sampleId} arrowLink={"/fabricSamples"} imageWidth={20} />
                ) : (
                    <div className="flex flex-grow items-center justify-center">
                        <p className="text-xl">No fabric sample found for ID {params.sampleId}</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}
