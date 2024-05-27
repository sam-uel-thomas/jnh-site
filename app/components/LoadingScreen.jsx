import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const LoadingScreen = () => (
    <div className="flex items-center justify-center bg-white">
        <Image src="/logos/loading.gif" alt="Loading..." width={200} height={200} />
    </div>
);

export default LoadingScreen;