'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProjectScroll from '../components/ProjectScroll';

const SlidePage = ({ data, link, isImageClickable = true }) => {
  const [imageNumber, setImageNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const preloadImage = (src) => {
    return new Promise((resolve) => {
      const img = new window.Image();
      img.src = src;
      img.onload = resolve;
    });
  };

  const preloadAdjacentImages = (index) => {
    const promises = [];
    if (index > 0) {
      promises.push(preloadImage(data[index - 1].src));
    }
    if (index < data.length - 1) {
      promises.push(preloadImage(data[index + 1].src));
    }
    return promises;
  };

  const goPrevImage = () => {
    if (imageNumber > 0) {
      setImageNumber((prev) => prev - 1);
    }
  };

  const goNextImage = () => {
    if (imageNumber < data.length - 1) {
      setImageNumber((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const loadImages = async () => {
      await preloadImage(data[imageNumber].src);
      setLoading(false);
      await Promise.all(preloadAdjacentImages(imageNumber));
    };

    loadImages();
  }, [data, imageNumber]);

  const canGoPrev = imageNumber > 0;
  const canGoNext = imageNumber < data.length - 1;

  return (
    <>
      <div className="flex flex-col px-4 items-center w-full justify-center mx-auto flex-grow md:flex-row md:items-center">
        <div className="md:hidden flex flex-row justify-center mt-4 order-3">
          <NavButton onClick={goPrevImage} disabled={!canGoPrev} direction="left">
            <Image src="/portfolio/leftHand.png" alt="Previous" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
          <NavButton onClick={goNextImage} disabled={!canGoNext} direction="right">
            <Image src="/portfolio/rightHand.png" alt="Next" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
        </div>
        <div className="order-1 md:order-2">
          {isImageClickable ? (
            <Link href={`/${link}/${imageNumber}`} className="block">
              <div className="relative w-700 h-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  {loading ? (
                    <div className="loader">Loading...</div>
                  ) : null}
                </div>
                <Image src={data[imageNumber].src} width={700} height={100} alt={data[imageNumber].alt} />
              </div>
            </Link>
          ) : (
            <div className="relative w-700 h-100">
              <div className="absolute inset-0 flex items-center justify-center">
                {loading ? (
                  <div className="loader">Loading...</div>
                ) : null}
              </div>
              <Image src={data[imageNumber].src} width={700} height={100} alt={data[imageNumber].alt} />
            </div>
          )}
        </div>
        <div className="hidden md:flex md:order-1 md:flex-shrink-0">
          <NavButton onClick={goPrevImage} disabled={!canGoPrev} direction="left">
            <Image src="/portfolio/leftHand.png" alt="Previous" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
        </div>
        <div className="hidden md:flex md:order-3 md:flex-shrink-0">
          <NavButton onClick={goNextImage} disabled={!canGoNext} direction="left">
            <Image src="/portfolio/rightHand.png" alt="Next" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
        </div>
      </div>
      <div className="self-start">
        <span className='font-semibold text-s mb-4 ml-8 text-left text-orange'>PHOTOGRAPHY : BANDINI3000</span>
      </div>
      <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
        <ProjectScroll />
      </div>
    </>
  );
};

const NavButton = ({ onClick, disabled, children, direction }) => {
  return (
    <button 
      className={`w-32 h-32 mx-8 animate-bobbing-${direction} ${disabled ? 'opacity-0 cursor-default' : ''}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default SlidePage;
