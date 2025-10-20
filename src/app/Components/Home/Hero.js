"use client"
import Image from "next/image";
import Primarybutton from "../Primarybutton";

 const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

const Hero = () => {
  return (
    <div className="Hero relative z-100">
      <div
        className="mx-auto text-center mt-[3px] sm:mt-[60px] lg:mt-[220px] 
        max-w-[968px] w-full px-[20px] sm:px-[40px] md:px-[60px] lg:px-[96px] py-[24px] relative"
      >
        {/* Background image inside  */}
        <Image
          src="/icons/Herotop.png"
          alt="shape"
          width={169}
          height={174}
          className="absolute left-[-14px] top-[-84px] z-0 hidden lg:block"
        />

        {/* Heading */}
        <h1
          className="relative font-bold bg-gradient-to-r from-[#0E315B] to-[#3BB8BC] 
          bg-clip-text text-transparent z-10 whitespace-nowrap
          text-[23px] sm:text-[30px] md:text-[42px] lg:text-[54px] 
          leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[54px]"
        >
          ADVANCED AI /AUTOMATION
        </h1>

        <span
          className="font-bold block 
          text-[20px] sm:text-[30px] md:text-[42px] lg:text-[54px] 
          leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[55px]"
          style={{ color: "var(--text-primary2)" }}
        >
          & SECURITY CONSULTING
        </span>

        {/* Paragraphs */}
        <p
          className="font-normal mt-[6px] sm:mt-[8px] md:mt-[10px] lg:mt-[12px]
          text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px]
          leading-[20px] sm:leading-[22px] md:leading-[24px]"
          style={{ color: "var(--text-primary2)" }}
        >
          For High-Growth Firms
        </p>

        <p
          className="font-normal mt-[8px] sm:mt-[12px] lg:mt-[18px]
          text-[13px] sm:text-[15px] md:text-[17px] lg:text-[18px]
          leading-[20px] sm:leading-[22px] md:leading-[24px]"
          style={{ color: "var(--text-primary2)" }}
        >
          From strategy through full implementation—so your team can scale with <br className="hidden sm:block" />
          confidence.
        </p>

        {/* Bottom image  */}
        <Image
          src="/icons/Herobottom.png"
          alt="Shape"
          width={84}
          height={90}
          className="absolute right-0 bottom-66 hidden lg:block"
        />

        {/* Buttons */}
        <div
          className="whitespace-nowrap flex flex-row flex-wrap gap-[12px] sm:gap-[16px] lg:gap-[18px] 
          items-center justify-center mt-[18px] sm:mt-[24px] lg:mt-[36px]"
        >
          <Primarybutton className="!w-full xs:w-fit" text="Schedule a Discovery Call" onClick={scrollToTop} />
          <Primarybutton  className="!w-full xs:w-fit" text="Get Your AI Roadmap" onClick={scrollToTop} />
        </div>

        {/* Badges */}
        <div
          className="flex flex-wrap justify-center items-center 
          gap-[16px] sm:gap-[20px] lg:gap-[24px] 
          mt-[20px] sm:mt-[30px] lg:mt-[48px]"
        >
          <div className="flex flex-row items-center justify-center gap-[6px]">
            <div className="w-[6px] h-[6px] bg-[#39B1BE] rounded-full"></div>
            <span className="text-[10px] sm:text-[11px] text-[#000] leading-[15px] font-normal">
              30+ Years Experience
            </span>
          </div>

          <div className="flex flex-row items-center justify-center gap-[6px]">
            <div className="w-[6px] h-[6px] bg-[#9C66FF] rounded-full"></div>
            <span className="text-[10px] sm:text-[11px] text-[#000] leading-[15px] font-normal">
              Cybersecurity-First Approach
            </span>
          </div>

          <div className="flex flex-row items-center justify-center gap-[6px]">
            <div className="w-[6px] h-[6px] bg-[#39B1BE] rounded-full"></div>
            <span className="text-[10px] sm:text-[11px] text-[#000] leading-[15px] font-normal">
              Proven Results
            </span>
          </div>
        </div>

        {/* Circle  */}
        <div
          className="hidden lg:block mx-auto mt-[-40px] rounded-full border-[#5398EB] 
          w-[73px] h-[74px] border-[2px] opacity-[0.39]"
        ></div>
      </div>
    </div>
  );
};

export default Hero;
