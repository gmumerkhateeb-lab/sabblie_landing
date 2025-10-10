import Image from "next/image";
import Primarybutton from "../Primarybutton";

const Hero = () => {
  return (
    <div className="relative z-100">
      <div className="mx-auto text-center mt-[220px] max-w-[968px] px-[96px] py-[24px] relative">
        {/* Background image inside text section */}
        <Image
          src="/icons/Herotop.png"
          alt="logo"
          width={169}
          height={174}
          className="absolute left-[-14px] top-[-84px] z-0"
        />

        <h1
          className="relative text-[54px] font-bold leading-[54px] bg-gradient-to-r from-[#0E315B]
          to-[#3BB8BC] bg-clip-text text-transparent z-10"
        >
          ADVANCED AI /AUTOMATION
        </h1>
        <span className="text-[54px] font-bold leading-[55px]" style={{ color: "var(--text-primary2)" }}>
          & SECURITY CONSULTING
        </span>
        <p className="text-[18px] leading-[24px] font-normal mt-[12px]" style={{ color: "var(--text-primary2)" }}>
          For High-Growth Firms
        </p>
        <p className="text-[18px] leading-[24px] font-normal mt-[18px] " style={{ color: "var(--text-primary2)" }}>
          From strategy through full implementation—so your team can scale with <br />
          confidence.
        </p>

        <Image
          src="/icons/Herobottom.png"
          alt="logo"
          width={84}
          height={90}
          className="absolute right-0 bottom-66"
        />

        <div className="flex flex-row gap-[18px] items-center justify-center mt-[36px]">
      <Primarybutton text="Schedule a Discovery Call" />
      <Primarybutton text="Get Your AI Roadmap" />
      </div>

     <div className="flex flex-row gap-[24px] mt-[48px] justify-center items-center">
        <div className="flex flex-row ">
          <div className=" flex flex-row items-center justify-center gap-[6px]">
          <div className="w-[6px] h-[6px] bg-[#39B1BE] rounded-full"></div>
          <span className="text-[11px] text-[#000] leading-[15px] font-normal">
             30+ Years Experience
          </span>
         </div>
       </div>

        <div className="flex flex-row ">
          <div className=" flex flex-row items-center justify-center gap-[6px]">
          <div className="w-[6px] h-[6px] bg-[#9C66FF] rounded-full"></div>
          <span className="text-[11px] text-[#000] leading-[15px] font-normal">
            Cybersecurity-First Approach
          </span>
         </div>
       </div>

        <div className="flex flex-row ">
          <div className=" flex flex-row items-center justify-center gap-[6px]">
          <div className="w-[6px] h-[6px] bg-[#39B1BE] rounded-full"></div>
          <span className="text-[11px] text-[#000] leading-[15px] font-normal">
             Proven Results
          </span>
         </div>
       </div>
      </div>

      <div className=" mx-[290px] mt-[-40px] rounded-full border-[#5398EB]  w-[73px] h-[74px] border-[2px] opacity-[0.39]"></div>

      </div>
    </div>
  );
};

export default Hero;
