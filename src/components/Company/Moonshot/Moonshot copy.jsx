import { roadmapItems } from './data';

export default function Moonshot() {
  return (
    <div className="w-full border px-4 min-h-[811px] py-[50px] md:py-[30px]">
      <div className="custom-container">
        <div className="">
          <h3 className="gradient-text boxed_round_fonts text-center mb-6">Moonshot</h3>
          <p className="text-white text-center sub-heading">Unveiling our ambitious roadmap towards groundbreaking solutions that will revolutionize the Web3 ecosystem.</p>
        </div>
        <div className="border border-white mt-[65px]">
          <div className="flex gap-10 justify-between">
            <div className="w-full h-full flex gap-2 items-center justify-between border">
              <div className="w-[333px] min-h-[175px] bg-white/30 rounded-2xl border border-white/30 px-2.5 pt-2 pb-1.5"></div>
              <span className='text-white'>2017 - 2020</span>
            </div>
            <div className="border border-white">
              <img src="/moonshot/singularrocket.png" alt="" />
            </div>
            <div className="w-full h-full flex gap-2 flex-row-reverse items-center justify-between border">
              <div className="w-[333px] min-h-[175px] bg-white/30 rounded-2xl border border-white/30 px-2.5 pt-2 pb-1.5"></div>
              <span className='text-white'>2017 - 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
