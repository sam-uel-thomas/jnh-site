import React from 'react';
import Image from 'next/image';

const ImageCard = ({ src, alt, title }) => {
    return (
        <div className='flex flex-col transform transition-transform duration-500 hover:scale-105'>
            <Image
                src={src}
                alt={alt}
                width={1080}
                height={1920}
            />
            <span className='mt-2 text-black uppercase'>{title}</span>
        </div>
    );
}

export default ImageCard;