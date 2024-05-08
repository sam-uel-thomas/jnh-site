import React from 'react';

const ImageCard = ({ src, alt, title }) => {
    return (
        <div className='flex flex-col transform transition-transform duration-500 hover:scale-105'>
            <img src={src} alt={alt} />
            {/* <span className='mt-2 text-xs md:text-base font-semibold text-black uppercase'>{title}</span> */}
        </div>
    );
}

export default ImageCard;