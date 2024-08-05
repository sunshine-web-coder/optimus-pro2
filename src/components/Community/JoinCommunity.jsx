import { Link } from 'react-router-dom';

export default function JoinCommunity() {
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
        <p className="text-center sub-heading text-white mb-4">Our story isn't complete without you, join us in building</p>
        <p className="text-center body-text text-white">
          Join the fastest growing web3 Community of Researchers. Builders. Mentors. Entrepreneur. Innovators <br />
          and Investors collectively driving the development of groundbreaking solutions and applications.
        </p>

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
                <Link to="">
                  <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0 38.3184C0 17.3315 17.0132 0.318359 38 0.318359C58.9868 0.318359 76 17.3315 76 38.3184C76 59.3052 58.9868 76.3184 38 76.3184C17.0132 76.3184 0 59.3052 0 38.3184Z" fill="white" />
                    <path d="M47.0958 27.9121H51.1018L42.3499 37.915L52.6458 51.5267H44.5842L38.27 43.2713L31.0451 51.5267H27.0367L36.3978 40.8275L26.5208 27.9121H34.7871L40.4946 35.4579L47.0958 27.9121ZM45.6898 49.1289H47.9096L33.581 30.184H31.1989L45.6898 49.1289Z" fill="white" />
                  </svg>
                </Link>
                <Link to="">
                  <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0 38.3184C0 17.3315 17.0132 0.318359 38 0.318359C58.9868 0.318359 76 17.3315 76 38.3184C76 59.3052 58.9868 76.3184 38 76.3184C17.0132 76.3184 0 59.3052 0 38.3184Z" fill="white" />
                    <g clipPath="url(#clip0_220_506)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M55.8917 38.3975C55.8917 48.235 47.9167 56.21 38.0792 56.21C28.2416 56.21 20.2667 48.235 20.2667 38.3975C20.2667 28.5599 28.2416 20.585 38.0792 20.585C47.9167 20.585 55.8917 28.5599 55.8917 38.3975ZM38.7175 33.7349C36.985 34.4556 33.5223 35.947 28.3296 38.2094C27.4864 38.5447 27.0447 38.8728 27.0045 39.1935C26.9365 39.7356 27.6154 39.9491 28.5398 40.2398C28.6655 40.2793 28.7958 40.3203 28.9294 40.3637C29.8389 40.6593 31.0623 41.0052 31.6983 41.0189C32.2752 41.0314 32.9191 40.7935 33.63 40.3054C38.4817 37.0304 40.9861 35.375 41.1434 35.3393C41.2543 35.3141 41.408 35.2825 41.5122 35.375C41.6163 35.4676 41.6061 35.6429 41.5951 35.69C41.5278 35.9767 38.8631 38.454 37.4841 39.736C37.0542 40.1357 36.7493 40.4192 36.6869 40.484C36.5473 40.629 36.405 40.7662 36.2682 40.898C35.4233 41.7126 34.7897 42.3234 36.3033 43.3208C37.0307 43.8002 37.6127 44.1965 38.1934 44.592C38.8276 45.0238 39.4601 45.4546 40.2784 45.991C40.4869 46.1277 40.6861 46.2697 40.88 46.4079C41.618 46.9341 42.2811 47.4067 43.1002 47.3314C43.5762 47.2876 44.0678 46.84 44.3175 45.5052C44.9076 42.3506 46.0675 35.5155 46.3356 32.6989C46.3591 32.4521 46.3295 32.1363 46.3058 31.9977C46.2821 31.8591 46.2325 31.6615 46.0523 31.5153C45.8389 31.3421 45.5094 31.3056 45.362 31.3082C44.6921 31.32 43.6642 31.6774 38.7175 33.7349Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_220_506">
                        <rect width="35.625" height="35.625" fill="white" transform="translate(20.2667 20.585)" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link to="">
                  <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0 38.3184C0 17.3315 17.0132 0.318359 38 0.318359C58.9868 0.318359 76 17.3315 76 38.3184C76 59.3052 58.9868 76.3184 38 76.3184C17.0132 76.3184 0 59.3052 0 38.3184Z" fill="white" />
                    <path
                      d="M52.9829 27.878C48.0842 24.2121 43.3907 24.3152 43.3907 24.3152L42.911 24.8632C48.7348 26.6104 51.4413 29.1797 51.4413 29.1797C43.1089 24.5922 32.4958 24.6251 23.8291 29.1797C23.8291 29.1797 26.6382 26.4732 32.8049 24.726L32.4625 24.3147C32.4625 24.3147 27.8032 24.2121 22.8702 27.8775C22.8702 27.8775 17.9369 36.7503 17.9369 47.6789C17.9369 47.6789 20.8148 52.6122 28.3858 52.8521C28.3858 52.8521 29.6534 51.3447 30.6811 50.043C26.3304 48.7412 24.6858 46.0347 24.6858 46.0347C27.4193 47.7452 30.1831 48.8156 33.6274 49.4949C39.2311 50.6483 46.2015 49.4624 51.4076 46.0347C51.4076 46.0347 49.6946 48.8096 45.2067 50.0772C46.2344 51.3447 47.4677 52.8179 47.4677 52.8179C55.0388 52.578 57.9163 47.6447 57.9163 47.6793C57.9158 36.7507 52.9829 27.878 52.9829 27.878ZM31.5374 44.4932C29.6188 44.4932 28.043 42.8144 28.043 40.7248C28.1832 35.72 34.9266 35.7354 35.0318 40.7248C35.0318 42.8144 33.4898 44.4932 31.5374 44.4932ZM44.0413 44.4932C42.1227 44.4932 40.5469 42.8144 40.5469 40.7248C40.7008 35.7298 47.36 35.7277 47.5357 40.7248C47.5357 42.8144 45.9941 44.4932 44.0413 44.4932Z"
                      fill="#FBFBFD"
                    />
                  </svg>
                </Link>
                <Link to="">
                  <svg width={76} height={77} viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={0.1} fillRule="evenodd" clipRule="evenodd" d="M0 38.3184C0 17.3315 17.0132 0.318359 38 0.318359C58.9868 0.318359 76 17.3315 76 38.3184C76 59.3052 58.9868 76.3184 38 76.3184C17.0132 76.3184 0 59.3052 0 38.3184Z" fill="white" />
                    <g clipPath="url(#clip0_220_502)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M57.929 55.5234H49.5301V43.8344C49.5301 40.7754 48.2174 38.6865 45.3276 38.6865C43.1185 38.6865 41.8895 40.0963 41.3178 41.4545C41.1027 41.9416 41.1364 42.6208 41.1364 43.2999V55.5234H32.8161C32.8161 55.5234 32.9232 34.8178 32.8161 32.9359H41.1364V36.4812C41.6287 34.9309 44.287 32.7189 48.5291 32.7189C53.793 32.7189 57.929 35.9675 57.929 42.9641V55.5234ZM24.4026 30.1105H24.3482C21.6675 30.1105 19.929 28.384 19.929 26.1953C19.929 23.9642 21.7184 22.2734 24.4535 22.2734C27.1861 22.2734 28.8667 23.96 28.9194 26.1886C28.9194 28.3773 27.1861 30.1105 24.4026 30.1105ZM20.8876 32.9359H28.2941V55.5234H20.8876V32.9359Z"
                        fill="#FBFBFD"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_220_502">
                        <rect width={38} height={33.25} fill="white" transform="translate(19.929 22.2734)" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
                <Link to="">
                  <svg width={76} height={77} viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={0.1} fillRule="evenodd" clipRule="evenodd" d="M0 38.3184C0 17.3315 17.0132 0.318359 38 0.318359C58.9868 0.318359 76 17.3315 76 38.3184C76 59.3052 58.9868 76.3184 38 76.3184C17.0132 76.3184 0 59.3052 0 38.3184Z" fill="white" />
                    <path
                      d="M41.2421 55.8594V39.8063H47.659L48.6128 33.5211H41.2421V29.5176C41.2421 27.7039 41.8408 26.4621 44.9251 26.4621H48.8333V20.8585C46.9317 20.6865 45.0204 20.6034 43.108 20.6097C37.436 20.6097 33.5418 23.532 33.5418 28.8967V33.5093H27.1666V39.7946H33.5557V55.8594H41.2421Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <Link to="">
                  <svg width={76} height={77} viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={0.1} fillRule="evenodd" clipRule="evenodd" d="M0 38.3184C0 17.3315 17.0132 0.318359 38 0.318359C58.9868 0.318359 76 17.3315 76 38.3184C76 59.3052 58.9868 76.3184 38 76.3184C17.0132 76.3184 0 59.3052 0 38.3184Z" fill="white" />
                    <g clipPath="url(#clip0_220_491)">
                      <path
                        d="M38.5128 34.527C35.5839 34.527 33.1937 36.9172 33.1937 39.8461C33.1937 42.775 35.5839 45.1653 38.5128 45.1653C41.4417 45.1653 43.8319 42.775 43.8319 39.8461C43.8319 36.9172 41.4417 34.527 38.5128 34.527ZM54.4662 39.8461C54.4662 37.6435 54.4862 35.4607 54.3625 33.262C54.2388 30.7082 53.6562 28.4417 51.7887 26.5742C49.9172 24.7027 47.6547 24.1241 45.1009 24.0004C42.8982 23.8767 40.7155 23.8967 38.5168 23.8967C36.3141 23.8967 34.1314 23.8767 31.9327 24.0004C29.3789 24.1241 27.1124 24.7067 25.2449 26.5742C23.3734 28.4457 22.7948 30.7082 22.6711 33.262C22.5474 35.4647 22.5673 37.6474 22.5673 39.8461C22.5673 42.0448 22.5474 44.2315 22.6711 46.4302C22.7948 48.984 23.3774 51.2505 25.2449 53.118C27.1163 54.9895 29.3789 55.5681 31.9327 55.6918C34.1354 55.8155 36.3181 55.7956 38.5168 55.7956C40.7195 55.7956 42.9022 55.8155 45.1009 55.6918C47.6547 55.5681 49.9212 54.9855 51.7887 53.118C53.6602 51.2466 54.2388 48.984 54.3625 46.4302C54.4902 44.2315 54.4662 42.0488 54.4662 39.8461ZM38.5128 48.0303C33.9837 48.0303 30.3286 44.3752 30.3286 39.8461C30.3286 35.3171 33.9837 31.6619 38.5128 31.6619C43.0418 31.6619 46.697 35.3171 46.697 39.8461C46.697 44.3752 43.0418 48.0303 38.5128 48.0303ZM47.0322 33.2381C45.9747 33.2381 45.1208 32.3842 45.1208 31.3267C45.1208 30.2693 45.9747 29.4153 47.0322 29.4153C48.0896 29.4153 48.9436 30.2693 48.9436 31.3267C48.9439 31.5778 48.8947 31.8265 48.7987 32.0586C48.7028 32.2906 48.562 32.5014 48.3844 32.679C48.2069 32.8565 47.9961 32.9973 47.764 33.0933C47.532 33.1892 47.2833 33.2384 47.0322 33.2381Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_220_491">
                        <rect width={33.7778} height={33.7778} fill="white" transform="translate(20.942 22.2734)" />
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
