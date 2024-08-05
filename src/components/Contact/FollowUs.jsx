import React from "react";
import { Link } from "react-router-dom";

export default function FollowUs() {
  return (
    <div className="py-[40px] sm:py-[0px] relative overflow-hidden mt-12">
      <div className="w-full min-h-[270px] sm:min-h-[434px] flex flex-col items-center justify-center px-4 sm:px-5 relative overflow-hidden">
        <div className="w-[604.93px] h-[729.03px] absolute left-[20%] top-0 origin-top-left rotate-[-75deg] bg-[#006DD9] bg-opacity-[12%] rounded-[100px] blur-[240px]" />
        <div className="w-[681.47px] h-[832.37px] absolute right-0 top-0 origin-top-left rotate-[-75deg] bg-[#006DD9] bg-opacity-[12%] rounded-[100px] blur-[240px]" />
        <div className="mx-auto flex relative z-10 flex-col items-center justify-center max-w-[407px] min-h-[189px]">
          <div className="mt-6 text-4xl font-bold text-center text-white leading-[70.08px] max-md:max-w-full max-md:text-4xl font-boxed">
            Follow <span className="text-[#0084FE]">Us</span>
          </div>
          <div className="mt-2 text-base text-center leading-6 text-white max-md:max-w-full font-calibri">
            Stay connected with us on social media for the latest updates and
            news
          </div>
          {/* Button */}
          <div className="flex gap-4 md:gap-20 justify-center mt-10 w-[100%] ">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc7b3d14579c852c4704cdaa3a3731f9c2f5ea68458ce82a3d1159aadb710c17?apiKey=cad8efe434314a3791073499160712c6&"
              className="shrink-0 w-12 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/64e6d2df0d74057fd5cd35b860fb97aba2693e72aeab1fc77ed08b289bcfac5d?apiKey=cad8efe434314a3791073499160712c6&"
              className="shrink-0 w-12 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/37ba3a8989acc5e69bbbaaa18e8611c0fc823bfacbf960aeebdc21c38bdc7306?apiKey=cad8efe434314a3791073499160712c6&"
              className="shrink-0 w-12 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c7faea46e141e8712b8a52ae737568e53c136af8423541635d804042e794154?apiKey=cad8efe434314a3791073499160712c6&"
              className="shrink-0 w-12 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91f6d57847df210d0c8cbfe07040170f09b37e45bd8891b016842bf0f73f3a5?apiKey=cad8efe434314a3791073499160712c6&"
              className="shrink-0 w-12 aspect-square"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b485b7d7196d3d04f2859aedbfdba3b2b94cc3f6c8e0659fc694b4e577c5b95c?apiKey=cad8efe434314a3791073499160712c6&"
              className="shrink-0 w-12 aspect-square"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
