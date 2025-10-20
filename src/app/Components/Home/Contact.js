"use client";
import { Icon } from "@iconify/react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    businessType: "",
    painPoint: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear error when user types
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    const { firstName, lastName, email, businessType } = formData;

    if (!firstName.trim()) newErrors.firstName = "First name is required";
    if (!lastName.trim()) newErrors.lastName = "Last name is required";
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email))
      newErrors.email = "Please enter a valid Gmail address";
    if (!businessType) newErrors.businessType = "Business type is required";

    setErrors(newErrors);

    // Stop submit if any errors
    if (Object.keys(newErrors).length > 0) return;

    alert("Form submitted successfully!");
  };

  return (
    <section className="flex justify-center items-center min-h-screen mb-[30px] md:mb-[50px] lg:mb-[77px]">
      <div className="bg-[#007A78] text-white rounded-2xl p-8 w-full max-w-md shadow-xl">
        <h2 className="text-center text-[23px] font-bold leading-normal mb-6">
          Start Your AI Journey Today
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-[15px] font-normal leading-normal">
                First Name *
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full bg-[#00000026] placeholder-gray-300 rounded-full pl-4 py-2 focus:outline-none text-sm ${
                    errors.firstName ? "border border-red-400" : ""
                  }`}
                />
              </div>
              {errors.firstName && (
                <p className="text-red-300 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>

            <div className="flex-1">
              <label className="text-[15px] font-normal leading-normal">
                Last Name *
              </label>
              <div className="relative mt-1">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full bg-[#00000026] placeholder-gray-300 rounded-full pl-4 py-2 focus:outline-none text-sm ${
                    errors.lastName ? "border border-red-400" : ""
                  }`}
                />
              </div>
              {errors.lastName && (
                <p className="text-red-300 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-[15px] font-normal leading-normal">
              Email Address *
            </label>
            <div className="relative mt-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-[#00000026] placeholder-gray-300 rounded-full pl-4 py-2 focus:outline-none text-sm ${
                  errors.email ? "border border-red-400" : ""
                }`}
              />
            </div>
            {errors.email && (
              <p className="text-red-300 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Business Type */}
          <div>
            <label className="text-[15px] font-normal leading-normal">
              Business Type *
            </label>
            <div className="relative mt-1">
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className={`w-full appearance-none bg-[#00000026] text-white placeholder-gray-300 rounded-full pl-4 py-2 focus:outline-none text-sm ${
                  errors.businessType ? "border border-red-400" : ""
                }`}
              >
                <option value="">Select Your Business Type</option>
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
            {errors.businessType && (
              <p className="text-red-300 text-xs mt-1">{errors.businessType}</p>
            )}
          </div>

          {/* Biggest Pain Point */}
          <div>
            <label className="text-[15px] font-normal leading-normal">
              Biggest Pain Point Right Now (Optional)
            </label>
            <div className="relative mt-1">
              <textarea
                rows="3"
                name="painPoint"
                placeholder="Tell Us About Your Biggest Automation Challenge..."
                value={formData.painPoint}
                onChange={handleChange}
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
