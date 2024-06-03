import React from 'react'
import Navbar from '../components/Navbar'
import ProjectScroll from '../components/ProjectScroll'
import Footer from '../components/Footer'

const Page = () => {
    return (
        <div className='relative'>
                <img src='/jnhWaving.png' alt='BIG WAVE!' className='absolute left-0 top-10 w-screen h-screen' />
                <img src='/jnhWaving.png' alt='BIG WAVE!' className='absolute right-0 top-10 w-screen h-screen transform scale-x-[-1]' />                
                <div className='bg-white flex flex-col items-center min-h-[100dvh]'>
                        <Navbar />
                        <div className="relative flex flex-col justify-center items-center w-2/3 px-32 py-12 mt-12 border-[1.5rem] border-[#FF0804]">
                                <span className='text-4xl font-bold text-black text-left w-full mb-4'>About Me</span>
                                <span className='text-black font-semibold text-lg'>
                                Hello, my name is Jonah Davies, a 20 year old undergraduate fashion student from Hastings, East Sussex. Since a young age I’ve always been interested in print design and graphics , stemming from both parents being heavily involved in the arts.Hard work within pressured environments comes naturally to me, having worked in intense environments since I was 14, having to deliver to a high level of expectation and satisfaction. I have a creative outlook on industry, often looking at tasks with an alternate perspective, whilst still delivering on brief and punctuality. Both parents are from creative backgrounds so I have been nurtured on creative practise such as print and illustration, with a keen eye for composition and graphical qualities. Although experience within fashion maybe lighter than others my determination would make me a true asset as I will always learn on the spot and be ready to be tasked with anything. 
                                </span>
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