import { Link } from 'react-router-dom';
import { DiscordIcon, FacebookIcon, InstagramIcon, LinkedlnIcon, TelegramIcon, TikTokIcon, TwitterIcon, YoutubeIcon } from '../svgicon';

export default function FollowUs() {
  return (
    <div className="py-[40px] sm:py-[0px] relative overflow-hidden mt-12">
      <div className="w-full min-h-[270px] sm:min-h-[434px] flex flex-col items-center justify-center px-4 sm:px-5 relative overflow-hidden">
        <div className="w-[604.93px] h-[729.03px] absolute left-[20%] top-0 origin-top-left rotate-[-75deg] bg-[#006DD9] bg-opacity-[12%] rounded-[100px] blur-[240px]" />
        <div className="w-[681.47px] h-[832.37px] absolute right-0 top-0 origin-top-left rotate-[-75deg] bg-[#006DD9] bg-opacity-[12%] rounded-[100px] blur-[240px]" />
        <div className="mx-auto flex relative z-10 flex-col items-center justify-center max-w-[807px] min-h-[189px]">
          <div className="w-[100%] flex flex-col gap-[9px] items-center justify-center">
            <div className="mt-6 boxed_round_fonts text-center max-md:max-w-full text-[#FFF]">
              Follow <span className="gradient-text">Us</span>
            </div>
            <div className="sub-heading text-center text-white mx-auto max-w-[800px]">Stay connected with us on social media for the latest updates and news</div>
          </div>
          {/* Button */}
          <div className="flex flex-wrap gap-4 md:gap-10 justify-center mt-10 w-[100%] ">
            <Link href="">
              <TwitterIcon />
            </Link>
            <Link href="">
              <LinkedlnIcon />
            </Link>
            <Link href="">
              <TelegramIcon />
            </Link>
            <Link href="">
              <DiscordIcon />
            </Link>
            <Link href="">
              <FacebookIcon />
            </Link>
            <Link href="">
              <InstagramIcon />
            </Link>
            <Link href="">
              <TikTokIcon />
            </Link>
            <Link href="">
              <YoutubeIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
