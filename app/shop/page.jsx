import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Shop = () => {
    return (
        <div>
            <div className='bg-white flex flex-col justify-between min-h-[100dvh]'>
                <Navbar />
                <div className="relative flex flex-col justify-end items-center w-full pt-0 md:pt-8 mb-5 z-10">
                    <span className='text-2xl text-black font-bold'>Shop</span>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Shop