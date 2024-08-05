import React from "react";

export default function ContactForm() {
  return (
    <div className="flex justify-center items-center flex-col mt-44 relative px-2 md:px-0">
      <div className="absolute right-0 top-14 w-[50%] h-[50%] rounded-full bg-[#006DD9] bg-opacity-[17%] blur-[60px]"></div>
      <div className="absolute left-0 top-14 w-[50%] h-[50%] rounded-full bg-[#006DD9] bg-opacity-[17%] blur-[60px]"></div>
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-1/2 h-1/2 rounded-full bg-[#006DD9] bg-opacity-[17%] blur-[60px]"></div>
      <div className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-1/2 h-1/2 rounded-full bg-[#006DD9] bg-opacity-[17%] blur-[60px]"></div>

      <div className="bg-[#FFFFFF] bg-opacity-[12%] flex flex-col items-center justify-center gap-8 rounded-3xl w-[100%] md:w-[80%] z-10">
        {/** heading */}
        <div className="w-[100%] flex flex-col items-center justify-center">
          <div className="mt-6 text-5xl font-bold text-center leading-[70.08px] max-md:max-w-full max-md:text-4xl font-boxed text-[#FFF]">
            Contact <span className="text-[#0084FE]">Form</span>
          </div>
          <div className="text-sm md:text-lg text-center text-white w-[100%] md:w-[50%]">
            Fill out the form below, and we’ll get back to you as soon as
            possible:
          </div>
        </div>
        {/** content inputs */}
        <div className="flex flex-col w-[100%] px-2 md:px-20 pb-20 gap-7 mt-7 md:mt-10">
          {/** input one*/}
          <div className="bg-[#212121] bg-opacity-[100%] rounded-full p-3 flex items-center gap-1">
            <img src="/avataricon.png" className="h-6" alt="" />
            <input
              type="text"
              placeholder="Full Name"
              className="text-white text-start bg-transparent outline-none border-none w-[100%]"
            />
          </div>
          {/** input two */}
          <div className="bg-[#212121] bg-opacity-[100%] rounded-full p-3 flex items-center gap-1">
            <img src="/contactemailicon.png" className="h-5" alt="" />
            <input
              type="text"
              placeholder="Email"
              className="text-white text-start bg-transparent outline-none border-none w-[100%]"
            />
          </div>
          {/** input three */}
          <div className="bg-[#212121] bg-opacity-[100%] rounded-full p-3 flex gap-1">
            <img src="/subjectemail.png" className="h-7" alt="" />
            <input
              type="text"
              placeholder="Subject"
              className="text-white text-start bg-transparent outline-none border-none w-[100%]"
            />
          </div>
          {/** input four */}
          <div className="bg-[#212121] bg-opacity-[100%] rounded-lg p-1 flex gap-1">
            <textarea
              placeholder="Your Message"
              name=""
              id=""
              className="text-white text-start bg-transparent outline-none border-none w-[100%] h-32 p-2"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
