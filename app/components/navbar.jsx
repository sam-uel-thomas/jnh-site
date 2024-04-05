import React from 'react';

export default function Navbar() {
    return (
        <>
            <img src="/jnhRectangle.svg" alt="JNH Rectangle" className="absolute top-0 left-0 w-full -z-1" />
            <div className="w-full h-16 flex flex-col items-center justify-center text-white z-10 relative">
                <img src="/sewLine.svg" alt="Sew Line" className='absolute w-full mt-24 z-0' />
                <img src="/jnhIcon.svg" alt="JNH Logo" className="w-20 h-20 z-10 mt-12" />
            </div>
        </>
    );
}