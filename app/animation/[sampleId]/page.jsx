import React from 'react'
import Head from 'next/head'
import animationData from '../../data/animationData'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ThroughPage from '../../components/ThroughPage';

export default function Page({ params }) {
    const sample = animationData[Number(params.sampleId)];
    const pageTitle = sample ? `Animation - ${sample.title}` : 'Animation';
    const pageDescription = sample ? `Details about the animation project: ${sample.title}` : 'Animation project details';

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:image" content={sample ? sample.src : '/default-image.jpg'} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`https://www.jonahdavies.com/animation/${params.sampleId}`} />
                <link rel="canonical" href={`https://www.jonahdavies.com/animation/${params.sampleId}`} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, animation, animation projects, creative animation, unique animation works" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "VisualArtwork",
                          "name": "${sample ? sample.title : 'Animation'}",
                          "image": "${sample ? sample.src : '/default-image.jpg'}",
                          "description": "${pageDescription}",
                          "author": {
                            "@type": "Person",
                            "name": "Jonah Davies"
                          },
                          "url": "https://www.jonahdavies.com/animation/${params.sampleId}"
                        }
                    `}
                </script>
            </Head>
            <div className='bg-white flex flex-col min-h-screen overflow-x-hidden'>
                <Navbar />
                {sample ? (
                    <ThroughPage projectData={animationData} sampleId={params.sampleId} arrowLink={"/animation"} imageWidth={42} />
                ) : (
                    <div className="flex flex-grow items-center justify-center">
                        <p className="text-xl">No animation sample found for ID {params.sampleId}</p>
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}
