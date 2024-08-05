import comCultureImg from './assets/commuity-culture.png';
import Accordion from '../accordion/Accordion';
import { accordionData } from '../accordion/accordionData';

export default function CommunityCulture() {
  return (
    <div className="px-4 relative sm:px-20 py-[80px] md:py-[120px] overflow-hidden">
      <div className="w-[530.69px] absolute -left-[10%] h-[648.20px] origin-top-left rotate-[-75deg] bg-sky-600/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -right-[10%] origin-top-left rotate-[-75deg] bg-sky-600/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -bottom-[110%] -left-[20%] origin-top-left rotate-[-75deg] bg-sky-600 rounded-[100px] blur-[240px]" />
      <div className="w-[379px] h-[463px] absolute -bottom-[20%] right-0 bg-gray-950 rounded-[100px] blur-[100px]" />

      <div className="mx-auto relative z-10 max-w-[1023px] min-h-[126px]">
        <div className="boxed_round_fonts text-center bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] leading-[70px] max-md:text-4xl max-md:leading-[50px]">
          <span className="relative text-white whitespace-normal md:whitespace-nowrap z-[999999]">Community</span> <span className="relative gradient-text">Culture</span>
        </div>
        <p className="text-center sub-heading text-white mt-2">
          Optimus PRO's greatest asset is our dynamic community culture, embodied by the essence of F.A.C.T.I.O.N. -<br />a shared ethos that fuels our collective passion, creativity, and commitment to driving innovation and success.
        </p>
      </div>
      <div className="flex relative z-10 flex-col-reverse md:flex-row gap-20 sm:gap-10 mt-[50px] md:mt-[100px]">
        <div className="w-full h-[350px] sm:h-[500px] md:h-[643px] ">
          <img src={comCultureImg} alt="" className="w-full h-auto" />
        </div>
        <div className="w-full">
          {accordionData.map((item, index) => (
            <Accordion key={index} title={item.title}>
              <div className="flex flex-col items-center">
                <img src={item.img} className='w-[200px] block mb-4 md:mb-0 md:hidden' alt={item.title} />
                <p className="w-full text-2xl">{item.content}</p>
              </div>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
