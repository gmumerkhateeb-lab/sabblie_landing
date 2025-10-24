"use client";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  // Smooth scroll 
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <footer className="bg-[#0B0B0B] text-[#E3E3E3] py-6 md:py-12 px-6 md:px-16 border-t border-[#222]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Left Section */}
        <div>
          <div className="flex items-center mb-4">
            <Image src="/icons/Logo.png" alt="Logo" width={48} height={48} />
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
            <li><Link href="#strategy">AI Strategy & Roadmapping</Link></li>
            <li><Link href="#automation">Automation Buildout</Link></li>
            <li><Link href="#llm">LLM Agent Implementation</Link></li>
            <li><Link href="#secure">Secure AI Deployments</Link></li>
            <li><Link href="#cybersecurity">Cybersecurity for AI</Link></li>
            <li><Link href="#training">Training & Support</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-[#B3B3B3]">
            <li><Link href="#case-studies">Case Studies</Link></li>
            <li><Link href="#assessment">AI Readiness Assessment</Link></li>
            <li><Link href="#frameworks">Security Frameworks</Link></li>
            <li><Link href="#guide">Implementation Guide</Link></li>
            <li><Link href="#roi">ROI Calculator</Link></li>
            <li><Link href="#blog">Blog & Insights</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-3 text-sm text-[#B3B3B3]">
            <li className="flex items-center gap-2">
              <Icon icon="mdi:email-outline" width="16" height="16" />
              <Link href="mailto:Sara@saitible.com">Sara@saitible.com</Link>
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="mdi:phone-outline" width="16" height="16" />
              <Link href="tel:2142280773">214-228-0773</Link>
            </li>
            <li className="flex items-center gap-2">
              <Icon icon="mdi:map-marker-outline" width="16" height="16" />
              Remote & On-site Available
            </li>
          </ul>

          <div className="border-t border-[#222] mt-5 pt-5">
            <p className="text-sm text-white mb-2">AI Insights Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="bg-[#252C41] text-white text-sm px-3 py-2 rounded-l-[9px] focus:outline-none w-full"
              />
              <button className="bg-[#0E315B] text-white text-sm px-4 py-2 rounded-r-[9px] hover:bg-[#2B5DDA] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#222] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-[#888]">
        <div className="flex flex-col gap-[12px]">
            <p>© 2025 AI + Automation Consulting. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-3 mt-2 md:mt-0">
            <Link href="#privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-white">Terms of Service</Link>
            <Link href="#cookie" className="hover:text-white">Cookie Policy</Link>
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
