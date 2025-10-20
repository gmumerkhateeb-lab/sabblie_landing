"use client";
const Readytostart = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div
        className="w-full bg-[#007C80] rounded-[26px]
        text-center flex flex-col items-center justify-center 
        px-[16px] sm:px-[24px] py-[24px] sm:py-[32px]"
      >
        <h2
          className="text-[18px] sm:text-[23px] md:text-[26px] 
          leading-[26px] sm:leading-[31px] md:leading-[34px] 
          font-bold text-[#EAEDF0] pt-0 sm:pt-[18px]"
        >
          Ready to Start Your AI Journey?
        </h2>

        <p
          className="text-[14px] sm:text-[15px] md:text-[16px] 
          text-[#9FABBC] py-[12px] sm:py-[16px] max-w-[650px]" >
          Let&apos;s discuss how our proven process can help you implement AI
          solutions that drive real business results.
        </p>

        <button
          onClick={() => alert("Begin Your Assessment clicked")}
          className="w-full xs:w-[80%] sm:w-[265px] 
          bg-[#FFF] py-[12px] sm:py-[15px] px-[24px] sm:px-[31px]
          rounded-[12px] text-black text-[16px] sm:text-[17px] 
          leading-[25px] sm:leading-[27px] font-normal
          cursor-pointer mt-[8px] transition-all duration-200 hover:scale-[1.02]"
        >
          Begin Your Assessment
        </button>
      </div>
    </div>
  );
};

export default Readytostart;
