"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles

export default function AboutUs() {
  return (
    <div className=''>
      <div className='pt-32'>
        <p className="pb-14 font-inter-bold font-bold text-black text-32 text-center tracking-0 leading-normal">
          The Coders
        </p>

        <Carousel
          showThumbs={false} // Hide thumbnails
          infiniteLoop={true} // Enable infinite loop
          autoPlay={true} // Enable autoplay
          interval={3000} // Time between slides (in milliseconds)
          stopOnHover={true} // Stop autoplay on hover
          transitionTime={500} // Transition duration (in milliseconds)
          className="w-1/2 mx-auto"
        >
          <div>
            <img
              src="/images/carrousel/Screen_Shot_2023-09-30_at_11.27.08_PM.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/images/carrousel/Screen_Shot_2023-09-30_at_11.30.33_PM.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/images/carrousel/Screen_Shot_2023-09-30_at_11.31.51_PM.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <img
              src="/images/carrousel/Screen_Shot_2023-09-30_at_11.32.53_PM.png"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}