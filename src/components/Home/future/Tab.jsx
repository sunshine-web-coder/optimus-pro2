import collabImg from './assets/collab-web3.png';

export const tabs = [
  {
    id: 0,
    title: 'Human',
    content: (
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-[32px]">
        <div className="w-full h-[300px] sm:h-[370px] ">
          <img src={collabImg} alt="" className="w-full h-full" />
        </div>
        <div className="w-full h-full flex-col justify-start items-start gap-4 flex">
          <div className="self-stretch text-white !font-bold body-text leading-[38px]">Human Infrastructures</div>
          <div className="self-stretch text-white body-text">
            <p>Connect with culture-fit talents, mentors, advisors, promoters and startup programs. Start your entrepreneurial journey with a community that supports you from day one.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: 'Tech',
    content: (
      <div className="flex space-x-4">
        <div className="bg-blue-200 p-4 flex-1">Content Tech</div>
      </div>
    )
  },
  {
    id: 2,
    title: 'Financial',
    content: (
      <div className="flex space-x-4">
        <div className="bg-red-200 p-4 flex-1">Content Events</div>
      </div>
    )
  }
];
