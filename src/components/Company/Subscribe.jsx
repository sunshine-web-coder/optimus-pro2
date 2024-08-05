export default function Subscribe() {
  return (
    <div className="px-4 sm:px-20 mt-10 sm:mt-28 mb-10 sm:mb-28">
      <div className="bg-gradient-to-r from-[#1975FF] min-h-[357px] py-[64px] to-[#33A9FF] flex flex-col items-center justify-center p-5 pt-10 md:p-10 rounded-2xl relative w-[100%]">
        <div className="mx-auto max-w-[833px] min-h-[116px] flex-col justify-start items-center gap-4 inline-flex">
          <div className="self-stretch text-center text-white text-3xl font-bold font-['BoxedRound'] leading-[44px]">
            Enter Your E-mail Address and Stay Updated on Our Journey
          </div>
          <div className="mx-auto max-w-[713px] text-center text-white text-[17px] md:text-md font-extralight font-orbitron leading-7">
            Join our newsletter to receive regular updates on our progress,
            product developments, and exciting news from our team.
          </div>

          <div className="w-full md:w-[549px] relative rounded-[48px] flex flex-col sm:flex-row mt-10 gap-4 sm:gap-0">
            <input
              type="text"
              placeholder="e-mail address"
              className="text-neutral-400 w-full bg-white rounded-[48px] h-[60px] sm:h-[73px] pl-8 pr-8 sm:pr-[220px] py-3 text-xl font-normal font-['Advent Pro']"
            />
            <button className="relative sm:absolute right-0 text-center sm:right-[10px] top-[10px] px-6 py-4 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-[48px] justify-center sm:justify-start items-center gap-2.5 flex">
              <span className="text-white text-sm font-bold font-['Advent Pro']">
                Subscribe Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
