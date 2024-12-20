'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Inter } from 'next/font/google';

import Logo from '@/assets/logosaas.png';
import MenuIcon from '@/assets/menu.svg';
import ArrowRightIcon from '@/assets/arrow-right.svg';

import { cn } from '@/utils/cn';
import { NAV_LINKS } from '@/constants';
import Button from '@/components/share/ui/button';

const inter = Inter({ subsets: ['latin'] });

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 700) {
      if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else {
      setIsVisible(false);
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'top-0  w-full backdrop-blur-md z-50 transition-transform',
        isVisible ? 'fixed animate-fade-down' : 'absolute',
      )}
    >
      <div className={cn(inter.className, 'bg-black text-white flex items-center justify-center py-3')}>
        <p className="mr-3 hidden text-sm opacity-60 md:block">Streamline your workflow and boost your productivity.</p>
        <p className="peer mr-1 cursor-pointer text-xs lg:hover:underline">Get started for free</p>
        <ArrowRightIcon
          width={16}
          height={16}
          className="transition-transform duration-300 lg:peer-hover:translate-x-1"
        />
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <button className="active:scale-90 hover:rotate-180 transition-transform duration-300">
              <Link href={'/'}>
                <Image src={Logo} alt="saas-logo" width={40} height={40} />
              </Link>
            </button>
            <div className="hidden md:flex items-center">
              <nav className="flex gap-6 items-center">
                <ul className="flex items-center -mx-3">
                  {NAV_LINKS.map(({ name, href }) => (
                    <li key={name}>
                      <Link
                        className="inline-flex py-2 px-3 text-black/60 hover:text-black/100 transition-colors"
                        href={href}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Button>Get for free</Button>
              </nav>
            </div>
            <button className="md:hidden">
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
