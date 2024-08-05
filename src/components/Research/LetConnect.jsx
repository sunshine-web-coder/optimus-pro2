import { Link } from "react-router-dom";

export default function LetConnect() {
  return (
    <div className="py-[40px] relative overflow-hidden">
      <div className="w-full min-h-[270px] sm:min-h-[434px] flex flex-col items-center justify-center px-4 sm:px-5 relative overflow-hidden">
        <div className="w-[604.93px] h-[729.03px] absolute left-[20%] top-0 origin-top-left rotate-[-75deg] bg-gradient-to-br from-sky-500 to-cyan-500 rounded-[100px] blur-[240px]" />
        <div className="w-[681.47px] h-[832.37px] absolute right-0 top-0 origin-top-left rotate-[-75deg] bg-sky-600/25 rounded-[100px] blur-[240px]" />
        <div className="mx-auto flex relative z-10 flex-col items-center max-w-[407px] min-h-[189px]">
          <div className="mt-6 text-5xl font-bold text-center text-white leading-[70.08px] max-md:max-w-full max-md:text-4xl font-boxed">
            Let's
            <span className="text-[#0084FE]"> Connect</span>
          </div>
          <div className="mt-2 text-base text-center leading-6 text-white max-md:max-w-full font-calibri">
            Reach out to us for inquiries, collaborations, or just say hello!
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
            <span className="text-white whitespace-nowrap">Let Connect</span>
            <img src="/icons/ArrowRight.svg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}