import React from 'react';

export default function ProjectScroll({ words }) {
    const doubleWords = [...words, ...words];

    return (
        <div className="w-full flex flex-nowrap">
            <ul className="flex items-center justify-between mx-auto animate-infinite-scroll flex-shrink-0">
                {doubleWords.map((word, index) => (
                    <li key={index} className="flex-none mx-8">
                        <button className="focus:outline-none">
                            <span className="text-orange font-semibold uppercase hover:underline">{word}</span>
                        </button>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center justify-between mx-auto animate-infinite-scroll flex-shrink-0" aria-hidden="true">
                {doubleWords.map((word, index) => (
                    <li key={index} className="flex-none mx-8">
                        <button className="focus:outline-none">
                            <span className="text-orange font-semibold uppercase hover:underline">{word}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}