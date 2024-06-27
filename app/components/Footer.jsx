'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import emailjs from 'emailjs-com';

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            from_name: name,
            message: message,
            reply_to: email,
        };

        emailjs.send('service_cv215gb', 'template_8os7u3u', templateParams, 'OKJ9Ybo7t4gAzD95e')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setResponseMessage('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            }, (err) => {
                console.error('FAILED...', err);
                setResponseMessage(`Error: ${err.text}`);
            });
    };

    return (
        <div className='relative overflow-hidden h-auto md:h-96 flex flex-col justify-between -mt-1 md:-mt-2 bg-white'>
            <div className='hidden md:flex flex-col flex-grow'>
                <img src="/jnhStitchLong.png" alt="JNH Rectangle" className="w-full h-auto object-cover relative z-10"/>
                <div className='absolute top-2 lg:top-16 left-0 w-full z-10 flex flex-row px-8 pt-4 flex-grow'>
                    <Image src='/logos/logo.png' alt="JNH Logo" className="w-40 h-40" width={300} height={300}/>
                    <div className='flex flex-col px-16 flex-grow'>
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
                        {responseMessage && <p>{responseMessage}</p>}
                    </div>
                </div>
            </div>

            <div className="w-full h-auto flex items-center md:relative md:bottom-0 mb-2" style={{backgroundImage: `url(/jnhFooterShape.png)`, backgroundSize: '100% 100%', backgroundPosition: 'center'}}>
                <div className="z-20 flex flex-row items-center space-x-4 py-4 px-4 md:px-16 justify-center w-full">
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
                    <Link href="/shop">
                        <span className='text-xs font-semibold text-white'>SHOP</span>
                    </Link>
                    <Link href="/portfolio">
                        <span className='text-xs font-semibold text-white'>PORTFOLIO</span>
                    </Link>
                    <Link href="/about" className='hidden md:block'>
                        <span className='text-xs font-semibold text-white'>ABOUT ME</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Footer;
