'use client'
import React, { useRef, useState } from 'react';

export default function Home() {
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const [firstCapturedImage, setFirstCapturedImage] = useState(null);
  const [secondCapturedImage, setSecondCapturedImage] = useState(null);
  const [isFirstCameraVisible, setIsFirstCameraVisible] = useState(true);
  const [isSecondCameraVisible, setIsSecondCameraVisible] = useState(true);


  const startCamera = async (videoRef) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const captureImage = (videoRef, setCapturedImage) => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

      const imageUrl = canvas.toDataURL('image/png');
      setCapturedImage(imageUrl);
    }
  };

  const toggleCameraVisibility1 = () => {
    setIsFirstCameraVisible((prevVisibility) => !prevVisibility);
  };

  const toggleCameraVisibility2 = () => {
    setIsSecondCameraVisible((prevVisibility) => !prevVisibility);
    
  };

  return (
    <div className='p-10'>

<p className="py-10 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[normal]">
          Camera Capture
        </p>


      <div className='grid grid-cols-2 pt-10  pb-20'>

        <div className='mx-auto'>
          
          {isFirstCameraVisible ? (
            <>
              <button className=" mt-2 py-2 bg-[#e4e4d0]  text-black px-4 mx-2 rounded-2xl 
                  transition-colors hover:bg-white hover:border-2 hover:border-[#e4e4d0] hover:text-[#acac68] focus:outline-none"
               onClick={() => startCamera(firstVideoRef)}>Open First Cam</button> 

              <button className=" mt-2 py-2 bg-[#e4e4d0]  text-black px-4 mx-2 rounded-2xl 
                  transition-colors hover:bg-white hover:border-2 hover:border-[#e4e4d0] hover:text-[#acac68] focus:outline-none"
              onClick={() => captureImage(firstVideoRef, setFirstCapturedImage)}>
                Click
              </button>

            </>
          ): ''}
          <button className=" mt-2 py-2 bg-[#e4e4d0]  text-black px-4 mx-2 rounded-2xl 
                  transition-colors hover:bg-white hover:border-2 hover:border-[#e4e4d0] hover:text-[#acac68] focus:outline-none"
          onClick={toggleCameraVisibility1} >
            {isFirstCameraVisible ? 'Hide First Camera' : 'Go Back' }
          </button>

          {firstCapturedImage && (
            <div className='py-10'>
              <h3 className='text-center p-2'>First Pic</h3>
              <img src={firstCapturedImage} alt="First Captured" style={{ maxWidth: '50%' }} className='place-self-center mx-auto'/>
            </div>
          )}

          {isFirstCameraVisible && (
            <video ref={firstVideoRef} autoPlay playsInline muted style={{ maxWidth: '50%' }} className='place-self-center mx-auto pt-10'/>
          )}
        </div>

        <div className='mx-auto'>
        {isSecondCameraVisible ? (
            <>
              <button className=" mt-2 py-2 bg-[#e4e4d0]  text-black px-4 mx-2 rounded-2xl 
                  transition-colors hover:bg-white hover:border-2 hover:border-[#e4e4d0] hover:text-[#acac68] focus:outline-none"
              onClick={() => startCamera(secondVideoRef)}>Open Second Cam</button>
              <button className=" mt-2 py-2 bg-[#e4e4d0]  text-black px-4 mx-2 rounded-2xl 
                  transition-colors hover:bg-white hover:border-2 hover:border-[#e4e4d0] hover:text-[#acac68] focus:outline-none"
              onClick={() => captureImage(secondVideoRef, setSecondCapturedImage)}>
                Click
              </button>
            </>
          ) : (
            <button className=" mt-2 py-2 bg-[#e4e4d0]  text-black px-4 mx-2 rounded-2xl 
            transition-colors hover:bg-white hover:border-2 hover:border-[#e4e4d0] hover:text-[#acac68] focus:outline-none"
            onClick={() => startCamera(secondVideoRef)}>Show Second Cam</button>
          )}
          <button className=" mt-2 py-2 bg-[#e4e4d0]  text-black px-4 mx-2 rounded-2xl 
                  transition-colors hover:bg-white hover:border-2 hover:border-[#e4e4d0] hover:text-[#acac68] focus:outline-none"
          onClick={toggleCameraVisibility2}>
            {isSecondCameraVisible ? 'Hide Second Camera' : 'Go Back'}
          </button>

          {secondCapturedImage && (
            
            <div className='py-10'>
            <h3 className='text-center p-2'>Second Pic</h3>
              <img src={secondCapturedImage} alt="Second Captured" style={{ maxWidth: '50%' }} className='place-self-center mx-auto'/>
            </div>
          )}

          {isSecondCameraVisible && (
            <video ref={secondVideoRef} autoPlay playsInline muted style={{ maxWidth: '50%' }} className='place-self-center mx-auto pt-10'/>
          )}
          

        </div>
      </div>
    </div>
  );
}

