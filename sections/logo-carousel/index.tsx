'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import acmeLogo from '@/assets/logo-acme.png';
import quantumLogo from '@/assets/logo-quantum.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';

interface ILogoCarousel {}

const LogoCarousel: React.FC<ILogoCarousel> = ({}) => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: '-50%',
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop',
            }}
          >
            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-image" />
            <Image src={quantumLogo} alt="Quantum Logo" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Echo Logo" className="logo-ticker-image" />
            <Image src={celestialLogo} alt="Celestial Logo" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="Pulse Logo" className="logo-ticker-image" />
            <Image src={apexLogo} alt="Apex Logo" className="logo-ticker-image" />
            <Image src={acmeLogo} alt="Acme Logo" className="logo-ticker-image" />
            <Image src={quantumLogo} alt="Quantum Logo" className="logo-ticker-image" />
            <Image src={echoLogo} alt="Echo Logo" className="logo-ticker-image" />
            <Image src={celestialLogo} alt="Celestial Logo" className="logo-ticker-image" />
            <Image src={pulseLogo} alt="Pulse Logo" className="logo-ticker-image" />
            <Image src={apexLogo} alt="Apex Logo" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
