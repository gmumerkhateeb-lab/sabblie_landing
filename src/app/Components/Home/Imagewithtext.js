"use client";
import Image from "next/image";
import Primarybutton from "../Primarybutton";

const Imagewithtext = () => {
  return (
    <section className="Imagewithtext  py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
        
        {/* ---------- Left Side Image ---------- */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            {/* Gradient Glow Behind Image */}
            <div className="absolute -top-3 -left-3 w-full h-full
              rounded-2xl blur-md opacity-40"></div>

            <Image
              src="/Images/Girl.png" // replace with your actual image path
              alt="Founder"
              width={500}
              height={500}
              priority
              className="rounded-2xl relative z-10 object-cover"
            />
          </div>
        </div>

        {/* ---------- Right Side Content ---------- */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            MEET THE <span className="text-primary">FOUNDER</span>
          </h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            With{" "}
            <span className="font-semibold text-gray-900">
              30+ years of combined experience
            </span>{" "}
            in IT, cybersecurity, and entrepreneurship, Sara helps growing teams
            automate smart—
            <span className="font-semibold text-gray-900">
              {" "}
              without compromising security.
            </span>
          </p>

          <p className="mt-3 text-gray-600 leading-relaxed">
            Her unique blend of technical depth and business acumen enables
            organizations to implement AI solutions that deliver real results
            while maintaining the highest standards of data protection and
            operational integrity.
          </p>

          {/* ---------- Stats ---------- */}
          <div className="flex gap-10 mt-6">
            <div>
              <h3 className="text-3xl font-bold text-primary">50+</h3>
              <p className="text-gray-600 text-sm">Projects Delivered</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-green-500">15+</h3>
              <p className="text-gray-600 text-sm">Industries Served</p>
            </div>
          </div>

          {/* ---------- Buttons ---------- */}
          <div className="flex flex-row gap-[15px] mt-[12px]">
          <Primarybutton text="Schedule a Consultation" />
          <Primarybutton text="View LinkedIn Profile" />
          </div>

          {/* ---------- Expertise Tags ---------- */}
          <div className="mt-8">
            <p className="text-gray-700 font-medium mb-2">
              Certifications & Expertise:
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "AI/ML Strategy",
                "Cybersecurity",
                "Cloud Architecture",
                "Process Automation",
              ].map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#F3F1FE] text-[#7B6EF6] px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Imagewithtext;
