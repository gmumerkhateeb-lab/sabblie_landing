
const standards = ["SOC 2 Ready", "GDPR Compliant", "HIPAA Aware", "ISO 27001"];

const SecurityStandards = () => {
  return (
    <section className="bg-[#007C80] rounded-[14px] py-[35px] px-[16px] sm:px-[20px] text-center w-full max-w-[1100px] mx-auto mt-[27px] overflow-hidden">
      {/* Title */}
      <h2 className="text-[18px] sm:text-[20px] font-semibold leading-[26px] sm:leading-[27px] text-[#EAEDF0] mb-[25px] sm:mb-[30px]">
        Security Standards & Certifications
      </h2>

      {/* Buttons grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[20px] justify-items-center mb-[20px] sm:mb-[25px] w-full">
        {standards.map((item, i) => (
          <button
            key={i}
            className="w-full max-w-[240px] py-[10px] sm:py-[12px] border border-[#1E48B4] rounded-[10px] text-[#EAEDF0] bg-[#1E48B41A] hover:bg-[#1E48B433] transition text-[14px] sm:text-[15px]"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Divider line */}
      <div className="border-t border-[#EAEDF0]/30 w-[90%] mx-auto mb-[12px] sm:mb-[15px]"></div>

      {/* Description */}
      <p className="text-[#EAEDF0CC] text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] max-w-[750px] mx-auto px-[4px]">
        Our security-first approach ensures that every AI solution we implement
        meets or exceeds industry standards for data protection, privacy, and
        regulatory compliance.
      </p>
    </section>
  );
};

export default SecurityStandards;
