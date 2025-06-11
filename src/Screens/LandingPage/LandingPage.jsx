import React from "react";
import Features from "./Features";
import Pricing from "./Pricing";
import Home from "./Home";
import Svg from "./Svg";
export default function LandingPage() {
  return (
    <div
      id="home"
      className="min-h-screen  bg-transparent  relative overflow-hidden z-40"
    >
      
      
      <Svg/>

      <Home />
      <Features />
      <Pricing />
    </div>
  );
}
