import React from 'react';
import Navbar from './components/Navbar';
import ProjectScroll from './components/projectScroll';
import Sidebar from './components/Sidebar';

const projects = [
    'Balenciaga Project',
    'Tailoring Project',
    'Project 3',
    'Project 4',
    'Project 5',
    'Project 6',
];

export default function HomePage() {
    return (
        <div className="bg-white min-h-screen flex flex-col justify-between relative overflow-x-hidden">
            <Navbar />
            <Sidebar />
            <div className="relative flex flex-col justify-center items-center w-full mb-5 z-10">
                <ProjectScroll words={projects} />
            </div>
        </div>
    );
}