import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between mx-auto items-center mt-[20px]">
        <div>
            <Image src="/icons/Logo.png" alt="logo" width={42} height={42} />
        </div>
        <div className="">
            <ul className="flex flex-row justify-between items-center gap-[82px]">
                <li>AI & Security Expert Podcast</li>
                <li>AI Readiness Assessment</li>
                <li>About Us</li>
            </ul>
        </div>
        <div>
            <button className="text-white text-[11px] font-normal 
             leading-[15px] rounded-[9px] px-[12px] py-[6px] bg-[#39B1BE]">
                Contact Us
            </button>
        </div>
    </div>
  )
}

export default Navbar