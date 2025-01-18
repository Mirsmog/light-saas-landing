import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import LogoImage from '@/assets/logosaas.png';

export const Logo = ({}) => {
  return (
    <button className="transition-transform duration-300 hover:rotate-180 active:scale-90">
      <Link href={'/'}>
        <Image className="w-10 h-10" src={LogoImage.src} alt="saas-logo" width={40} height={40} />
      </Link>
    </button>
  );
};
