import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer.jsx";
function layout() {
  return (
    <>
     <div className="flex flex-col min-h-screen justify-between items-center  bg-gradient-to-br from-[#0d1a4a] to-[#422b6e]">
      <Header />
      <main className="flex-grow  w-full  z-10 px-16 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default layout;
