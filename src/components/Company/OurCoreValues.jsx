const data = [
  {
    alphabet: 'E',
    title: 'Excellence',
    content: 'we are obsessed with excellence and we push ourselves beyond boundaries to set new industry standards through daring innovation.'
  },
  {
    alphabet: 'P',
    title: 'Passion',
    content: 'passion drives us, fueling our enthusiasm and dedication to our work and mission'
  },
  {
    alphabet: 'I',
    title: 'Innovation',
    content: "we foster innovation by constantly seeking new and creative solutions to challenges, pushing the boundaries of what's possible."
  },
  {
    alphabet: 'C',
    title: 'Collaboration',
    content: 'we cultivate a culture of collaboration, where diverse perspectives are valued and teamwork is celebrated.'
  },
  {
    alphabet: 'A',
    title: 'Adaptability',
    content: 'We embrace adaptability and resilience, embracing change and navigating challenges.'
  },
  {
    alphabet: 'C',
    title: 'Community',
    content: 'we prioritize community, fostering inclusivity, connections, collaboration, and support among our team members and stakeholders.'
  },
  {
    alphabet: 'T',
    title: 'Transparacy',
    content: 'we promote transparency and honesty, fostering trust and integrity in all interactions'
  },
  {
    alphabet: 'S',
    title: 'Service',
    content: 'we serve humanity, leveraging our skills and resources to make a positive impact and contribute to the greater good'
  }
];

export default function OurCoreValues() {
  return (
    <div className="w-full px-4 min-h-[811px] py-[50px] md:py-[30px]">
      <div className="custom-container">
        <div className="">
          <h3 className="gradient-text boxed_round_fonts text-center mb-6">Our Core Values</h3>
          <p className="text-white text-center sub-heading">
            Our core values are the guiding forces behind our actions, decisions, and interactions. They shape our culture, inspire our innovation, and foster a sense of community and collaboration. By living these values, we desire to script an extraordinary story; unavailing each chapter with
            <br />
            <span className="gradient-text">EPIC ACT</span>{' '}
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-3 text-white">
          {data.map((item, i) => (
            <div key={i} className="flex justify-start items-center gap-3 bg-[#212121] bg-opacity-[50%] p-1 rounded-full">
              {/** the rounded shit */}
              <div className="max-w-max">
                <div className="gradient-background text-white font-bold rounded-full w-[70px] sm:w-[114px] h-[70px] sm:h-[114px] relative">
                  <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] font-[transformer] text-[25px] sm:text-[35px] md:text-[58px]">{item.alphabet}</span>
                </div>
              </div>
              {/** right hand information */}
              <div className="text-white">
                <h4 className="boxed_round_fonts !text-lg md:!text-[32px] !leading-normal">{item.title}:</h4>
                <div className="boxed_round_fonts !text-base md:!text-xl !font-normal !leading-normal">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
