"use client"
import Image from 'next/image'
import React, { Component } from 'react';
import { Carousel } from "@material-tailwind/react";

export default function Home() {
    return (
      <div className=''>
        <div className=' pt-32'>

        <p className=" pb-14 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[normal]">
          The Coders
        </p>

        <Carousel className="rounded-xl w-1/2 mx-auto pb-10">
      <img
        src="/images/carrousel/Screen_Shot_2023-09-30_at_11.27.08_PM.png"
        alt=""
        className="h-full w-full object-cover"
      />
      
      <img
        src="/images/carrousel/Screen_Shot_2023-09-30_at_11.30.33_PM.png"
        alt=""
        className="h-full w-full object-cover"
      />

<img
        src="/images/carrousel/Screen_Shot_2023-09-30_at_11.31.51_PM.png"
        alt=""
        className="h-full w-full object-cover"
      />
      <img
        src="/images/carrousel/Screen_Shot_2023-09-30_at_11.32.53_PM.png"
        alt=""
        className="h-full w-full object-cover"
      />

    </Carousel>
        </div>




        
      </div>
    )
  }