"use client";
import { Icon } from "@iconify/react";

const Contact = () => {
  return (
    <section className=" flex justify-center items-center min-h-screen mb-[77px]">
      <div className="bg-[#007A78] text-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h2 className="text-center text-[23px] font-bold leading-normal mb-6">
          Start Your AI Journey Today
        </h2>

        <form className="space-y-4">
          {/* First & Last Name */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-[15px] font-normal leading-normal">First Name *</label>
              <div className="relative mt-1">
                <Icon
                  icon="mdi:account"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
                />
                <input
                  type="text"
                  placeholder="Enter"
                  className="w-full bg-[#00000026] placeholder-gray-300 rounded-full pl-10 pr-3 py-2 focus:outline-none text-sm"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="text-[15px] font-normal leading-normal">Last Name *</label>
              <div className="relative mt-1">
                <Icon
                  icon="mdi:account"
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
                />
                <input
                  type="text"
                  placeholder="Enter"
                  className="w-full bg-[#00000026] placeholder-gray-300 rounded-full pl-10 pr-3 py-2 focus:outline-none text-sm"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-[15px] font-normal leading-normal">Email Address *</label>
            <div className="relative mt-1">
              <Icon
                icon="mdi:email-outline"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-[#00000026] placeholder-gray-300 rounded-full pl-10 pr-3 py-2 focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Business Type */}
          <div>
            <label className="text-[15px] font-normal leading-normal">Business Type *</label>
            <div className="relative mt-1">
              <Icon
                icon="mdi:briefcase-outline"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"
              />
              <select className="w-full appearance-none bg-[#00000026] text-white placeholder-gray-300 rounded-full pl-10 pr-8 py-2 focus:outline-none text-sm">
                <option>Select Your Business Type</option>
                <option>Technology</option>
                <option>Healthcare</option>
                <option>Education</option>
                <option>Finance</option>
              </select>
              <Icon
                icon="mdi:chevron-down"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 text-lg"
              />
            </div>
          </div>

          {/* Biggest Pain Point */}
          <div>
            <label className="text-[15px] font-normal leading-normal">
              Biggest Pain Point Right Now (Optional)
            </label>
            <div className="relative mt-1">
              <textarea
                rows="3"
                placeholder="Tell Us About Your Biggest Automation Challenge..."
                className="w-full bg-[#00000026] placeholder-gray-300 rounded-xl p-3 focus:outline-none text-sm resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#56C9C5] text-white font-medium py-2 rounded-[11px] hover:bg-[#46b3ae] transition"
          >
            Send Your Information
          </button>

          <p className="text-center font-normal leading-normal text-[15px] mt-3 text-gray-200">
            We Respect Your Privacy. Your Information Will Never Be Shared.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Contact;
