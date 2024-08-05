export default function OurStory() {
  return (
    <div className="w-full px-4 min-h-[811px] py-[50px] md:py-[100px]">
      <div className="custom-container">
        <div className="">
          <h3 className="gradient-text boxed_round_fonts text-center mb-6">Our Story</h3>
          <p className="text-white text-center sub-heading">A group of blockchain visionaries, bound by shared passion and unwavering vision, coming from humble beginnings to build a dynamic community that's shaping the future of the internet.uture</p>
        </div>
        <div className="mt-10 flex flex-col md:flex-row items-center md:items-start text-white">
          <div className="w-full z-10 relative md:w-1/2 mb-8 md:mb-0">
            <img src="/company/our-story.png" alt="our-story" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="w-full flex flex-col gap-5 body-text md:w-1/2 md:pl-4">
            <p className="body-text">
              <span className="gradient-text">Founded in 2020,</span> our journey began with an unwavering passion for Web3 technologies and a relentless drive to solve real-world problems we experienced firsthand - <span className="gradient-text">scams, pumps & dumps, hacks, and more.</span> These
              problems still pervade the Web3 ecosystem today and have cost users hundreds of billions of dollars. Since our inception, we've carefully assembled a team of dedicated and talented individuals bound by a shared purpose: to harness the power of Web3 to create a better future for all.
            </p>

            <p className="body-text">
              We've always imagined a Web3 community where every member, regardless of their background, expertise and experience, has a voice, where innovation is borderless, and where trust and security are the foundation. <span className="gradient-text">Our vision</span> is to build an inclusive,
              community-driven and secure ecosystem where everyone can collaborate, build, and thrive together, actualizing a decentralized future that's fair, open, and empowering for all.
            </p>

            <p className="body-text">
              Optimus PRO is a decentralized collective, fueled by a shared passion for blockchain and Web3 technologies. <span className="gradient-text">Our mission</span> is to empower the next generation of Web3 innovators and builders, fostering innovation and collaboration within the Web3
              ecosystem, and driving the development of new solutions and applications that shape the future of the internet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
