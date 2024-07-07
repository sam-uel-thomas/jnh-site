'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProjectScroll from '../components/ProjectScroll';

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
      <div className="flex flex-col px-4 items-center w-full justify-center mx-auto flex-grow md:flex-row md:items-center">
        <div className="md:hidden flex flex-row justify-center mt-4 order-3">
          <NavButton onClick={goPrevImage} disabled={imageNumber === 0} direction="left">
            <Image src="/portfolio/leftHand.png" alt="Previous" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
          <NavButton onClick={goNextImage} disabled={imageNumber === data.length - 1} direction="right">
            <Image src="/portfolio/rightHand.png" alt="Next" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
        </div>
        <div className="order-1 md:order-2 w-full md:w-[36rem]">
          {isImageClickable ? (
            <Link href={`/${link}/${imageNumber}`} className="block">
              <div className="relative">
                <Image 
                  key={data[imageNumber].src} 
                  src={data[imageNumber].src} 
                  alt={data[imageNumber].alt} 
                  layout="responsive" 
                  width={90} 
                  height={81} 
                  priority={true} // Load the current image with high priority
                />
              </div>
            </Link>
          ) : (
            <div className="relative">
              <Image 
                key={data[imageNumber].src} 
                src={data[imageNumber].src} 
                alt={data[imageNumber].alt} 
                layout="responsive" 
                width={90} 
                height={81} 
                priority={true} // Load the current image with high priority
              />
            </div>
          )}
        </div>
        <div className="hidden md:flex md:order-1 md:flex-shrink-0">
          <NavButton onClick={goPrevImage} disabled={imageNumber === 0} direction="left">
            <Image src="/portfolio/leftHand.png" alt="Previous" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
        </div>
        <div className="hidden md:flex md:order-3 md:flex-shrink-0">
          <NavButton onClick={goNextImage} disabled={imageNumber === data.length - 1} direction="right">
            <Image src="/portfolio/rightHand.png" alt="Next" width={50} height={50} className="w-full h-full object-contain" />
          </NavButton>
        </div>
      </div>
      <div className="self-start">
        <span className="font-semibold text-s mb-4 ml-8 text-left text-orange">PHOTOGRAPHY : GUY BOLONGARO</span>
      </div>
      <div className="relative flex flex-col justify-end items-center w-full mb-5 z-10">
        <ProjectScroll />
      </div>
    </>
  );
};

const NavButton = React.memo(({ onClick, disabled, children, direction = 'r' }) => {
  const animationClass = direction === 'left' ? 'animate-bobbing-left' : 'animate-bobbing-r';
  return (
    <button 
      className={`w-32 h-32 mx-8 ${animationClass} ${disabled ? 'opacity-0 cursor-default' : ''}`} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
});

export default React.memo(SlidePage);
