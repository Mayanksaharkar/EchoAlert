import React from "react";
import {
  FaBolt,
  FaBell,
  FaUserShield,
  FaHistory,
  FaSlidersH,
  FaSyncAlt,
  FaTachometerAlt,
  FaGlobe,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const iconStyles = {
  bell: { color: "#3B82F6", fontSize: "1.875rem" }, // blue-500
  sliders: { color: "#22C55E", fontSize: "1.875rem" }, // green-500
  sync: { color: "#8B5CF6", fontSize: "1.875rem" }, // purple-500
  globe: { color: "#EC4899", fontSize: "1.875rem" }, // pink-500
  shield: { color: "#EF4444", fontSize: "1.875rem" }, // red-500
  history: { color: "#FACC15", fontSize: "1.875rem" }, // yellow-400
  tachometer: { color: "#6366F1", fontSize: "1.875rem" }, // indigo-500
};

const features = [
  {
    icon: <FaBell style={iconStyles.bell} />,
    title: "Real-Time Alerts",
    description:
      "Instantly notify your community the moment you post on Twitter (X), YouTube, Instagram, Twitch, Facebook, and more.",
  },
  {
    icon: <FaSlidersH style={iconStyles.sliders} />,
    title: "Smart Filtering & Custom Alerts",
    description:
      "Use keyword filters, content-type settings, and role mentions to customize alerts to fit your audience.",
  },
  {
    icon: <FaSyncAlt style={iconStyles.sync} />,
    title: "Multi-Account Support",
    description:
      "Connect multiple accounts per platform with intelligent rate-limit handling and no duplicates.",
  },
  {
    icon: <FaGlobe style={iconStyles.globe} />,
    title: "Web Dashboard (Coming Soon)",
    description:
      "Easily manage your bot, feeds, and alerts in one place with a clean and intuitive dashboard.",
  },
  {
    icon: <FaUserShield style={iconStyles.shield} />,
    title: "Role-Based Access Control",
    description:
      "Assign who can manage feeds and settings with role-level permissions on Discord.",
  },
  {
    icon: <FaHistory style={iconStyles.history} />,
    title: "Alert History & Logs",
    description:
      "Track all alerts and activity with detailed logs — great for debugging or reviewing content flow.",
  },
  {
    icon: <FaTachometerAlt style={iconStyles.tachometer} />,
    title: "Lightning Fast Performance",
    description:
      "Built to scale and perform under load — EchoAlert handles busy communities effortlessly.",
  },
];

const Features = () => {
  return (
    <div id="features" className="flex justify-center items-center min-h-screen  text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold mb-4">
          ⚡ EchoAlert Features
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Designed to keep your Discord community connected and instantly updated.
        </p>
        <Swiper
           effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay,EffectCoverflow]}
        className="mySwiper w-full h-fit"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="flex justify-center max-w-1/3 h-full "> 
              <div className="bg-gradient-to-br from-[#1a2b4f]  to-[#2c3e70] min-h-48 flex-row justify-center align-middle rounded-2xl p-6 shadow-lg transition-transform transform  border border-[#3b4f7a]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#2c3e70] rounded-full shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Features;
