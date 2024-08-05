import React from "react";
import { Link } from "react-router-dom";

export default function BuildFuture() {
  return (
    <div className="py-[40px] sm:py-[0px] relative overflow-hidden mt-14">
      <div className="w-full min-h-[270px] sm:min-h-[434px] flex flex-col items-center justify-center px-4 sm:px-5 relative overflow-hidden">
        <div className="w-[604.93px] h-[729.03px] absolute left-[20%] top-0 origin-top-left rotate-[-75deg] bg-gradient-to-br from-[#006DD9] to-[#006DD9]-[23%] rounded-[100px] blur-[240px]" />
        <div className="w-[681.47px] h-[832.37px] absolute right-0 top-0 origin-top-left rotate-[-75deg] bg-sky-600/25 rounded-[100px] blur-[240px]" />
        <div className="mx-auto flex relative z-10 flex-col items-center min-h-[189px] bg-[#0080FF] bg-opacity-[23%] rounded-2xl p-7 px-20">
          <div className="mt-6 text-4xl font-bold text-center text-white leading-[70.08px] max-md:max-w-full max-md:text-4xl font-boxed">
            Build the future with Optimus PRO
          </div>
          <div className="mt-2 text-base text-center leading-6 text-white max-md:max-w-full font-calibri">
            Ready to be part of our passionate and ambitious team ?
          </div>
          {/* Button */}
          <Link
            to=""
            className={`h-[51px] w-[166px] rounded-2xl text-[white] cursor-pointer transition-[background-color] duration-[0.3s] md:flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[16px] px-5 py-2.5 mt-5 flex`}
            style={{
              backgroundImage:
                "linear-gradient(130.23538645559722deg, rgba(0, 128, 255, 1) 55.42494628353543%, rgba(0, 217, 217, 1) 73.15761965385957%)",
            }}
          >
            <span className="text-white whitespace-nowrap">Apply Now</span>
            <img src="/icons/ArrowRight.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
