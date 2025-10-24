import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Home/Hero";
import Whywork from "./Components/Home/Whywork";
import Ourservices from "./Components/Home/Ourservices";
import Imagewithtext from "./Components/Home/Imagewithtext";
import OurProcess from "./Components/Home/Ourprocess";
import Readytostart from "./Components/Home/Readytostart";
import Builtwithsecurity from "./Components/Home/Builtwithsecurity";
import Securitystandards from "./Components/Home/Securitystandards";
import Footer from "./Components/Footer";
import Readytoautomate from "./Components/Home/Readytoautomate";
import Contact from "./Components/Home/Contact";

export default function Home() {
  return (
    <>
    <div className="">
      <div>
       <Navbar />
        <Hero />
      </div>
   
       <div className="container mx-auto">
       <div className="absolute hidden lg:block left-0 mt-[130px] h-[715px] max-w-[450px] rounded-[715px] bg-[#0E315B] opacity-[0.15] blur-[62.9px] z-[-12]"></div>

<div className="absolute hidden lg:block right-0 mt-[400px] h-[917px] max-w-[575px] rounded-[715px] bg-[#3C7CC9] opacity-[0.32] blur-[62.9px] z-[-12]"></div>

        <Whywork />
        <Ourservices />
        <div className="absolute right-0 mt-[100px] h-[473px] z-[-12px] max-w-[325px] rounded-[715px] bg-[#0E315B] opacity-[0.14] blur-[62.9px]"></div>
        <div className="absolute left-0 mt-[120px] h-[547px] z-[-12px] max-w-[351px] rounded-[715px] bg-[#3C7CC9] opacity-[0.14] blur-[62.9px]"></div>
        <Imagewithtext />
        <OurProcess />
        <Readytostart />
        <div className="absolute left-0 mt-[-70px] h-[715px] z-[-12px] max-w-[449px] rounded-[715px] bg-[#0E315B] opacity-[0.22] blur-[62.9px]"></div>
        <div className="absolute right-0 mt-[150px] h-[917px] z-[-12px] max-w-[586px] rounded-[715px] bg-[#3C7CC9] opacity-[0.22] blur-[62.9px]"></div>

        <Builtwithsecurity />
        <Securitystandards />
        <Readytoautomate />
        <Contact />
        </div>
    </div>
        <Footer />

    </>
  );
}
