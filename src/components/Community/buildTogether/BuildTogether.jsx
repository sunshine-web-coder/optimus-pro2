import { useState } from "react";
import { tabs } from "./Tab";

export default function BuildTogether() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="px-4 overflow-hidden relative sm:px-32 py-[80px] md:py-[120px] mt-7 flex flex-col items-center gap-10 sm:gap-20">
      <div className="w-[379px] h-[463px] absolute left-0 pr-[21px] pt-[154px] pb-[258px] bg-sky-600/20 rounded-[100px] blur-[100px]" />
      <div className="w-[379px] h-[463px] absolute top-40 pr-[21px] pt-[154px] pb-[258px] bg-sky-600/20 rounded-[100px] blur-[100px]" />
      <div className="mx-auto relative z-10 max-w-[650px] min-h-[198px] flex-col justify-start items-center gap-8 flex">
        <div className="flex-col justify-start items-center gap-[60px] flex">
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className="text-center text-white boxed_round_fonts leading-[60px] sm:leading-[70px]">
              Connect and Build Together
            </div>
            <div className="text-white sub-heading text-center leading-normal">
              Hang out, connect and collaborate with exceptional talents in
              building something incredible
            </div>
          </div>
        </div>
        <div className="h-14 w-[350px] sm:w-full overflow-x-auto overflow-y-hidden px-2.5 py-2 bg-gradient-to-r from-zinc-800 to-zinc-800 rounded-[168px] border border-sky-500 justify-center items-center sm:gap-5 flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`w-[148px] font-['Transformer'] tracking-widest h-[42px] px-6 py-3 rounded-full justify-center items-center gap-2 flex ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-white text-base font-bold leading-tight tracking-tight"
              } focus:outline-none`}
              style={
                activeTab === tab.id
                  ? {
                      backgroundImage:
                        "linear-gradient(130.23538645559722deg, rgba(0, 128, 255, 1) 55.42494628353543%, rgba(0, 217, 217, 1) 73.15761965385957%)",
                      color: "white", // Add text color here
                    }
                  : {}
              }
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="">{tab.title}</span>
            </button>
          ))}
        </div>
      </div>
      {tabs.map(
        (tab) =>
          activeTab === tab.id && (
            <div className="w-full relative z-10" key={tab.id}>
              {tab.content}
            </div>
          )
      )}
      <div className="w-[379px] h-[463px] absolute right-0 bottom-0 bg-sky-600/10 rounded-[100px] blur-[100px]" />
    </div>
  );
}
