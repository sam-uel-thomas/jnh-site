'use client'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import ProjectScroll from '../components/ProjectScroll'
import printsData from './printsData'
import Link from 'next/link'
import Image from 'next/image'

const predefinedPositions = [
    { left: '50%', top: '38%' }, //1
    { left: '30%', top: '70%' }, //2
    { left: '68%', top: '10%' }, //3
    { left: '70%', top: '70%' }, //4
    { left: '32%', top: '10%' }, //5
    { left: '90%', top: '80%' }, //6
    { left: '12%', top: '65%' }, //7
    { left: '10%', top: '15%' }, //8
    { left: '87%', top: '20%' }, //9
];

const Prints = () => {
    const initialPositions = printsData.map(() => ({
        left: '50%',
        top: '50%',
        transform: `translate(-50%, -50%) rotate(${Math.random() * 40 - 20}deg)`}));

    const [positions, setPositions] = useState(initialPositions);
    const [clicked, setClicked] = useState(printsData.map(() => false));

    const handleImageClick = (event, index) => {
        if (!clicked[index]) {
            event.preventDefault();

            const newPositions = [...positions];
            const newPosition = predefinedPositions[index % predefinedPositions.length];
            newPositions[index] = { ...newPosition, transform: `translate(-50%, -50%)`};
            console.log(`Image ${index} moved to: left ${newPosition.left}, top ${newPosition.top}`);
            setPositions(newPositions);

            const newClicked = [...clicked];
            newClicked[index] = true;
            setClicked(newClicked);
        }
    };

    return (
        <div>
            <div className='bg-white flex flex-col justify-between h-screen'>
                <Navbar />
                <div className="flex-grow relative flex flex-col justify-center items-center w-full h-full">
                    <div className="relative w-full h-full mt-24">
                        {printsData.length > 0 ? (
                            printsData.map((sample, index) => (
                               <Link href={`/prints/${index}`} key={index}>
                                    <div
                                        className="absolute transition-all duration-500 ease-in-out cursor-pointer w-1/6"
                                        style={positions[index]}
                                        onClick={(event) => handleImageClick(event, index)}
                                    >
                                        <ImageCard src={sample.src} alt={sample.alt} />
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <p>No data available</p>
                        )}
                    </div>
                </div>
                <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
                    <ProjectScroll />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Prints;