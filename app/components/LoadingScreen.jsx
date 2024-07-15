import React from 'react';
import Image from 'next/image';

const LoadingScreen = () => (
    <main className="flex items-center justify-center bg-white">
        <Image src="/logos/loading.gif" alt="Loading animation" width={200} height={200} />
    </main>
);

export default LoadingScreen;