"use client";
import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-[#E3E3E3] py-12 px-6 md:px-16 border-t border-[#222]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center mb-4">
            <Image
              src="/icons/Logo.png" 
              alt="Logo"
              width={48}
              height={48}
            />
          </div>

          <p className="text-sm leading-relaxed text-[#B3B3B3] max-w-[260px] mb-4">
            Secure AI solutions for high-growth businesses. 30+ years of
            expertise in automation, cybersecurity, and strategic
            implementation.
          </p>

          <div className="flex gap-2 flex-wrap">
            <span className="border border-[#444] text-xs px-3 py-1 rounded">
              SOC2
            </span>
            <span className="border border-[#444] text-xs px-3 py-1 rounded">
              GDPR
            </span>
            <span className="border border-[#444] text-xs px-3 py-1 rounded">
              HIPAA
            </span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-white mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-[#B3B3B3]">
            <li>AI Strategy & Roadmapping</li>
            <li>Automation Buildout</li>
            <li>LLM Agent Implementation</li>
            <li>Secure AI Deployments</li>
            <li>Cybersecurity for AI</li>
            <li>Training & Support</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-[#B3B3B3]">
            <li>Case Studies</li>
            <li>AI Readiness Assessment</li>
            <li>Security Frameworks</li>
            <li>Implementation Guide</li>
            <li>ROI Calculator</li>
            <li>Blog & Insights</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-[#B3B3B3]">
            <li className="flex items-center gap-2">
              <Icon icon="mdi:email-outline" width="16" height="16" />
              Sara@saitible.com
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="mdi:phone-outline" width="16" height="16" />
              214-228-0773
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="mdi:map-marker-outline" width="16" height="16" />
              Remote & On-site Available
            </li>
          </ul>

          <div className="border-t border-[#222] mt-5 pt-5">
            <p className="text-sm text-white mb-2">AI Insights Newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#1C1C1C] text-white text-sm px-3 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button className="bg-[#1E48B4] text-white text-sm px-4 py-2 rounded-r-md hover:bg-[#2B5DDA] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#222] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#888]">

        <div className="flex flex-row ">
        <div className="flex flex-wrap items-center gap-3 mt-2 md:mt-0
        ">
         <p>© 2024 AI + Automation Consulting. All rights reserved.</p>
       
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Cookie Policy
          </a>
        </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="flex justify-end mt-3 text-xs text-[#6FCF97]">
        <Icon icon="mdi:lock-outline" className="mr-1" />
        Encrypted • Secure • Compliant
      </div>
    </footer>
  );
};

export default Footer;
