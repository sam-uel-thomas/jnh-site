import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';

export default function HomePage() {
    return (
        <div className="bg-white flex flex-col justify-between relative overflow-x-hidden">
            <LandingPage />
        </div>
    );
}