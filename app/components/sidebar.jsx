'use client'
import React, { useState } from "react";
import Link from 'next/link'

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="absolute top-12 right-4 md:top-32 md:right-12 z-10">
                <img src="/jnhStitchIcon.svg" alt="Open Sidebar" className="w-6 md:w-10 h-6 md:h-10 -rotate-6 rounded-full" />
            </button>            
            <div className={`absolute z-20 top-24 right-0 h-64 md:h-128 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <img src="/jnhSidebar.svg" alt="JNH Rectangle" className="absolute z-10 w-full h-full" />
                {isOpen && (
                    <button onClick={() => setIsOpen(false)} className="absolute top-8 right-12 w-10 h-10 z-30">
                        <img src="/jnhCross.png" alt="JNH Cross" />
                    </button>
                )}
                <div className="absolute top-16 left-4 z-30 space-y-4">
                    <Link href="/shop">
                        <span className="hover:underline">Shop</span>
                    </Link>
                    <Link href="/portfolio">
                        <span className="hover:underline">Portfolio</span>
                    </Link>
                    <Link href="/balenciaga-project">
                        <span className="hover:underline">Balenciaga Project</span>
                    </Link>
                </div>
            </div>
        </>
    );
}