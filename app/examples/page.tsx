import React from 'react';

export default function Home() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1280px] h-[1900px] relative">
        <p className="absolute top-[46px] left-[428px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[normal]">
          Made Just For You <br />
          Using Artificial Intelligence
        </p>
        <p className="absolute w-[238px] top-[155px] left-[190px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
          Just Upload two pictures of people
          <img className="py-10" src="/images/morphimg.png" alt="" />
        </p>
        <p className="absolute w-[238px] top-[155px] left-[863px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[20px] text-center tracking-[0] leading-[normal]">
          Our AI can also generate your old self
          <img className='py-10' src="/images/oldimg.png" alt="" />
        </p>
        <div className="absolute w-[1280px] h-[198px] top-[634px] left-0 bg-[#e4e4d0]">
          <div className="absolute w-[263px] top-[16px] left-[508px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[24px] text-center tracking-[0] leading-[normal]">
            Why Choose Us?
          </div>
          <p className="absolute w-[372px] top-[58px] left-[136px] [font-family:'Inter-Bold',Helvetica] font-normal text-black text-[24px] text-center tracking-[0] leading-[normal]">
            <span className="font-bold">Advanced AI Technology </span>
            <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[16px]">
              <br /> Receive Super realistic morphing photos{" "}
            </span>
          </p>
          <p className="absolute w-[372px] top-[56px] left-[771px] [font-family:'Inter-Bold',Helvetica] font-normal text-black text-[24px] text-center tracking-[0] leading-[normal]">
            <span className="font-bold">Data Privacy </span>
            <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[16px]">
              <br /> No need to input data <br />
              Your Information is safe with us
            </span>
          </p>
        </div>
        <div className="absolute w-[398px] top-[860px] left-[440px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[32px] text-center tracking-[0] leading-[normal]">
          Frequently Asked Questions
        </div>
        <p className="absolute w-[441px] top-[1028px] left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          <span className="font-semibold">
            What type of photos should I upload?
            <br />
            <br />
          </span>
          <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[18px]">
            We recommend That you upload high quality , close up portraits style pictures that show your face clearly.
          </span>
        </p>
        <p className="absolute w-[441px] top-[1028px] left-[763px] [font-family:'Inter-SemiBold',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          <span className="font-semibold">
            Who owns the pictures?
            <br />
            <br />
          </span>
          <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[18px]">
            You do of course! After the pictures are delivered, they are fully yours.
          </span>
        </p>
        <p className="absolute w-[441px] top-[1270px] left-[98px] [font-family:'Inter-SemiBold',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          <span className="font-semibold">
            Can I only upload photos of myself?
            <br />
            <br />
          </span>
          <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[18px]">
            No you can upload pictures of anybody, and the results will follow accordingly.
          </span>
        </p>
        <p className="absolute w-[441px] top-[1255px] left-[763px] [font-family:'Inter-SemiBold',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          <span className="font-semibold">
            Is my privacy protected?
            <br />
            <br />
          </span>
          <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-[18px]">
            Yes your information is safe with us. We do not publish photos, nor your information to the public.
          </span>
        </p>
        <div className="flex w-[172px] h-[51px] items-center justify-center gap-[10px] px-[10px] py-[7px] absolute top-[1523px] left-[553px] bg-[#e4e4d0] rounded-[9px]">
          <div className="relative w-fit [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[24px] text-center tracking-[0] leading-[normal]">
            Get Started
          </div>
        </div>
        <div className="absolute w-[1280px] h-[234px] top-[1666px] left-0 bg-[#e4e4d0]">
          <img
            className="absolute w-[1037px] h-[3px] top-[152px] left-[111px] object-cover"
            alt="Line"
            src="line-1.svg"
          />
          <div className="absolute top-[92px] left-[111px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#141719] text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
            ©2023&nbsp;&nbsp;Morphace
          </div>
          <div className="inline-flex items-center justify-center gap-[10px] p-[10px] absolute top-[83px] left-[1037px] bg-black rounded-[7px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
              Purchase Now
            </div>
          </div>
          <div className="absolute top-[184px] left-[453px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
            Home
          </div>
          <div className="absolute top-[184px] left-[621px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
            About
          </div>
          <div className="absolute top-[184px] left-[789px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};