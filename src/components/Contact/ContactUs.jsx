import React from "react";

export default function ContactUs() {
  const loopOver = [
    {
      icons: "/emailicon.png",
      header: "General Inquiries",
      sub: "For general questions or comments.",
    },
    {
      icons: "/bagicon.png",
      header: "Business Inquiries",
      sub: "To discuss potential business opportunities or collaborations, reach out to our business development team",
    },
    {
      icons: "/handshakeicon.png",
      header: "Partnerships",
      sub: "If you're interested in exploring partnership opportunities, contact our partnerships team.",
    },
    {
      icons: "/chaticon.png",
      header: "Customer Support",
      sub: "For assistance with our products or services, contact our customer support team.",
    },
    {
      icons: "/newsicon.png",
      header: "Media & Press",
      sub: "For media inquiries, press releases, or interview requests, please contact our PR team.",
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col pt-36">
      {/** heading */}
      <div className="w-[100%] flex flex-col items-center justify-center">
        <div className="mt-6 text-5xl font-bold text-center leading-[70.08px] max-md:max-w-full max-md:text-4xl font-boxed text-[#FFF]">
          {" "}
          Contact <span className="text-[#0084FE]">Us</span>
        </div>
        <div className="text-sm md:text-lg text-center text-white w-[100%] md:w-[50%]">
          We’d love to hear from you! Whether you have questions, feedback, or
          need support, our team is here to help
        </div>
      </div>
      {/** content */}
      <div className="flex flex-col gap-5 w-[100%] px-4 md:px-7 mt-20">
        <div className="text-[#FFF] text-sm md:text-lg text-center mb-6 font-bold font-quan">
          Get in Touch with Our Team
        </div>
        {/** picture and */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-7">
          <div className="w-[100%] md:w-[50%]">
            <img src="/contactus.png" alt="" className="w-[100%] h-auto" />
          </div>
          <div className="w-[100%] md:w-[50%] h-[100%] flex flex-col gap-6">
            {loopOver.map((data, index) => (
              <div
                key={index}
                className="bg-[#212121] bg-opacity-[50%] rounded-full p-1 px-2 flex items-center justify-start gap-3 w-[100%]"
              >
                <img src={data.icons} alt="" />
                <div className="">
                  <div className="text-white font-semibold">{data.header}:</div>
                  <div className="text-white text-sm md:text-base">
                    {data.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
