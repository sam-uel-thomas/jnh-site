import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import ProjectScroll from '../components/ProjectScroll'
import Footer from '../components/Footer'

const Page = () => {
    return (
        <div className='relative'>
            <Head>
                <title>About Me - Jonah Davies</title>
                <meta name="description" content="Learn more about Jonah Davies, a 21-year-old undergraduate fashion student from Hastings, East Sussex with a keen interest in print design and graphics." />
                <meta property="og:title" content="About Me - Jonah Davies" />
                <meta property="og:description" content="Learn more about Jonah Davies, a 21-year-old undergraduate fashion student from Hastings, East Sussex with a keen interest in print design and graphics." />
                <meta property="og:image" content="https://www.jonahdavies.com/images/about-me-og-image.jpg" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.jonahdavies.com/about" />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content="Jonah Davies, fashion student, print design, graphics, Hastings, East Sussex" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.jonahdavies.com/about" />
                <script type="application/ld+json">
                    {`
                        {
                          "@context": "http://schema.org",
                          "@type": "Person",
                          "name": "Jonah Davies",
                          "description": "Learn more about Jonah Davies, a 21-year-old undergraduate fashion student from Hastings, East Sussex with a keen interest in print design and graphics.",
                          "url": "https://www.jonahdavies.com/about",
                          "image": "https://www.jonahdavies.com/images/about-me-og-image.jpg",
                          "alumniOf": {
                            "@type": "CollegeOrUniversity",
                            "name": "Fashion University"
                          },
                          "knowsAbout": ["Fashion Design", "Print Design", "Graphics"]
                        }
                    `}
                </script>
            </Head>
            <img src='/jnhWaving.png' alt='BIG WAVE!' className='absolute left-0 top-10 w-screen h-screen' />
            <img src='/jnhWaving.png' alt='BIG WAVE!' className='absolute right-0 top-10 w-screen h-screen transform scale-x-[-1]' />                
            <div className='bg-white flex flex-col items-center min-h-[100dvh]'>
                <Navbar />
                <div className="relative flex flex-col justify-center items-center w-2/3 px-32 py-12 mt-12 border-[1.5rem] border-[#FF0804]">
                    <h1 className='text-4xl font-bold text-black text-left w-full mb-4'>About Me</h1>
                    <p className='text-black font-semibold text-lg'>
                        Hello, my name is Jonah Davies, a 21-year-old undergraduate fashion student from Hastings, East Sussex. Since a young age, I’ve always been interested in print design and graphics, stemming from both parents being heavily involved in the arts. Hard work within pressured environments comes naturally to me, having worked in intense environments since I was 14, having to deliver to a high level of expectation and satisfaction. I have a creative outlook on industry, often looking at tasks with an alternate perspective, whilst still delivering on brief and punctuality. Both parents are from creative backgrounds, so I have been nurtured on creative practice such as print and illustration, with a keen eye for composition and graphical qualities. Although experience within fashion may be lighter than others, my determination would make me a true asset as I will always learn on the spot and be ready to be tasked with anything.
                    </p>
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10 mt-auto">
                    <ProjectScroll/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Page
