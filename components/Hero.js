import { useEffect, useState } from "react";
import MANAOutline from "../public/svgs/mana";
import Navigation from "./Navigation";

const Hero = () => {
  return (
    <div className="relative w-auto h-screen">
      <div className="absolute inset-0 z-20 bg-dark bg-opacity-40"></div>
      <video
        className="absolute inset-0 z-10 object-cover object-center w-full h-screen lazy"
        autoPlay
        muted
        loop
        playsInline
        poster="/videos/vibgdeobg.png">
        <source src="/videos/new-bg.mp4" type="video/mp4" />
        {/* poster="one-does-not-simply.jpg" */}
        {/* <source data-src="one-does-not-simply.mp4" type="video/mp4" /> */}
      </video>
      <Navigation />
      <div
        id="mana-large"
        className="absolute z-30 flex justify-center w-full px-20 mx-auto transition-transform duration-700 -bottom-28">
        <MANAOutline />
      </div>
    </div>
  );
};

export default Hero;
