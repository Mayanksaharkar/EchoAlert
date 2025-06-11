import React from "react";
import Features from "./Features";
import Pricing from "./Pricing";
export default function LandingPage() {
  return (
    <div
      className="min-h-screen  bg-transparent  relative overflow-hidden z-40"
      id="home"
    >
      <div className="absolute inset-0  " id="home">
        <div className="absolute top-10 left-20 w-2 h-2 bg-white rounded-full opacity-80" />
        <div className="absolute top-40 left-1/2 w-1.5 h-1.5 bg-white rounded-full opacity-60" />
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-70" />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full opacity-80" />
      </div>

      <div className="flex flex-col lg:pb-16 pb-0 w-full md:flex-row items-center justify-center h-[calc(100vh-80px)] px-8 z-10 relative">
        <div className="flex-1 max-w-1/2  text-white space-y-6">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            <span className="text-4xl">
              <span className="bg-[#a35db8] text-white px-3 rounded-xl font-bold">
                EchoAlert
              </span>{" "}
              Never Miss an Update. Ever.
            </span>
            <br />
            <span className="text-2xl text-white/80">
              Real-time social media alerts for your Discord community.
            </span>
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-2 rounded-lg bg-[#a35db8] text-white font-semibold shadow hover:bg-[#8a47a3] transition">
              Invite <span aria-hidden="true">↗</span>
            </button>
            <button className="px-6 py-2 rounded-lg bg-transparent border border-white text-white font-semibold hover:bg-white hover:text-[#a35db8] transition">
              Support <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col max-w-1/2 md:flex-row items-center justify-center mt-10 md:mt-0 md:ml-10 space-x-0 md:space-x-6 space-y-6 md:space-y-0">
          <div className="w-72 h-56 bg-white bg-opacity-90 rounded-2xl shadow-lg flex items-center justify-center">
            <img
              src="/images/ai-chat-illustration.svg"
              alt="AI Chat Illustration"
              className="w-1/2 h-44 object-contain"
            />
          </div>

          <div className="w-1/2 h-44 bg-[#8a47a3] rounded-2xl shadow-lg flex items-center justify-center -mt-16 md:-mt-32 md:-ml-12 border-4 border-white">
            <img
              src="/images/vr-robot-illustration.svg"
              alt="VR Robot Illustration"
              className="w-36 h-28 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 ">
        <svg width="200" height="200" className="opacity-40">
          <polygon
            points="10,10 190,10 100,190"
            fill="none"
            stroke="#5b4bc6"
            strokeWidth="2"
          />
        </svg>
      </div>

      <Features />
      <Pricing/>
    </div>
  );
}
