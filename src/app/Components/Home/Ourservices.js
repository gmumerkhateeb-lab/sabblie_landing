"use client";
import Primarybutton from "../Primarybutton";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const services = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={31} height={32} viewBox="0 0 31 32" fill="none">
  <g clip-path="url(#clip0_584_1365)">
    <path d="M30.5118 14.7894C30.5118 12.7959 29.5558 10.9244 27.9691 9.73059V9.70389C27.9691 7.29211 26.282 5.26809 24.0253 4.7481C23.5053 2.4927 21.48 0.804321 19.0695 0.804321C17.5515 0.804321 16.1873 1.47306 15.2554 2.52957C14.3235 1.47179 12.9593 0.804321 11.4413 0.804321C9.03082 0.804321 7.00553 2.49143 6.48554 4.7481C4.23013 5.26809 2.54176 7.29211 2.54176 9.70389V9.73059C0.955092 10.9244 -0.000976562 12.7946 -0.000976562 14.7894C-0.000976562 15.9158 0.297795 16.9977 0.871182 17.9678C0.299066 18.9378 -0.000976562 20.0198 -0.000976562 21.1462C-0.000976562 23.2897 1.08986 25.2705 2.88121 26.4427C3.79533 29.3389 6.4563 31.3171 9.53428 31.3171C11.8965 31.3171 13.9892 30.1399 15.2554 28.3396C16.5217 30.1386 18.6144 31.3171 20.9766 31.3171C24.0558 31.3171 26.7168 29.3389 27.6297 26.4427C29.4197 25.2705 30.5118 23.2897 30.5118 21.1462C30.5118 20.0198 30.2131 18.9378 29.6397 17.9678C30.2118 16.9977 30.5118 15.9158 30.5118 14.7894ZM9.53428 28.7744C7.45687 28.7744 5.67822 27.3568 5.21036 25.3265C5.12772 24.9692 4.89506 24.6653 4.57213 24.4924C3.31984 23.8212 2.54176 22.5396 2.54176 21.1475C2.54176 20.2893 2.83926 19.4667 3.40502 18.7675C3.78134 18.3009 3.78134 17.636 3.40502 17.1694C2.84053 16.4714 2.54176 15.6488 2.54176 14.7894C2.54176 13.429 3.29314 12.1614 4.50348 11.48C4.97388 11.2156 5.22562 10.6828 5.13153 10.1514C5.10611 10.0052 5.08449 9.85773 5.08449 9.70389C5.08449 8.30158 6.22491 7.16116 7.62723 7.16116C8.33029 7.16116 8.8986 6.59159 8.8986 5.88979C8.8986 4.48747 10.039 3.34706 11.4413 3.34706C12.8436 3.34706 13.9841 4.48747 13.9841 5.88979V10.9753H11.1006C10.6607 10.215 9.83941 9.70389 8.8986 9.70389C7.49374 9.70389 6.35586 10.8418 6.35586 12.2466C6.35586 13.6515 7.49374 14.7894 8.8986 14.7894C9.83941 14.7894 10.6607 14.2783 11.1006 13.518H13.9841V19.8748H11.1006C10.6607 19.1146 9.83941 18.6035 8.8986 18.6035C7.49374 18.6035 6.35586 19.7413 6.35586 21.1462C6.35586 22.5511 7.49374 23.6889 8.8986 23.6889C9.83941 23.6889 10.6607 23.1778 11.1006 22.4176H13.9841V24.3246C13.9841 26.7784 11.988 28.7744 9.53428 28.7744ZM27.1059 18.7662C27.6703 19.4642 27.9691 20.2868 27.9691 21.1462C27.9691 22.5396 27.1923 23.8212 25.9387 24.4912C25.6158 24.6641 25.3831 24.9679 25.3005 25.3252C24.8326 27.3556 23.0527 28.7731 20.9766 28.7731C18.5228 28.7731 16.5268 26.7771 16.5268 24.3234V18.6022H19.0695C21.1724 18.6022 22.8836 16.8909 22.8836 14.7881V14.4474C23.6439 14.0075 24.155 13.1862 24.155 12.2454C24.155 10.8405 23.0171 9.70262 21.6123 9.70262C20.2074 9.70262 19.0695 10.8405 19.0695 12.2454C19.0695 13.1862 19.5806 14.0075 20.3409 14.4474V14.7881C20.3409 15.4886 19.7713 16.0595 19.0695 16.0595H16.5268V5.88979C16.5268 4.48747 17.6672 3.34706 19.0695 3.34706C20.4719 3.34706 21.6123 4.48747 21.6123 5.88979C21.6123 6.59159 22.1806 7.16116 22.8836 7.16116C24.286 7.16116 25.4264 8.30158 25.4264 9.70389C25.4264 9.85773 25.4035 10.0052 25.3793 10.1514C25.2853 10.6828 25.537 11.2156 26.0074 11.48C27.2177 12.1602 27.9691 13.429 27.9691 14.7894C27.9691 15.6475 27.6716 16.4701 27.1059 17.1694C26.7295 17.636 26.7295 18.2996 27.1059 18.7662Z" fill="#39B1BE"/>
  </g>
  <defs>
    <clipPath id="clip0_584_1365">
      <rect width="30.5128" height="30.5128" fill="white" transform="translate(-0.000976562 0.804321)"/>
    </clipPath>
  </defs>
