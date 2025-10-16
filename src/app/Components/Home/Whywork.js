// components/Whywork.jsx
import React from "react";

/* --- Icons (converted to JSX - stroke attrs camelCase) --- */
const Icon1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 31 31" fill="none" aria-hidden>
    <path
      d="M5.21715 17.7376C4.98061 17.7384 4.74869 17.6721 4.54835 17.5464C4.348 17.4206 4.18745 17.2406 4.08534 17.0272C3.98324 16.8138 3.94377 16.5759 3.97153 16.341C3.99929 16.106 4.09313 15.8838 4.24215 15.7001L16.6172 2.95013C16.71 2.84298 16.8365 2.77058 16.9759 2.7448C17.1153 2.71902 17.2593 2.7414 17.3843 2.80826C17.5093 2.87512 17.6079 2.9825 17.6638 3.11277C17.7198 3.24303 17.7298 3.38844 17.6922 3.52513L15.2922 11.0501C15.2214 11.2395 15.1976 11.4433 15.2229 11.6439C15.2482 11.8445 15.3217 12.036 15.4373 12.2019C15.5528 12.3678 15.7069 12.5033 15.8862 12.5966C16.0656 12.6899 16.265 12.7383 16.4672 12.7376H25.2172C25.4537 12.7368 25.6856 12.8032 25.886 12.9289C26.0863 13.0547 26.2469 13.2347 26.349 13.4481C26.4511 13.6614 26.4905 13.8994 26.4628 14.1343C26.435 14.3692 26.3412 14.5914 26.1922 14.7751L13.8172 27.5251C13.7243 27.6323 13.5978 27.7047 13.4584 27.7305C13.319 27.7562 13.175 27.7339 13.05 27.667C12.925 27.6001 12.8264 27.4928 12.7705 27.3625C12.7145 27.2322 12.7046 27.0868 12.7422 26.9501L15.1422 19.4251C15.2129 19.2357 15.2367 19.032 15.2114 18.8314C15.1861 18.6308 15.1126 18.4393 14.997 18.2733C14.8815 18.1074 14.7274 17.972 14.5481 17.8787C14.3687 17.7854 14.1693 17.737 13.9672 17.7376H5.21715Z"
      stroke="#39B1BE"
      strokeWidth="2.65231"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Icon2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 31 31" fill="none" aria-hidden>
    <path d="M19.7966 16.3502L21.6904 27.0077C21.7116 27.1332 21.694 27.2622 21.6399 27.3774C21.5858 27.4926 21.4979 27.5886 21.3878 27.6525C21.2777 27.7163 21.1507 27.7451 21.0239 27.7349C20.897 27.7246 20.7763 27.6759 20.6779 27.5952L16.2029 24.2365C15.9868 24.0751 15.7244 23.9879 15.4547 23.9879C15.1851 23.9879 14.9227 24.0751 14.7066 24.2365L10.2241 27.594C10.1258 27.6745 10.0052 27.7232 9.87849 27.7334C9.75178 27.7436 9.62496 27.715 9.51495 27.6513C9.40494 27.5876 9.31697 27.4919 9.26277 27.3769C9.20857 27.2619 9.19073 27.1331 9.21162 27.0077L11.1041 16.3502" stroke="#39B1BE" strokeWidth="2.65231" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.4512 17.7362C19.5933 17.7362 22.9512 14.3783 22.9512 10.2362C22.9512 6.09407 19.5933 2.73621 15.4512 2.73621C11.309 2.73621 7.95117 6.09407 7.95117 10.2362C7.95117 14.3783 11.309 17.7362 15.4512 17.7362Z" stroke="#39B1BE" strokeWidth="2.65231" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Icon3 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 31 31" fill="none" aria-hidden>
    <path d="M25.6836 16.4868C25.6836 22.7368 21.3086 25.8618 16.1086 27.6743C15.8363 27.7665 15.5405 27.7621 15.2711 27.6618C10.0586 25.8618 5.68359 22.7368 5.68359 16.4868V7.73677C5.68359 7.40525 5.81529 7.08731 6.04971 6.85288C6.28413 6.61846 6.60207 6.48677 6.93359 6.48677C9.43359 6.48677 12.5586 4.98677 14.7336 3.08677C14.9984 2.86052 15.3353 2.73621 15.6836 2.73621C16.0319 2.73621 16.3688 2.86052 16.6336 3.08677C18.8211 4.99927 21.9336 6.48677 24.4336 6.48677C24.7651 6.48677 25.0831 6.61846 25.3175 6.85288C25.5519 7.08731 25.6836 7.40525 25.6836 7.73677V16.4868Z" stroke="#39B1BE" strokeWidth="2.65231" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Icon4 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={31} height={31} viewBox="0 0 31 31" fill="none" aria-hidden>
    <path d="M27.1689 20.2366H22.1689C21.4786 20.2366 20.9189 20.7962 20.9189 21.4866V26.4866C20.9189 27.1769 21.4786 27.7366 22.1689 27.7366H27.1689C27.8593 27.7366 28.4189 27.1769 28.4189 26.4866V21.4866C28.4189 20.7962 27.8593 20.2366 27.1689 20.2366Z" stroke="#39B1BE" strokeWidth="2.65231" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.66895 20.2365H4.66895C3.97859 20.2365 3.41895 20.7961 3.41895 21.4865V26.4865C3.41895 27.1768 3.97859 27.7365 4.66895 27.7365H9.66895C10.3593 27.7365 10.9189 27.1768 10.9189 26.4865V21.4865C10.9189 20.7961 10.3593 20.2365 9.66895 20.2365Z" stroke="#39B1BE" strokeWidth="2.65231" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.4189 2.73621H13.4189C12.7286 2.73621 12.1689 3.29585 12.1689 3.98621V8.98621C12.1689 9.67656 12.7286 10.2362 13.4189 10.2362H18.4189C19.1093 10.2362 19.6689 9.67656 19.6689 8.98621V3.98621C19.6689 3.29585 19.1093 2.73621 18.4189 2.73621Z" stroke="#39B1BE" strokeWidth="2.65231" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7.1709 20.2373V16.4873C7.1709 16.1558 7.30259 15.8378 7.53702 15.6034C7.77144 15.369 8.08938 15.2373 8.4209 15.2373H23.4209C23.7524 15.2373 24.0704 15.369 24.3048 15.6034C24.5392 15.8378 24.6709 16.1558 24.6709 16.4873V20.2373" stroke="#39B1BE" strokeWidth="2.65231" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.9189 15.2372V10.2372" stroke="#39B1BE" strokeWidth="2.65231" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* --- cards data --- */
