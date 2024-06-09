'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const ImageCard = ({ src, hoverSrc, alt, title, className }) => {
    const [currentSrc, setCurrentSrc] = useState(src);
    let timeoutId = null;

    const handleMouseOver = () => {
        if (hoverSrc) {
            if (timeoutId) clearTimeout(timeoutId);
            setCurrentSrc(hoverSrc);
        }
    }

    const handleMouseOut = () => {
        if (hoverSrc) {
            timeoutId = setTimeout(() => {
                setCurrentSrc(src);
            }, 2000);
        }
    }

    return (
        <div 
            className={`flex flex-col transform transition-transform duration-500 hover:scale-105 ${className}`}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
        >
            <Image
                src={currentSrc}
                alt={alt}
                width={1080}
                height={1920}
            />
            <span className='mt-2 text-black uppercase'>{title}</span>
        </div>
    );
}

export default ImageCard;