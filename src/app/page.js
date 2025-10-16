import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Home/Hero";
import Whywork from "./Components/Home/Whywork";
import Ourservices from "./Components/Home/Ourservices";
import Imagewithtext from "./Components/Home/Imagewithtext";
import Steps from "./Components/Home/Steps";
import Readytostart from "./Components/Home/Readytostart";
import Builtwithsecurity from "./Components/Home/Builtwithsecurity";
import Securitystandards from "./Components/Home/Securitystandards";
import Footer from "./Components/Footer";
import Readytoautomate from "./Components/Home/Readytoautomate";
import Contact from "./Components/Home/Contact";

export default function Home() {
  return (
    <>
    <div className="container mx-auto">
     <Navbar />
        <Hero />
        <Whywork />
        <Ourservices />
        <Imagewithtext />
        <Steps />
        <Readytostart />
        <Builtwithsecurity />
        <Securitystandards />
        <Readytoautomate />
        <Contact />
    </div>
        <Footer />


    </>
  );
}