</svg>
    ),
    title: "AI Strategy & Roadmapping",
    description:
      "Comprehensive assessment and strategic planning to identify the highest-impact AI opportunities for your business.",
    points: [
      "Current State Analysis",
      "ROI Modeling",
      "Implementation Timeline",
      "Risk Assessment",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 31 31" fill="none">
  <path d="M16.214 2.56287H15.664C15.0009 2.56287 14.365 2.82626 13.8962 3.2951C13.4274 3.76394 13.164 4.39982 13.164 5.06287V5.28787C13.1635 5.72627 13.0478 6.15685 12.8284 6.53641C12.609 6.91597 12.2936 7.23116 11.914 7.45037L11.3765 7.76287C10.9964 7.98229 10.5653 8.0978 10.1265 8.0978C9.68763 8.0978 9.25652 7.98229 8.87647 7.76287L8.68897 7.66287C8.1153 7.33194 7.43376 7.24217 6.79397 7.41325C6.15418 7.58433 5.60841 8.00229 5.27647 8.57537L5.00147 9.05037C4.67055 9.62403 4.58077 10.3056 4.75185 10.9454C4.92293 11.5852 5.34089 12.1309 5.91397 12.4629L6.10147 12.5879C6.47931 12.806 6.79349 13.1192 7.01278 13.4964C7.23207 13.8736 7.34883 14.3016 7.35147 14.7379V15.3754C7.35322 15.8159 7.23853 16.2491 7.01902 16.631C6.79951 17.0129 6.48298 17.3301 6.10147 17.5504L5.91397 17.6629C5.34089 17.9948 4.92293 18.5406 4.75185 19.1804C4.58077 19.8202 4.67055 20.5017 5.00147 21.0754L5.27647 21.5504C5.60841 22.1234 6.15418 22.5414 6.79397 22.7125C7.43376 22.8836 8.1153 22.7938 8.68897 22.4629L8.87647 22.3629C9.25652 22.1434 9.68763 22.0279 10.1265 22.0279C10.5653 22.0279 10.9964 22.1434 11.3765 22.3629L11.914 22.6754C12.2936 22.8946 12.609 23.2098 12.8284 23.5893C13.0478 23.9689 13.1635 24.3995 13.164 24.8379V25.0629C13.164 25.7259 13.4274 26.3618 13.8962 26.8306C14.365 27.2995 15.0009 27.5629 15.664 27.5629H16.214C16.877 27.5629 17.5129 27.2995 17.9817 26.8306C18.4506 26.3618 18.714 25.7259 18.714 25.0629V24.8379C18.7144 24.3995 18.8301 23.9689 19.0495 23.5893C19.2689 23.2098 19.5843 22.8946 19.964 22.6754L20.5015 22.3629C20.8815 22.1434 21.3126 22.0279 21.7515 22.0279C22.1903 22.0279 22.6214 22.1434 23.0015 22.3629L23.189 22.4629C23.7626 22.7938 24.4442 22.8836 25.084 22.7125C25.7238 22.5414 26.2695 22.1234 26.6015 21.5504L26.8765 21.0629C27.2074 20.4892 27.2972 19.8077 27.1261 19.1679C26.955 18.5281 26.537 17.9823 25.964 17.6504L25.7765 17.5504C25.395 17.3301 25.0784 17.0129 24.8589 16.631C24.6394 16.2491 24.5247 15.8159 24.5265 15.3754V14.7504C24.5247 14.3098 24.6394 13.8767 24.8589 13.4947C25.0784 13.1128 25.395 12.7956 25.7765 12.5754L25.964 12.4629C26.537 12.1309 26.955 11.5852 27.1261 10.9454C27.2972 10.3056 27.2074 9.62403 26.8765 9.05037L26.6015 8.57537C26.2695 8.00229 25.7238 7.58433 25.084 7.41325C24.4442 7.24217 23.7626 7.33194 23.189 7.66287L23.0015 7.76287C22.6214 7.98229 22.1903 8.0978 21.7515 8.0978C21.3126 8.0978 20.8815 7.98229 20.5015 7.76287L19.964 7.45037C19.5843 7.23116 19.2689 6.91597 19.0495 6.53641C18.8301 6.15685 18.7144 5.72627 18.714 5.28787V5.06287C18.714 4.39982 18.4506 3.76394 17.9817 3.2951C17.5129 2.82626 16.877 2.56287 16.214 2.56287Z" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M15.9404 18.8112C18.0115 18.8112 19.6904 17.1322 19.6904 15.0612C19.6904 12.9901 18.0115 11.3112 15.9404 11.3112C13.8694 11.3112 12.1904 12.9901 12.1904 15.0612C12.1904 17.1322 13.8694 18.8112 15.9404 18.8112Z" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    title: "Automation Buildout",
    description:
      "End-to-end development and deployment of custom automation solutions that integrate seamlessly with your existing systems.",
    points: [
      "Process Automation",
      "API Integration",
      "Workflow Optimization",
      "System Architecture",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 31 31" fill="none">
  <path d="M15.625 10.0605V5.06055H10.625" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M23.1279 10.063H8.12793C6.74722 10.063 5.62793 11.1823 5.62793 12.563V22.563C5.62793 23.9437 6.74722 25.063 8.12793 25.063H23.1279C24.5086 25.063 25.6279 23.9437 25.6279 22.563V12.563C25.6279 11.1823 24.5086 10.063 23.1279 10.063Z" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M3.12598 17.5607H5.62598" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M25.6279 17.5607H28.1279" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M19.376 16.3125V18.8125" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.877 16.3125V18.8125" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    title: "LLM Agent Implementation",
    description:
      "Intelligent AI agents and chatbots designed to enhance customer experience and internal operations.",
    points: [
      "Custom LLM Training",
      "Multi-Modal Agents",
      "Conversation Design",
      "Performance Analytics",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 31 31" fill="none">
  <path d="M24.0039 14.6176H6.50391C5.12319 14.6176 4.00391 15.7368 4.00391 17.1176V25.8676C4.00391 27.2483 5.12319 28.3676 6.50391 28.3676H24.0039C25.3846 28.3676 26.5039 27.2483 26.5039 25.8676V17.1176C26.5039 15.7368 25.3846 14.6176 24.0039 14.6176Z" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.00879 14.618V9.61804C9.00879 7.96044 9.66727 6.37073 10.8394 5.19862C12.0115 4.02652 13.6012 3.36804 15.2588 3.36804C16.9164 3.36804 18.5061 4.02652 19.6782 5.19862C20.8503 6.37073 21.5088 7.96044 21.5088 9.61804V14.618" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    title: "Secure AI Deployments",
    description:
      "Enterprise-grade AI implementations with built-in security, compliance, and governance frameworks.",
    points: [
      "Data Encryption",
      "Access Controls",
      "Audit Trails",
      "Compliance Frameworks",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 31 31" fill="none">
  <path d="M25.9375 17.1183C25.9375 23.3683 21.5625 26.4933 16.3625 28.3058C16.0902 28.3981 15.7944 28.3937 15.525 28.2933C10.3125 26.4933 5.9375 23.3683 5.9375 17.1183V8.3683C5.9375 8.03678 6.0692 7.71884 6.30362 7.48442C6.53804 7.25 6.85598 7.1183 7.1875 7.1183C9.6875 7.1183 12.8125 5.6183 14.9875 3.7183C15.2523 3.49205 15.5892 3.36774 15.9375 3.36774C16.2858 3.36774 16.6227 3.49205 16.8875 3.7183C19.075 5.6308 22.1875 7.1183 24.6875 7.1183C25.019 7.1183 25.337 7.25 25.5714 7.48442C25.8058 7.71884 25.9375 8.03678 25.9375 8.3683V17.1183Z" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    title: "Cybersecurity for AI Systems",
    description:
      "Specialized security protocols and monitoring systems designed specifically for AI infrastructure protection.",
    points: [
      "Threat Detection",
      "Model Security",
      "Data Protection",
      "Incident Response",
    ],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 31 31" fill="none">
  <path d="M27.4024 14.5217C27.6262 14.4229 27.8161 14.2607 27.9486 14.0552C28.0811 13.8496 28.1504 13.6096 28.1478 13.3651C28.1453 13.1205 28.0711 12.8821 27.9344 12.6793C27.7977 12.4765 27.6044 12.3182 27.3787 12.2242L16.6649 7.34416C16.3392 7.1956 15.9854 7.11871 15.6274 7.11871C15.2694 7.11871 14.9156 7.1956 14.5899 7.34416L3.87743 12.2192C3.65489 12.3166 3.46558 12.4768 3.33264 12.6802C3.1997 12.8835 3.12891 13.1212 3.12891 13.3642C3.12891 13.6071 3.1997 13.8448 3.33264 14.0481C3.46558 14.2515 3.65489 14.4117 3.87743 14.5092L14.5899 19.3942C14.9156 19.5427 15.2694 19.6196 15.6274 19.6196C15.9854 19.6196 16.3392 19.5427 16.6649 19.3942L27.4024 14.5217Z" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M28.127 13.3657V20.8657" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.12598 16.4916V20.8666C8.12598 21.8612 8.91615 22.815 10.3227 23.5183C11.7292 24.2215 13.6369 24.6166 15.626 24.6166C17.6151 24.6166 19.5228 24.2215 20.9293 23.5183C22.3358 22.815 23.126 21.8612 23.126 20.8666V16.4916" stroke="#39B1BE" stroke-width="1.98923" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    ),
    title: "Training & Team Support",
    description:
      "Comprehensive training programs and ongoing support to ensure your team can effectively use and maintain AI systems.",
    points: [
      "Team Training",
      "Documentation",
      "Support Portal",
      "Best Practices",
    ],
  },
];

const Ourservices = () => {
  return (
    <div className="Ourservices py-[25px] sm:py-[35px] lg:py-20 px-6 md:px-16">
      <div className="text-center mb-2 sm:mb-12">
        <h1 className="font-bold text-gray-900 
        text-[23px] sm:text-[30px] md:text-[42px] lg:text-[54px]">
          OUR <span className="text-primary">SERVICES</span>
        </h1>
        <p className="mt-1 sm:mt-4 text-gray-600 max-w-2xl mx-auto">
          From initial strategy to full deployment, we provide comprehensive AI and automation
          solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#E7F8FA] p-3 rounded-full">{service.icon}</div>
              <h3 className="font-semibold text-gray-900 text-lg">{service.title}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <ul className="text-gray-700 text-sm space-y-2">
              {service.points.map((point, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-primary text-lg">•</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
        <div className=" whitespace-nowrap flex flex-col xs:flex-row 
        gap-[18px] items-center justify-center mt-[36px]">
        <Primarybutton text="Discuss Your Project" onClick={scrollToTop} />
        <Primarybutton text="View Case Studies" onClick={scrollToTop} />

      </div>
    </div>
  );
};

export default Ourservices;
