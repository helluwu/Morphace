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
    <div className='pt-10'>


<h2 className='text-center font-medium text-2xl text-slate-700 py-10'>Camera Capture</h2>

      <div className='grid grid-cols-2 pt-10'>

        <div className='mx-auto'>
          
          {isFirstCameraVisible ? (
            <>
              <button className="py-1 px-2 bg-slate-400 border-1 border-solid border-slate-800 rounded-md text-white
              hover:border-slate-700 hover:transition hover:text-slate-700 hover:border-1 hover:border-solid hover:bg-slate-300 mx-4 "
               onClick={() => startCamera(firstVideoRef)}>Open First Cam</button> 

              <button className="py-1 px-2 bg-slate-400 border-1 border-solid border-slate-800 rounded-md text-white
              hover:border-slate-700 hover:transition hover:text-slate-700 hover:border-1 hover:border-solid hover:bg-slate-300 mx-4 "
              onClick={() => captureImage(firstVideoRef, setFirstCapturedImage)}>
                Click
              </button>

            </>
          ): ''}
          <button className="py-1 px-2 bg-slate-400 border-1 border-solid border-slate-800 rounded-md text-white
              hover:border-slate-700 hover:transition hover:text-slate-700 hover:border-1 hover:border-solid hover:bg-slate-300 mx-4 "
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
              <button className="py-1 px-2 bg-slate-400 border-1 border-solid border-slate-800 rounded-md text-white
              hover:border-slate-700 hover:transition hover:text-slate-700 hover:border-1 hover:border-solid hover:bg-slate-300 mx-4 "
              onClick={() => startCamera(secondVideoRef)}>Open Second Cam</button>
              <button className="py-1 px-2 bg-slate-400 border-1 border-solid border-slate-800 rounded-md text-white
              hover:border-slate-700 hover:transition hover:text-slate-700 hover:border-1 hover:border-solid hover:bg-slate-300 mx-4 "
              onClick={() => captureImage(secondVideoRef, setSecondCapturedImage)}>
                Click
              </button>
            </>
          ) : (
            <button className="py-1 px-2 bg-slate-400 border-1 border-solid border-slate-800 rounded-md text-white
            hover:border-slate-700 hover:transition hover:text-slate-700 hover:border-1 hover:border-solid hover:bg-slate-300 mx-4 "
            onClick={() => startCamera(secondVideoRef)}>Show Second Cam</button>
          )}
          <button className="py-1 px-2 bg-slate-400 border-1 border-solid border-slate-800 rounded-md text-white
              hover:border-slate-700 hover:transition hover:text-slate-700 hover:border-1 hover:border-solid hover:bg-slate-300 mx-4 "
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
