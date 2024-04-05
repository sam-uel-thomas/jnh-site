'use client'
import React, { useState } from "react";

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="bg-red-500 w-10 h-10 rounded-full absolute top-36 right-12 z-10" />
            <div className={`absolute z-20 top-24 right-0 h-128 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <img src="/jnhSidebar.svg" alt="JNH Rectangle" />
                <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 w-10 h-10 z-30">
                    <img src="/jnhCross.svg" alt="JNH Cross" />
                </button>
            </div>
        </>
    );
}