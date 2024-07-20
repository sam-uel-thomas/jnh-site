import React from 'react'
import printsData from '../../data/printsData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';
import Head from 'next/head';

export default function PrintPage({ params }) {
    const print = printsData[Number(params.sampleId)];
    const pageTitle = print ? `Prints - ${print.title}` : 'Prints';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={print ? `Detailed view of ${print.title}, a print from our collection.` : "Detailed view of a print from our collection."} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={print ? `Detailed view of ${print.title}, a print from our collection.` : "Detailed view of a print from our collection."} />
                <meta property="og:image" content={print ? print.src : '/default-image.jpg'} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.jonahdavies.com/prints/${params.sampleId}`} />
                <link rel="canonical" href={`https://www.jonahdavies.com/prints/${params.sampleId}`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, prints, print collection, bespoke prints, artistic prints, art prints" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "VisualArtwork",
                          "name": "${print ? print.title : 'Print'}",
                          "image": "${print ? print.src : '/default-image.jpg'}",
                          "description": "${print ? print.description : 'Detailed view of a print from our collection.'}",
                          "author": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          },
                          "url": "https://www.jonahdavies.com/prints/${params.sampleId}"
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                {print ? (
                    <ThroughPage projectData={printsData} sampleId={params.sampleId} arrowLink={"/prints"} imageWidth={24} />
                ) : (
                    <div className="flex flex-grow items-center justify-center">
                        <p className="text-xl">No print found for ID {params.sampleId}</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}
