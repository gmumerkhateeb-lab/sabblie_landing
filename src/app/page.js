import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Home/Hero";
import Whywork from "./Components/Home/Whywork";
import Ourservices from "./Components/Home/Ourservices";
import Imagewithtext from "./Components/Home/Imagewithtext";
import Steps from "./Components/Home/Steps";

export default function Home() {
  return (
    <>
    <div className="container mx-auto">
     <Navbar />
    {/* </div>
    <div> */}
        <Hero />
        <Whywork />
        <Ourservices />
        <Imagewithtext />
        <Steps />
    </div>

    </>
  );
}
