import { Link } from "react-router-dom";
import proImg from "./assets/pro-fraction.png";
 
export default function ProFraction() {
  return (
    <div className="px-4 sm:px-14 relative mt-7">
      <div className="flex flex-col relative md:flex-row gap-10 md:gap-5">
        <div className="w-[681.47px] h-[432.37px] absolute  bg-sky-600/20 rounded-[100px] blur-[240px]" />
        <div className="w-full min-h-[365px] justify-center items-center flex">
          <div className="w-full relative flex-col justify-center items-center flex">
            <div className="text-center mb-3 md:mb-5">
              <span className="text-white boxed_round_fonts leading-[60px] sm:leading-[70px]">
                Optimus{" "}
              </span>
              <span className="gradient-text boxed_round_fonts leading-[60px] sm:leading-[70px]">
                PRO Fraction
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-white text-center sub-heading">
              An assembly of <b>Optimists</b> collaboratively building the future
              </span>
            </div>
            <div className="max-w-[623px] body-text text-white mt-3 mb-4">
              Optimus Pro Faction is a dynamic community of creatives,
              passionate innovators, seasoned developers, blockchain
              enthusiasts, industry experts and tech visionaries.
            </div>
            <div className="max-w-[611px] body-text text-white">
              Join other Optimists around the globe, foster collaboration, share
              innovative ideas, and collectively shape the decentralized future.
            </div>
            <Link
              to=""
              className={`h-[53px] w-[141px] body-text !text-xl gradient-background rounded-3xl text-[white] cursor-pointer transition-[background-color] duration-[0.3s] flex items-center justify-center gap-2 tracking-[-0.3px] leading-[23.25px] font-medium text-[15px] px-5 py-2.5 mt-5`}
              // style={{
              //   backgroundImage:
              //     "linear-gradient(130.23538645559722deg, rgba(0, 128, 255, 1) 55.42494628353543%, rgba(0, 217, 217, 1) 73.15761965385957%)",
              // }}
            >
              <span className="text-white whitespace-nowrap">Join Now</span>
              <img src="/icons/ArrowRight.svg" className="w-4 h-4" alt="" />
            </Link>
          </div>
        </div>
        <div className="w-full">
          <img src={proImg} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
