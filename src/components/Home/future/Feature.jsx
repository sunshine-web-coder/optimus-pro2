import { useState } from 'react';
import { tabs } from './Tab';

export default function Feature() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="px-4 py-20 relative overflow-hidden sm:px-32  mt-7 flex flex-col items-center gap-10 sm:gap-20">
      {/* Blur */}
      {/* <div className="blur-[120px] rounded-[100px] bg-[rgba(30,26,203,0.2)] rotate-[-75deg] absolute top-[51px] -right-[125.5px] w-[763.5px] h-[680.4px] z-10 inset-0"></div> */}
      {/* <div className="blur-[50px] rounded-[100px] bg-[#050526] absolute right-0 bottom-[-337px] w-[379px] h-[463px] z-10 inset-0"></div> */}
      {/* <div className="blur-[50px] rounded-[100px] bg-[#060528] absolute left-[-168px] bottom-[-447px] w-[379px] h-[463px] z-10 inset-0"></div> */}

      <div className="flex z-20 flex-col items-center px-0 sm:px-5 mt-0 w-full max-md:max-w-full">
        {/* <div className="mt-2 text-center text-white bg-clip-text leading-[70px] max-md:max-w-full max-md:text-4xl max-md:leading-[65px] font-boxed">
          <span className="">Driving Innovation and Collaboration in</span>
          <span className="">Web3</span>
        </div> */}
        <div className="text-center">
          <div className="text-center relative z-20">
            <span className="text-white boxed_round_fonts leading-[48px] sm:leading-[60px] md:leading-[70px]">Driving Innovation and Collaboration in </span>
            <span className="gradient-text relative font-bold boxed_round_fonts leading-[48px] sm:leading-[60px] md:leading-[70px]">
              Web3
              <div className="gradient-background absolute left-[3px] bottom-0 w-[100%] h-[3px]"></div>
            </span>
          </div>
          <div className="mt-4 mx-auto sub-heading relative z-20 max-w-[770px] text-center text-white max-md:mt-10">We empower startups in Web3 with different infrastructure stacks, support, and collaboration at every step of development.</div>
        </div>
        <div className=" w-[350px] sm:w-[504px] mt-[32px] z-20 relative overflow-x-auto overflow-y-hidden h-[58px] px-2.5 py-2 bg-gradient-to-r from-black via-white/20 to-neutral-600 rounded-[168px] border border-stone-300/30 backdrop-blur-3xl justify-center items-center gap-5 inline-flex">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`w-[148px] h-[42px] px-6 py-3 rounded-full justify-center items-center gap-2 flex ${activeTab === tab.id ? 'text-white gradient-background' : "text-white text-base font-normal font-['Calibri'] leading-tight tracking-tight"} focus:outline-none`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="">{tab.title}</span>
            </button>
          ))}
        </div>
        {tabs.map(
          tab =>
            activeTab === tab.id && (
              <div className="w-full relative z-10 mt-[50px] md:mt-[100px]" key={tab.id}>
                {/* <div className="w-[530.69px] h-[648.20px] absolute right-0 -top-[100%] bg-[#1d1acb]/20 rounded-[100px] blur-[240px]" /> */}
                <div className="w-[379px] h-[463px] absolute right-5 -top-[100%] bg-[#050526] rounded-[100px] blur-[100px]" />
                <div className="relative z-10">{tab.content}</div>
              </div>
            )
        )}
      </div>
      <div className="w-[379px] h-[463px] absolute right-0 -bottom-[40%] bg-[#050526] rounded-[100px] blur-[100px]" />
    </div>
  );
}
