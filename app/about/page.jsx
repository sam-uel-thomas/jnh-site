import React from 'react'
import Navbar from '../components/Navbar'
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
                                        Hello, my name is Jonah Davies, a 20 year old undergraduate fashion student from Hastings, East
                                        Sussex. I would like to possibly have a bit of your time to outline why I would be a perfect member of
                                        your amazing business. Hard work within pressured environments comes naturally to me, having worked
                                        in intense environments since I was 14, having to deliver to a high level of expectation and satisfaction. I
                                        have a creative outlook on industry, often looking at tasks with an alternate perspective, whilst still
                                        delivering on brief and punctuality. Both parents are from creative backgrounds so I have been nurtured
                                        on creative practise such as print and illustration, with a keen eye for composition and graphical
                                        qualities, something I believe would be perfect for your brand. Although creative experience within
                                        fashion maybe lighter than others my dogged determination would make me a true asset as I will always
                                        learn on the spot and will be ready to be tasked with anything thrown at me.
                                </span>
                        </div>
                        </div>
                        <Footer />
        </div>
    )
}

export default Page