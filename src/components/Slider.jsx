import React, { useState, useEffect } from "react";
import { slideshow1, slideshow2, slideshow3 } from "../assets";

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [slideshow1, slideshow2, slideshow3];
  const delay = 5000;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, delay);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="relative mt-[46px] mx-auto">
      <button
        onClick={prevSlide}
        className="absolute top-1/2 transform -translate-y-1/2 left-4 text-white text-2xl bg-transparent border-none"
      >
        &lt;
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        className="w-full h-auto"
      />
      <button
        onClick={nextSlide}
        className="absolute top-1/2 transform -translate-y-1/2 right-4 text-white text-2xl bg-transparent border-none"
      >
        &gt;
      </button>
    </div>
  );
}

export default Slider;
