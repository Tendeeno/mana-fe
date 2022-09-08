import { useEffect, useState } from 'react';
import MANAOutline from '../public/svgs/mana'
import Navigation from './Navigation'


const Hero = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute inset-0 z-20 bg-dark bg-opacity-40"></div>
      <video className="lazy absolute inset-0 z-10 object-center object-cover h-screen w-screen" autoPlay muted loop playsInline>
        <source src='/videos/ASMRGlow.mp4' type="video/mp4" />
        {/* poster="one-does-not-simply.jpg" */}
        {/* <source data-src="one-does-not-simply.mp4" type="video/mp4" /> */}
      </video>
      <Navigation />
      <div id="mana-large" className="absolute transition-transform duration-700 z-30 -bottom-28 px-20">
        <MANAOutline />
      </div>
    </div>
  )
}

export default Hero;