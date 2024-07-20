import React from 'react'
import Head from 'next/head'
import balenciagaMuseumProjectData from '../../data/balenciagaMuseumProjectData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function Page({ params }) {
    const sample = balenciagaMuseumProjectData[Number(params.sampleId)];
    const pageTitle = sample ? `Balenciaga Museum Project - ${sample.title}` : 'Balenciaga Museum Project';
    const pageDescription = sample ? `Details about the Balenciaga Museum Project: ${sample.title}` : 'Balenciaga Museum Project details';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={sample ? sample.src : '/default-image.jpg'} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.jonahdavies.com/balenciagaMuseumProject/${params.sampleId}`} />
                <link rel="canonical" href={`https://www.jonahdavies.com/balenciagaMuseumProject/${params.sampleId}`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, Balenciaga Museum Project, Balenciaga designs, artistic concepts, bespoke designs" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "VisualArtwork",
                          "name": "${sample ? sample.title : 'Balenciaga Museum Project'}",
                          "image": "${sample ? sample.src : '/default-image.jpg'}",
                          "description": "${pageDescription}",
                          "author": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          },
                          "url": "https://www.jonahdavies.com/balenciagaMuseumProject/${params.sampleId}"
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                {sample ? (
                    <ThroughPage projectData={balenciagaMuseumProjectData} sampleId={params.sampleId} arrowLink={"/balenciagaMuseumProject"} />
                ) : (
                    <div className="flex flex-grow items-center justify-center">
                        <p className="text-xl">No Balenciaga Museum project sample found for ID {params.sampleId}</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}
