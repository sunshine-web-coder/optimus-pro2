import { Link } from 'react-router-dom';

export default function JoinCommunity() {
  const socialData = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bc7b3d14579c852c4704cdaa3a3731f9c2f5ea68458ce82a3d1159aadb710c17?apiKey=cad8efe434314a3791073499160712c6&',
      link: 'https://x.com/OptimusPRO_io?t=mECttREufz7HaESRWFN0dg&s=09'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/64e6d2df0d74057fd5cd35b860fb97aba2693e72aeab1fc77ed08b289bcfac5d?apiKey=cad8efe434314a3791073499160712c6&',
      link: 'https://www.linkedin.com/company/optimusproinc/'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/37ba3a8989acc5e69bbbaaa18e8611c0fc823bfacbf960aeebdc21c38bdc7306?apiKey=cad8efe434314a3791073499160712c6&',
      link: 'http://t.me/optimuspro'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3c7faea46e141e8712b8a52ae737568e53c136af8423541635d804042e794154?apiKey=cad8efe434314a3791073499160712c6&',
      link: ''
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a91f6d57847df210d0c8cbfe07040170f09b37e45bd8891b016842bf0f73f3a5?apiKey=cad8efe434314a3791073499160712c6&',
      link: 'https://www.facebook.com/OptimusPro'
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b485b7d7196d3d04f2859aedbfdba3b2b94cc3f6c8e0659fc694b4e577c5b95c?apiKey=cad8efe434314a3791073499160712c6&',
      link: 'https://www.instagram.com/optimus_pro.io'
    }
  ];
  return (
    <div className="relative px-4 sm:px-5 py-[80px]">
      <div className="w-[379px] h-[463px] absolute left-0 top-[60px] pr-[21.87px] bg-sky-600/10 rounded-[100px] blur-[100px] flex-col justify-start items-center inline-flex" />
      <div className="w-[379px] h-[463px] absolute right-0 bottom-0 sm:top-[60px] bg-sky-600/10 rounded-[100px] blur-[100px]" />
      <div className="mx-auto relative z-10 max-w-[1031px] flex flex-col">
        <div className="mx-auto max-w-[524.66px] min-h-[45.94px] relative mb-4">
          <div className="boxed_round_fonts text-center bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] leading-[70px] max-md:text-4xl max-md:leading-[50px]">
            <span className="relative text-white whitespace-normal md:whitespace-nowrap z-[999999]">Join Our</span> <span className="relative gradient-text">Community</span>
          </div>
        </div>
        <p className="text-center sub-heading text-white mb-4">Our story isn't complete without you. Join us in building the future.</p>
        <p className="text-center body-text sm:!text-[22px] !font-normal text-white">Become a part of the fastest-growing Web3 community, uniting Researchers, Builders, Mentors, Entrepreneurs, Innovators, and Investors.</p>
        <p className="text-center body-text sm:!text-[22px] text-white mt-2">Together, we're at the forefront of developing groundbreaking solutions that redefine possibilities.</p>

        <div className="w-full min-h-[249.63px] mt-10 px-5 py-8 rounded-[32px] border border-stone-300/30">
          <div className="mx-auto max-w-[721px] min-h-[185.63px] flex flex-col justify-between">
            <div className="min-h-[79.63px] flex items-center justify-between w-full">
              <div className="flex flex-col text-5xl font-bold text-center bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] boxed_round_fonts">
                <span className="relative gradient-text">10K+</span>
                <span className="text-base text-white body-text">Active members</span>
              </div>
              <div className="flex flex-col text-5xl font-bold text-center bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] boxed_round_fonts">
                <span className="relative gradient-text">4</span>
                <span className="text-base text-white body-text">Projects</span>
              </div>
              <div className="flex flex-col text-5xl font-bold text-center bg-clip-text bg-[linear-gradient(120deg,#0080FF_56.64%,#00D9D9_76.56%)] boxed_round_fonts">
                <span className="relative gradient-text">7</span>
                <span className="text-base text-white body-text">Countries</span>
              </div>
            </div>
            <div className="min-h-[76px] flex items-center mt-10 sm:mt-0 w-full">
              <div className="w-full flex flex-wrap gap-5 justify-between">
                {socialData.map((social, index) => (
                  <Link to={social.link} key={index} target="_blank">
                    <img loading="lazy" src={social.icon} className="shrink-0 w-[76px] h-[77px] aspect-square" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
