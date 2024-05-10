'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className='relative overflow-hidden h-32 md:h-96 flex flex-col justify-between -mt-1 md:-mt-2 bg-white'>
            <div className='flex flex-col flex-grow'>
                <img src="/jnhStitchLong.svg" alt="JNH Rectangle" className="w-full h-auto object-cover relative z-10"/>
                <div className='absolute top-2 lg:top-16 left-0 w-screen z-1 flex flex-row px-8 pt-4 flex-grow'>
                    <img src="/jnhIcon.svg" alt="JNH Logo" className="w-40 h-40" />
                    <div className='flex flex-col px-16 flex-grow'>
                        {/* <span className='text-black font-bold text-lg'>GET IN TOUCH</span> */}
                        <form onSubmit={handleSubmit} className="flex flex-row flex-grow">
                            <div className="flex flex-col space-y-4 mr-4 flex-grow h-full">
                                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="NAME" className="text-black font-semibold border-[#FF0804] border-[6px] rounded-xl p-1 text-lg w-full h-full" />
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="EMAIL" className="text-black font-semibold border-[#FF0804] border-[6px] rounded-xl p-1 text-lg w-full h-full" />
                            </div>
                            <div className="flex flex-col space-y-4 mr-4 flex-grow h-full">
                                <textarea value={message} onChange={e => setMessage(e.target.value)} placeholder="MESSAGE" className="text-black font-semibold border-[#FF0804] border-[6px] rounded-xl p-1 text-lg w-full h-full resize-none" />
                            </div>
                            <button type="submit" className="text-black h-full">
                                <FontAwesomeIcon icon={faPaperPlane} size='2x' />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-4 left-0 w-full h-auto flex items-center">
                <img src="/jnhFooterShape.png" alt="JNH Rectangle" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
                <div className="z-20 flex flex-row items-center space-x-4 py-4 px-4 md:px-16 justify-center">
                    <a href="https://www.instagram.com/jonahdavies.2/" target="_blank" rel="noopener noreferrer" className='h-4 w-4 flex items-center'>
                        <FontAwesomeIcon icon={faInstagram} color="white" />
                    </a>
                    <a href="https://www.pinterest.co.uk/jonahdavies660/" target="_blank" rel="noopener noreferrer" className='h-4 w-4 flex items-center'>
                        <FontAwesomeIcon icon={faPinterest} color="white" />
                    </a>
                    <a href="https://www.linkedin.com/in/jonah-davies-967b44303/" target="_blank" rel="noopener noreferrer" className='h-4 w-4 flex items-center'>
                        <FontAwesomeIcon icon={faLinkedin} color="white" />
                    </a>
                    <div className="border-l h-6 mx-3"></div>
                    <span className='text-xs font-semibold'>SHOP</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;