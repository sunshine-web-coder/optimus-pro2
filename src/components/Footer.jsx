import footerLink from "./footerLink";

export default function Footer() {
  return (
    <div className="flex justify-center items-center px-16 py-14 w-full bg-black max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[1228px] max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start pr-1.5 w-full flex-col md:flex-row max-md:max-w-full">
          {/** open */}
          <div className="flex flex-col w-[100%] md:w-[30%]">
            <div className="flex gap-2 self-start text-base text-cyan-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9b8f65255b08fdca1f2a105ac42ca26bd66ad10dc57de81e9af6ab5babede7b?apiKey=cad8efe434314a3791073499160712c6&"
                className="shrink-0 aspect-[0.93] w-[30px]"
              />
              <div className="flex-auto my-auto">
                <span className="text-sky-600">Optimus</span>
                <span className="text-cyan-500">PRO</span>
              </div>
            </div>
            <div className="mt-2.5 w-full text-xl leading-8 text-stone-50">
              Optimus PRO is a community-driven Web3 ecosystem that prioritizes
              trust, security, and transparency. It’s a decentralized space
              co-built by stakeholders like you, where every voice matters.
            </div>
            <div className="flex gap-5 pr-20 mt-2.5 max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc7b3d14579c852c4704cdaa3a3731f9c2f5ea68458ce82a3d1159aadb710c17?apiKey=cad8efe434314a3791073499160712c6&"
                className="shrink-0 w-8 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/64e6d2df0d74057fd5cd35b860fb97aba2693e72aeab1fc77ed08b289bcfac5d?apiKey=cad8efe434314a3791073499160712c6&"
                className="shrink-0 w-8 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/37ba3a8989acc5e69bbbaaa18e8611c0fc823bfacbf960aeebdc21c38bdc7306?apiKey=cad8efe434314a3791073499160712c6&"
                className="shrink-0 w-8 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c7faea46e141e8712b8a52ae737568e53c136af8423541635d804042e794154?apiKey=cad8efe434314a3791073499160712c6&"
                className="shrink-0 w-8 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a91f6d57847df210d0c8cbfe07040170f09b37e45bd8891b016842bf0f73f3a5?apiKey=cad8efe434314a3791073499160712c6&"
                className="shrink-0 w-8 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b485b7d7196d3d04f2859aedbfdba3b2b94cc3f6c8e0659fc694b4e577c5b95c?apiKey=cad8efe434314a3791073499160712c6&"
                className="shrink-0 w-8 aspect-square"
              />
            </div>
            <div className="mt-1.5 text-base leading-6 text-white">
              hello@optimuspro.io
            </div>
          </div>
          {/** end */}

          <div className="flex gap-5 hidden max-md:flex-col max-md:gap-0">
            {Object.keys(footerLink).map((sectionKey) => {
              const section = footerLink[sectionKey];
              return (
                <div key={sectionKey} className={`flex flex-col ${sectionKey !== 'company' ? 'ml-5' : ''} w-[${sectionKey === 'company' ? 'full' : sectionKey === 'products' ? '45%' : sectionKey === 'community' ? '36%' : '1/5'}] max-md:ml-0 max-md:w-full`}>
                    <div className="flex flex-col grow text-xl leading-8 text-white max-md:mt-10">
                      <div className="text-cyan-500 font-['BoxedRound']">{section.title}</div>
                      {section.links.map((link, index) => (
                        <div key={index} className={`font-['QuanRounded'] whitespace-nowrap mt-${index === 0 ? '8' : '2'}`}>{link}</div>
                      ))}
                    </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex gap-5 justify-between pr-1.5 mt-3.5 w-full text-base text-white max-md:flex-wrap max-md:max-w-full">
          <div className="my-auto">©Optimus PRO Inc.</div>
          <div className="flex gap-5 justify-between leading-[150%]">
            <div>Alright Reserved</div>
            <div className="hidden">Privacy Policy</div>
            <div className="hidden">Terms of Service</div>
          </div>
        </div>
      </div>
    </div>
  );
}
