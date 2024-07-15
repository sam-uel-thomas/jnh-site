import React from 'react';
import Link from 'next/link';
import projects from '../data/projects.json';

export default function ProjectScroll() {
    const doubleWords = [...Object.entries(projects), ...Object.entries(projects)];

    return (
        <section className="w-full flex flex-nowrap mt-4">
            <ul className="flex items-center justify-between mx-auto animate-infinite-scroll flex-shrink-0">
                {doubleWords.map(([visualName, linkName], index) => (
                    <li key={index} className="flex-none mx-8">
                        <Link href={`/${linkName}`}>
                        <span className="text-orange font-semibold uppercase hover:underline text-xs sm:text-base">{visualName}</span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-between mx-auto animate-infinite-scroll flex-shrink-0" aria-hidden="true">
                {doubleWords.map(([visualName, linkName], index) => (
                    <li key={index} className="flex-none mx-8">
                        <Link href={`/${linkName}`}>
                        <span className="text-orange font-semibold uppercase hover:underline text-xs sm:text-base">{visualName}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}