const cards = [
  {
    id: 1,
    title: "Tailored AI Systems",
    desc: "Custom automation solutions designed specifically for your business processes and growth goals.",
    Icon: Icon1,
  },
  {
    id: 2,
    title: "Proven Results",
    desc: "Track record of delivering measurable ROI through strategic AI implementation and process optimization.",
    Icon: Icon2,
  },
  {
    id: 3,
    title: "Cybersecurity-First Mindset",
    desc: "Every AI system built with enterprise-grade security, compliance, and data protection at its core.",
    Icon: Icon3,
  },
  {
    id: 4,
    title: "30+ Years Experience",
    desc: "Deep expertise in IT, cybersecurity, and business automation across diverse industries and scales.",
    Icon: Icon4,
  },
];

/* --- Card component --- */
const Card = ({ id, title, desc, Icon }) => (
  <article
    key={id}
    className="max-w-[294px] h-[328px] rounded-[13px] bg-primary22 overflow-hidden"
    style={{
      boxShadow: "0 5.256px 86.726px 0 rgba(72, 104, 200, 0.25)",
    }}
    aria-labelledby={`card-${id}`}
  >
    <div className="max-w-[246px] px-[24px] pt-[24px]">
      <div className="w-[58px] p-4 bg-[#39B1BE1A] rounded-lg inline-block">
        <Icon />
      </div>

      <h2
        id={`card-${id}`}
        className="text-[19px] leading-[27px] font-bold pt-[24px]"
        style={{ color: "var(--text-primary2)" }}
      >
        {title}
      </h2>

      <p
        className="text-[15px] font-normal pt-[11px] pb-[72px]"
        style={{ color: "var(--text-primary2)" }}
      >
        {desc}
      </p>
    </div>
  </article>
);

/* --- Whywork main component --- */
export default function Whywork() {
  return (
    <section>
      <div className="Whywork  mt-[152px] flex flex-col justify-center items-center">
        <h1 className="flex justify-center gap-2 mx-auto items-center text-[48px] text-primary leading-[47px] font-bold">
          WHY WORK{" "}
          <span className="text-[48px] leading-[47px] font-bold" style={{ color: "var(--text-primary2)" }}>
            WITH US
          </span>
        </h1>

        <p className="text-[18px] leading-[27px] font-normal mx-auto text-center max-w-[760px] mt-4" style={{ color: "var(--text-primary2)" }}>
          We combine deep technical expertise with strategic business insight to deliver AI solutions that actually move the needle.
        </p>
      </div>

      <div className="pt-[50px] flex flex-wrap gap-[31px] items-start justify-center px-4">
        {cards.map((c) => (
          <Card key={c.id} {...c} />
        ))}
      </div>
    </section>
  );
}
