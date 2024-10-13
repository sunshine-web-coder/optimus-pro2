import { useEffect, useRef, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { FaCheck } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';

const roadmapData = [
  {
    phase: 'Done',
    title: 'MVP',
    items: ['NFT trading engine', 'Supported exchanges', '20 public library scripts', 'Copy trading marketplace', 'High-water mark tech', 'Alert configurator', 'Smart terminal', 'Demo account']
  },
  {
    phase: 'Q1 2025',
    title: 'Extention',
    items: ['Strategy builder', 'Grid bot', 'Futures terminal', 'Futures bots', 'Mobile app']
  },
  {
    phase: 'Q2 2025',
    title: 'WEB3',
    items: ['Wallet connect', 'Metamask', 'Rug pull protection', 'Path finder screener']
  },
  {
    phase: 'Q3 2025',
    title: 'DEX',
    items: ['Smart contract engine', 'DEX terminal', 'DEX bots']
  },
  {
    phase: 'Q4 2025',
    title: 'Token',
    items: ['POS tier utility token', 'Gamification', 'Achievements list', 'Trading launch', 'Telegram app']
  }
];

export default function Moonshot() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    currentRef.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => currentRef.removeEventListener('scroll', handleScroll);
  }, []);

  const scroll = direction => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll('right'),
    onSwipedRight: () => scroll('left'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="w-full relative overflow-hidden px-4 min-h-[811px] py-[50px] md:py-[30px]">
      <div className="w-[530.69px] h-[648.20px] absolute top-0 -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute top-0 -right-[120%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -bottom-[30%] -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute -bottom-[30%] -right-[120%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />

      <div className="custom-container relative z-10 pt-[40px] md:pt-[100px]">
        <div className="">
          <h3 className="gradient-text boxed_round_fonts text-center mb-6">Moonshot</h3>
          <p className="text-white text-center sub-heading">Unveiling our ambitious roadmap towards groundbreaking solutions that will revolutionize the Web3 ecosystem.</p>
        </div>
        <div className="relative mt-7">
          <div className="absolute top-[51px] left-0 right-0 h-0.5 gradient-background"></div>
          <div className="relative overflow-x-hidden">
            {showLeftArrow && (
              <button onClick={() => scroll('left')} className="absolute left-0 top-[15%] md:top-[25%] flex items-center justify-center z-10 gradient-background text-white rounded-full p-2 px-[13px]">
                &#9664;
              </button>
            )}
            {showRightArrow && (
              <button onClick={() => scroll('right')} className="absolute right-0 top-[15%] md:top-[25%] flex items-end justify-center z-10 gradient-background text-white rounded-full p-2 px-[13px]">
                &#9654;
              </button>
            )}
            <div {...handlers} ref={scrollRef} className="flex overflow-x-auto scrollbar-hide touch-pan-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {roadmapData.map((phase, index) => (
                <div key={index} className="flex-shrink-0 relative w-64 md:w-80 mr-8 last:mr-0">
                  <div className="relative flex flex-col items-center justify-center">
                    {phase.phase == 'Done' && <div className="absolute top-[50px] gradient-background w-full h-1 rounded" />}
                    <h3 className="gradient-text !text-2xl boxed_round_fonts text-center mb-8">{phase.phase}</h3>
                    <div className={`relative top-[-20px] flex items-center justify-center text-lg gradient-background rounded-full ${phase.phase == 'Done' ? 'w-5 h-5 top-[-22px]' : 'w-4 h-4'}`}>
                      {phase.phase == 'Done' ? <FaCheck className="text-xs text-white" /> : ''}
                    </div>
                    <h4 className="font-bold text-center !text-lg boxed_round_fonts text-white mb-2">{phase.title}</h4>
                    <div className="flex items-center justify-center">
                      <ul className="flex flex-col md:gap-[11px] text-sm mt-4">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-300 flex items-center gap-2 !text-[14px] boxed_round_fonts">
                            <FaCircleCheck />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-[530.69px] h-[648.20px] absolute top-[20%] -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute top-[20%] -right-[120%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute bottom-[10%] -left-[50%] sm:left-0 rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
      <div className="w-[530.69px] h-[648.20px] absolute bottom-[10%] -right-[10%] sm:-right-[20%] rotate-[-75deg] bg-[#006dd9]/20 rounded-[100px] blur-[240px]" />
    </div>
  );
}
