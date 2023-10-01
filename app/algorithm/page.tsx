'use client'
import React, { useRef, useState } from 'react';

export default function Home() {
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);
  const [firstCapturedImage, setFirstCapturedImage] = useState(null);
  const [secondCapturedImage, setSecondCapturedImage] = useState(null);
  const [isFirstCameraVisible, setIsFirstCameraVisible] = useState(true);
  const [isSecondCameraVisible, setIsSecondCameraVisible] = useState(true);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

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


  const toggleCameraVisibility1 = () => {
    setIsFirstCameraVisible((prevVisibility) => !prevVisibility);
  };

  const toggleCameraVisibility2 = () => {
    setIsSecondCameraVisible((prevVisibility) => !prevVisibility);
    
  };

  const captureImage = (videoRef, setCapturedImage) => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
  
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
  
      const imageUrl = canvas.toDataURL('image/png');
  
      // Save the image to a folder named 'use-client'
      const blob = dataURItoBlob(imageUrl);
      const url = window.URL.createObjectURL(blob);
  
      // Create a link element for downloading
      const a = document.createElement('a');
      a.href = url;
      a.download = '/images/im.png'; // Set the desired filename and folder
  
      // Simulate a click to trigger the download
      a.click();
  
      // Clean up by revoking the URL
      window.URL.revokeObjectURL(url);
  
      setCapturedImage(imageUrl);
    }
  };
  
  // Helper function to convert data URI to Blob
  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
  
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    return new Blob([ab], { type: mimeString });
  };
  

  return (
    <div className='p-10'>

      <p className="py-10 [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[normal]">
        Try it yourself!
      </p>

      <h3 className='text-center py-2 font-medium text-lg'>Step 1: Take 2 pictures that you like and upload them or directly upload two pictures of your choice</h3>
      <div className='grid grid-cols-2 pt-10  pb-20'>

        <div className='flex flex-col items-center'>


          <button className="mt-2 py-2 bg-[#e4e4d0] text-black px-4 mx-2 rounded-2xl 
          transition-colors hover:bg-white hover:border-2 hover:border-[#e4e4d0] hover:text-[#acac68] focus:outline-none"
            onClick={() => startCamera(firstVideoRef)}>Open Camera</button>

          <button className="mt-2 py-2 bg-[#e4e4d0] text-black px-4 mx-2 rounded-2xl 
          transition-colors hover:bg-white hover:border-2 hover:border-[#e4e4d0] hover:text-[#acac68] focus:outline-none"
            onClick={() => captureImage(firstVideoRef, setFirstCapturedImage)}>
            Click
          </button>

          {firstCapturedImage && (
            <div className='py-10'>
              <h3 className='text-center p-2'>First Pic</h3>
              <img src={firstCapturedImage} alt="First Captured" style={{ maxWidth: '50%' }} className='mx-auto' />
            </div>
          )}

          {isFirstCameraVisible && (
            <video ref={firstVideoRef} autoPlay playsInline muted style={{ maxWidth: '50%' }} className='mx-auto pt-10' />
          )}

        </div>

        <div className='flex flex-col items-center'>

          <div className='pt-5 pb-10'>
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="default_size">First Pic</label>
            <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-[#e6e6db] p-2" id="default_size" type="file" accept=".jpg, .jpeg, .png" />
            

          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="default_size">Second Pic</label>
            <input className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-[#e6e6db] p-2" id="default_size" type="file" />

          </div>

        </div>

      </div>
      <div className='mx-auto items-center'>

        <h3 className='text-center py-2 font-medium text-lg pb-5'>Step 2: It's morphin time!</h3>

        <div className='mx-auto text-center'>
            <button className='mt-2 py-2 bg-[#e4e4d0] text-black px-4 mx-2 rounded-2xl 
          transition-colors hover:bg-white hover:border-2 hover:border-[#e4e4d0] hover:text-[#acac68] focus:outline-none'>Morph</button>
        </div>

        <img src="/images/input" alt='' className='w-1/4 mx-auto p-5 '/><img src="/images/male-placeholder-image.jpeg" className='w-1/4 mx-auto p-5'/>

      </div>


    </div>
 );
};
