"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import ProjectScroll from '../components/ProjectScroll';

/**
 * Renders a slide page component with image navigation and photography credits.
 *
 * @component
 * @param {Object[]} data - An array of objects containing image data.
 * @param {string} data[].src - The source URL of the image.
 * @param {string} data[].alt - The alt text for the image.
 * @param {string} data[].blurSrc - The blur data URL for the image.
 * @param {string} link - The link for the image.
 * @param {boolean} [isImageClickable=true] - Determines if the image is clickable.
 * @returns {JSX.Element} The rendered SlidePage component.
 */
const SlidePage = ({ data, link, isImageClickable = true }) => {
  const [imageNumber, setImageNumber] = useState(0);

  const goPrevImage = useCallback(() => {
    setImageNumber((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  }, [data.length]);

  const goNextImage = useCallback(() => {
    setImageNumber((prevIndex) => (prevIndex + 1) % data.length);
  }, [data.length]);

  useEffect(() => {
    const currentImage = new window.Image();
    currentImage.src = data[imageNumber].src;

    const nextImage = new window.Image();
    nextImage.src = data[(imageNumber + 1) % data.length].src;

    const prevImage = new window.Image();
    prevImage.src = data[(imageNumber - 1 + data.length) % data.length].src;
  }, [imageNumber, data]);

  return (
    <>
      <Head>
        <title>Slide Page</title>
        <meta name="description" content="Explore our slide page with image navigation and photography credits." />
        <meta property="og:title" content="Slide Page" />
        <meta property="og:description" content="Explore our slide page with image navigation and photography credits." />
        <meta property="og:type" content="website" />
      </Head>
      <div className="flex flex-col px-4 items-center w-full justify-center mx-auto flex-grow md:flex-row md:items-center">
        <div className="order-1 md:order-2 w-full md:w-[36rem] flex items-center justify-center relative" style={{ height: 'auto', padding: '0 1rem' }}>
          <div className="relative w-full" style={{ paddingTop: '100%' }}>
            {data.map((item, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-300 flex items-center justify-center ${index === imageNumber ? 'opacity-100' : 'opacity-0'}`}
              >
                {isImageClickable ? (
                  <Link href={`/${link}/${index}`} className="block w-full h-full">
                    <Image 
                      src={item.src} 
                      alt={item.alt} 
                      layout="fill"
                      objectFit="contain"
                      priority={index === imageNumber}
                    //   placeholder="blur"
                    //   blurDataURL={item.blurSrc} // Ensure blurSrc is provided in the data
                    />
                  </Link>
                ) : (
                  <Image 
                    src={item.src} 
                    alt={item.alt} 
                    layout="fill"
                    objectFit="contain"
                    priority={index === imageNumber}
                    // placeholder="blur"
                    // blurDataURL={item.blurSrc}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex md:order-1 md:flex-shrink-0">
          <NavButton onClick={goPrevImage} direction="left" isVisible={imageNumber > 0}>
            <Image src="/portfolio/leftHand.png" alt="Previous" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
        </div>
        <div className="hidden md:flex md:order-3 md:flex-shrink-0">
          <NavButton onClick={goNextImage} direction="right" isVisible={imageNumber < data.length - 1}>
            <Image src="/portfolio/rightHand.png" alt="Next" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
        </div>
        <div className="md:hidden flex flex-row justify-center mt-2 w-full order-2">
          <NavButton onClick={goPrevImage} direction="left" isVisible={imageNumber > 0}>
            <Image src="/portfolio/leftHand.png" alt="Previous" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
          <NavButton onClick={goNextImage} direction="right" isVisible={imageNumber < data.length - 1}>
            <Image src="/portfolio/rightHand.png" alt="Next" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
        </div>
      </div>
      <div className="self-start mt-4 md:mt-0 order-4">
        <span className="font-semibold text-s mb-4 ml-8 text-left text-orange">PHOTOGRAPHY : GUY BOLONGARO</span>
      </div>
      <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10 order-5">
        <ProjectScroll />
      </div>
    </>
  );
};

const NavButton = React.memo(({ onClick, isVisible, children, direction = 'r' }) => {
  const animationClass = direction === 'left' ? 'animate-bobbing-left' : 'animate-bobbing-r';
  return (
    <button 
      className={`w-32 h-32 mx-8 ${animationClass} ${!isVisible ? 'invisible' : ''}`} 
      onClick={isVisible ? onClick : null}
      disabled={!isVisible}
    >
      {children}
    </button>
  );
});

SlidePage.displayName = 'SlidePage';
NavButton.displayName = 'NavButton';

export default React.memo(SlidePage);