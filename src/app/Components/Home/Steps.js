"use client";
import React from "react";

const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "ASSESS",
      subtitle: "Current State Analysis",
      description:
        "We dive deep into your existing processes, identify automation opportunities, and assess your technical infrastructure to create a comprehensive baseline.",
      points: [
        "Process Mapping",
        "Tech Stack Review",
        "ROI Assessment",
        "Risk Analysis",
      ],
      icon: (
       <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
  <path d="M14.8837 25.3623C20.743 25.3623 25.4929 20.6124 25.4929 14.753C25.4929 8.89372 20.743 4.1438 14.8837 4.1438C9.02433 4.1438 4.27441 8.89372 4.27441 14.753C4.27441 20.6124 9.02433 25.3623 14.8837 25.3623Z" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.1448 28.0152L22.4424 22.3127" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      ),
    },
    {
      number: "02",
      title: "DESIGN",
      subtitle: "Strategic Planning",
      description:
        "Custom AI strategy and architecture design tailored to your specific business needs, with detailed implementation roadmaps and success metrics.",
      points: [
        "Solution Architecture",
        "Integration Planning",
        "Security Framework",
        "Success Metrics",
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
  <path d="M20.4247 18.7305C20.6899 17.4044 21.353 16.4761 22.4139 15.4151C23.74 14.2216 24.4031 12.4976 24.4031 10.7736C24.4031 8.66327 23.5648 6.6394 22.0726 5.14718C20.5804 3.65497 18.5565 2.81665 16.4462 2.81665C14.3359 2.81665 12.312 3.65497 10.8198 5.14718C9.32758 6.6394 8.48926 8.66327 8.48926 10.7736C8.48926 12.0997 8.75449 13.6911 10.4785 15.4151C11.4068 16.3434 12.2025 17.4044 12.4677 18.7305" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M12.4697 24.0354H20.4267" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M13.7939 29.342H19.0986" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      ),
    },
    {
      number: "03",
      title: "IMPLEMENT",
      subtitle: "Secure Deployment",
      description:
        "Agile development and deployment of your AI solutions with continuous testing, security validation, and performance optimization throughout.",
      points: [
        "Agile Development",
        "Security Testing",
        "Performance Tuning",
        "Quality Assurance",
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
  <path d="M16.6796 26.6894C19.4933 26.6894 22.1918 25.5717 24.1814 23.5821C26.171 21.5924 27.2888 18.8939 27.2888 16.0802C27.2888 13.2664 26.171 10.5679 24.1814 8.57832C22.1918 6.5887 19.4933 5.47095 16.6796 5.47095C13.8658 5.47095 11.1673 6.5887 9.17769 8.57832C7.18807 10.5679 6.07031 13.2664 6.07031 16.0802C6.07031 18.8939 7.18807 21.5924 9.17769 23.5821C11.1673 25.5717 13.8658 26.6894 16.6796 26.6894Z" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.6777 18.7326C17.3811 18.7326 18.0558 18.4532 18.5532 17.9558C19.0506 17.4584 19.33 16.7837 19.33 16.0803C19.33 15.3769 19.0506 14.7022 18.5532 14.2048C18.0558 13.7074 17.3811 13.428 16.6777 13.428C15.9743 13.428 15.2996 13.7074 14.8022 14.2048C14.3048 14.7022 14.0254 15.3769 14.0254 16.0803C14.0254 16.7837 14.3048 17.4584 14.8022 17.9558C15.2996 18.4532 15.9743 18.7326 16.6777 18.7326Z" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.6797 2.81647V5.46878" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.6797 29.3401V26.6877" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.3066 27.564L21.9805 25.2698" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.3515 13.7843L10.0469 4.59399" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.1614 22.7112L25.8672 21.385" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.19336 9.44849L7.48761 10.7746" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.332 16.0793H29.9413" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.41602 16.0793H6.06833" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.1614 9.44849L25.8672 10.7746" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.19336 22.7112L7.48761 21.385" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.3066 4.59399L21.9805 6.88824" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.3515 18.3733L10.0469 27.5635" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      ),
    },
    {
      number: "04",
      title: "EMPOWER",
      subtitle: "Team Training & Support",
      description:
        "Comprehensive training programs, documentation, and ongoing support to ensure your team can effectively manage and scale your AI systems.",
      points: [
        "Team Training",
        "Documentation",
        "Ongoing Support",
        "Scaling Strategy",
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width={28} height={30} viewBox="0 0 28 30" fill="none">
  <path d="M3.30138 17.733C3.05043 17.7338 2.80438 17.6635 2.59183 17.5301C2.37927 17.3966 2.20894 17.2057 2.10061 16.9793C1.99229 16.7529 1.95042 16.5004 1.97987 16.2512C2.00932 16.002 2.10888 15.7662 2.26698 15.5714L15.3959 2.04457C15.4944 1.9309 15.6286 1.85408 15.7765 1.82673C15.9244 1.79938 16.0772 1.82312 16.2098 1.89406C16.3424 1.965 16.447 2.07892 16.5064 2.21712C16.5657 2.35532 16.5763 2.50959 16.5364 2.65461L13.9902 10.6381C13.9151 10.839 13.8899 11.0552 13.9167 11.268C13.9435 11.4808 14.0216 11.684 14.1441 11.86C14.2667 12.0361 14.4302 12.1797 14.6205 12.2787C14.8108 12.3777 15.0223 12.4291 15.2368 12.4284H24.5199C24.7708 12.4275 25.0169 12.4979 25.2294 12.6313C25.442 12.7647 25.6123 12.9557 25.7206 13.1821C25.829 13.4085 25.8708 13.6609 25.8414 13.9101C25.8119 14.1594 25.7124 14.3951 25.5543 14.59L12.4253 28.1168C12.3268 28.2305 12.1926 28.3073 12.0447 28.3346C11.8969 28.362 11.7441 28.3382 11.6114 28.2673C11.4788 28.1964 11.3742 28.0824 11.3149 27.9442C11.2555 27.806 11.2449 27.6518 11.2848 27.5068L13.8311 19.5233C13.9061 19.3224 13.9314 19.1062 13.9045 18.8934C13.8777 18.6805 13.7997 18.4774 13.6771 18.3013C13.5545 18.1253 13.3911 17.9816 13.2008 17.8826C13.0105 17.7836 12.799 17.7323 12.5845 17.733H3.30138Z" stroke="white" stroke-width="2.65231" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      ),
    },
  ];

  return (
    <section className="Steps   py-20">
      {/* ---------- Heading ---------- */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          OUR <span className="text-primary">PROCESS</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          A proven methodology that ensures successful AI implementation from
          initial assessment to full team empowerment.
        </p>
      </div>

      {/* ---------- Steps Grid ---------- */}
      <div className="flex flex-wrap justify-center gap-10 px-6 md:px-12 lg:px-20 relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative w-full md:w-[45%] lg:w-[22%] flex flex-col items-center"
          >
            {/* ---------- Number Circle ---------- */}
            <div className="flex flex-col items-center mb-6">
              <div className="bg-[#0E315B1A] text-gray-800 font-semibold rounded-full w-10 h-10 
              flex items-center justify-center mb-3 border-[#0E315B] border-[2px]">
                {step.number}
              </div>

              {/* ---------- Icon ---------- */}
              <div className="bg-[#0E315B] p-4 rounded-full shadow-lg flex items-center justify-center">
                {step.icon}
              </div>
            </div>

            {/* ---------- Card ---------- */}
            <div className="bg-white  max-w-[294px] shadow-md rounded-xl p-6 border border-gray-100 text-center">
              <h3 className="text-[23px] font-bold text-black">{step.title}</h3>
              <p className="text-[#1E48B4] text-[17px] font-semibold mt-1 leading-[27px]">
                {step.subtitle}
              </p>
              <p className="text-black mt-3 font-normal text-[15px] leading-[25px] text-left">
                {step.description}
              </p>
              <ul className="text-black text-[15px] mt-3 space-y-1 text-left list-disc list-inside leading-[19px]">
                {step.points.map((point, i) => (
                  <li key={i} className="text-[14px] text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
